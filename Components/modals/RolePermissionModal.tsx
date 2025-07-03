// "use client";
// import { useEffect, useState } from "react";

// interface Props {
//   roleId: number;
//   onClose: () => void;
// }

// export default function RolePermissionModal({ roleId, onClose }: Props) {
//   const [permissions, setPermissions] = useState([]);
//   const [selected, setSelected] = useState<number[]>([]);

//   useEffect(() => {
//     fetch("http://localhost/crime_api/officers/permissions?type=permission")
//       .then(res => res.json())
//       .then(data => setPermissions(data.permissions || []));
//   }, []);

//   const handleAssign = async () => {
//     for (const permissionId of selected) {
//       await fetch("http://localhost/crime_api/officers/roles?type=assign", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ role_id: roleId, permission_id: permissionId }),
//       });
//     }
//     onClose();
//   };

//   const toggleSelect = (id: number) => {
//     setSelected(prev =>
//       prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
//     );
//   };

//   return (
//     <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
//       <div className="bg-white p-6 rounded-md w-[90%] max-w-md">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-semibold">Assign Permissions</h2>
//           <button onClick={onClose} className="text-red-600 font-bold text-xl">&times;</button>
//         </div>
//         <ul className="space-y-2 max-h-60 overflow-y-auto">
//           {permissions.map((perm: any) => (
//             <li key={perm.id} className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 checked={selected.includes(perm.id)}
//                 onChange={() => toggleSelect(perm.id)}
//               />
//               <span>{perm.name}</span>
//             </li>
//           ))}
//         </ul>
//         <button
//           onClick={handleAssign}
//           className="mt-4 w-full bg-blue-600 text-white py-2 rounded"
//         >
//           Assign Selected
//         </button>
//       </div>
//     </div>
//   );
// }


"use client";
import { useEffect, useState } from "react";

interface Role {
  id: number;
  name: string;
}

interface Permission {
  id: number;
  name: string;
}

interface Props {
  onClose: () => void;
}

export default function RolePermissionModal({ onClose }: Props) {
  const [roles, setRoles] = useState<Role[]>([]);
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [selectedRoleId, setSelectedRoleId] = useState<number | null>(null);
  const [selectedPermissions, setSelectedPermissions] = useState<number[]>([]);

  useEffect(() => {
    // Fetch roles
    fetch("http://localhost/crime_api/officers/roles?type=role")
      .then(res => res.json())
      .then(data => setRoles(data.roles || []));

    // Fetch permissions
    fetch("http://localhost/crime_api/officers/permissions?type=permission")
      .then(res => res.json())
      .then(data => setPermissions(data.permissions || []));
  }, []);

  const handleAssign = async () => {
    if (!selectedRoleId) {
      alert("Please select a role");
      return;
    }

    for (const permissionId of selectedPermissions) {
      await fetch("http://localhost/crime_api/officers/roles?type=assign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role_id: selectedRoleId, permission_id: permissionId }),
      });
    }

    onClose();
  };

  const togglePermission = (id: number) => {
    setSelectedPermissions(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-6 rounded-md w-[90%] max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Assign Permissions</h2>
          <button onClick={onClose} className="text-red-600 font-bold text-xl">&times;</button>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Select Role:</label>
          <select
            value={selectedRoleId ?? ""}
            onChange={e => setSelectedRoleId(Number(e.target.value))}
            className="w-full border rounded px-3 py-2"
          >
            <option value="">-- Choose a Role --</option>
            {roles.map(role => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </div>

        <ul className="space-y-2 max-h-60 overflow-y-auto border rounded p-2">
          {permissions.map(perm => (
            <li key={perm.id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedPermissions.includes(perm.id)}
                onChange={() => togglePermission(perm.id)}
              />
              <span>{perm.name}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={handleAssign}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Assign Selected Permissions to Role
        </button>
      </div>
    </div>
  );
}

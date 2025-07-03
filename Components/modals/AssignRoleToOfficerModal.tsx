// "use client";

// import { useEffect, useState } from "react";

// interface Props {
//   roleId: number;
//   onClose: () => void;
// }

// interface Officer {
//   id: number;
//   first_name: string;
//   last_name: string;
//   email: string;
// }

// export default function AssignRoleToOfficerModal({ roleId, onClose }: Props) {
//   const [officers, setOfficers] = useState<Officer[]>([]);
//   const [selectedOfficerId, setSelectedOfficerId] = useState<number | null>(null);
//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     fetch("http://localhost/crime_api/officers-list") // Adjust to your endpoint
//       .then((res) => res.json())
//       .then((data) => {
//         setOfficers(data.officers || []);
//       });
//   }, []);

//   const handleAssign = async () => {
//     if (!selectedOfficerId) return;

//     const response = await fetch("http://localhost/crime_api/officers/assign-role", {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         officer_id: selectedOfficerId,
//         role_id: roleId,
//       }),
//     });

//     if (response.ok) {
//       setSuccess(true);
//       setTimeout(() => {
//         setSuccess(false);
//         onClose();
//       }, 2000);
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
//       <div className="bg-white p-6 rounded-md w-[90%] max-w-md">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-semibold">Assign Role to Officer</h2>
//           <button onClick={onClose} className="text-red-600 font-bold text-xl">
//             &times;
//           </button>
//         </div>

//         <label className="block mb-2 text-sm font-medium text-gray-700">Select Officer</label>
//         <select
//           className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
//           value={selectedOfficerId ?? ""}
//           onChange={(e) => setSelectedOfficerId(parseInt(e.target.value))}
//         >
//           <option value="">-- Select Officer --</option>
//           {officers.map((officer) => (
//             <option key={officer.id} value={officer.id}>
//               {officer.first_name} {officer.last_name} ({officer.email})
//             </option>
//           ))}
//         </select>

//         {success && (
//           <p className="text-green-600 text-center text-sm mb-2">Role assigned successfully!</p>
//         )}

//         <button
//           onClick={handleAssign}
//           disabled={!selectedOfficerId}
//           className={`w-full py-2 rounded ${
//             selectedOfficerId
//               ? "bg-blue-600 hover:bg-blue-700 text-white"
//               : "bg-gray-400 text-white cursor-not-allowed"
//           }`}
//         >
//           Assign Role
//         </button>
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";

interface Props {
  onClose: () => void;
}

interface Officer {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role_name: string;
}

interface Role {
  id: number;
  name: string;
}

export default function AssignRoleToOfficerModal({ onClose }: Props) {
  const [officers, setOfficers] = useState<Officer[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [selectedOfficerId, setSelectedOfficerId] = useState<number | null>(null);
  const [selectedRoleId, setSelectedRoleId] = useState<number | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch("http://localhost/crime_api/officers-list")
      .then((res) => res.json())
      .then((data) => setOfficers(data.officers || []));

    fetch("http://localhost/crime_api/officers/roles?type=role")
      .then((res) => res.json())
      .then((data) => setRoles(data.roles || []));
  }, []);

  const handleAssign = async () => {
    if (!selectedOfficerId || !selectedRoleId) return;

    const response = await fetch(`http://localhost/crime_api/officers/${selectedOfficerId}?type=assign-role`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        officer_id: selectedOfficerId,
        role_id: selectedRoleId,
      }),
    });

    if (response.ok) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-6 rounded-md w-[90%] max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Assign Role to Officer</h2>
          <button onClick={onClose} className="text-red-600 font-bold text-xl">
            &times;
          </button>
        </div>

        <label className="block text-sm font-medium text-gray-700">Select Officer</label>
        <select
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
          value={selectedOfficerId ?? ""}
          onChange={(e) => setSelectedOfficerId(parseInt(e.target.value))}
        >
          <option value="">-- Select Officer --</option>
          {officers.map((officer) => (
            <option key={officer.id} value={officer.id}>
              {officer.first_name} {officer.last_name} ({officer.email} )  
              {officer.role_name ? ` - ${officer.role_name}` : " - No Role"}
            </option>
          ))}
        </select>

        <label className="block text-sm font-medium text-gray-700">Select Role</label>
        <select
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
          value={selectedRoleId ?? ""}
          onChange={(e) => setSelectedRoleId(parseInt(e.target.value))}
        >
          <option value="">-- Select Role --</option>
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>

        {success && (
          <p className="text-green-600 text-center text-sm mb-2">
            Role assigned successfully!
          </p>
        )}

        <button
          onClick={handleAssign}
          disabled={!selectedOfficerId || !selectedRoleId}
          className={`w-full py-2 rounded ${
            selectedOfficerId && selectedRoleId
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-gray-400 text-white cursor-not-allowed"
          }`}
        >
          Assign Role
        </button>
      </div>
    </div>
  );
}

// "use client";

// import React, { useEffect, useState } from "react";
// import { Pencil, Trash2 } from "lucide-react";
// import Pagination from "@/Components/pagination";

// interface Officer {
//   id: number;
//   name: string;
//   email: string;
//   role: string;
//   agency: string;
//   status: string;
//   last_active: string;
// }

// export default function UserRoleTable() {
//   const [users, setUsers] = useState<Officer[]>([]);
  

//   useEffect(() => {
//     fetch("http://localhost/crime_api/officers")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Fetched officers:", data); // ✅ DEBUG log
//         if (Array.isArray(data)) {
//           setUsers(data);
//         } else {
//           console.error("Expected array but got:", data);
//           setUsers([]);
//         }
//       })
//       .catch((err) => {
//         console.error("Failed to fetch officers:", err);
//         setUsers([]);
//       });
//   }, []);
  
//     return (
//     <div className="p-4 w-full overflow-x-auto">
//       <table className="min-w-full bg-white text-sm rounded-lg overflow-hidden">
//         <thead>
//           <tr className="bg-gray-100 text-left">
//             <th className="p-3">S/N</th>
//             <th className="p-3">Name</th>
//             <th className="p-3">Email</th>
//             <th className="p-3">Role</th>
//             <th className="p-3">Agency</th>
//             <th className="p-3">Status</th>
//             <th className="p-3">Last Active</th>
//             <th className="p-3">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user, index) => (
//             <tr key={user.id} className="hover:bg-gray-50">
//               <td className="p-3">{index + 1}</td>
//               <td className="p-3">{user.name}</td>
//               <td className="p-3">{user.email}</td>
//               <td className="p-3">{user.role}</td>
//               <td className="p-3">{user.agency}</td>
//               <td className="p-3">
//                 <span
//                   className={`px-2 py-1 rounded text-xs font-medium ${
//                     user.status === "Active"
//                       ? "bg-green-100 text-green-800"
//                       : "bg-red-100 text-red-800"
//                   }`}
//                 >
//                   {user.status}
//                 </span>
//               </td>
//               <td className="p-3">{user.last_active}</td>
//               <td className="p-3 space-x-2">
//                 <button className="text-gray-700 text-xs px-2 py-1 border rounded">
//                   View
//                 </button>
//                 <button className="text-gray-700 text-xs px-2 py-1 border rounded">
//                   {user.status === "Active" ? "Deactivate" : "Activate"}
//                 </button>
//                 <button className="inline-flex items-center text-gray-600 hover:text-blue-600">
//                   <Pencil className="w-4 h-4" />
//                 </button>
//                 <button className="inline-flex items-center text-gray-600 hover:text-red-600">
//                   <Trash2 className="w-4 h-4" />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <Pagination
//         currentPage={1}
//         totalPages={1}
//         onPageChange={(page) => console.log("Go to", page)}
//       />
//     </div>
//   );
// }









"use client";

import React, { useState, useEffect } from "react";
import { Pencil, Trash2 } from "lucide-react";
import Pagination from "@/Components/pagination";
import { useRouter } from "next/navigation";
import ViewOfficerModal from "@/Components/modals/ViewOfficerModal";
import EditOfficerModal from "@/Components/modals/EditOfficerModal";






export default function Rolemanagementtable({ filters }) {
  const [users, setUsers] = useState([]);
  const router = useRouter();

  // Others added by me
  // const [showModal, setShowModal] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  const [selectedOfficerId, setSelectedOfficerId] = useState<string | null>(null);
  const [editingOfficer, setEditingOfficer] = useState(null);

  const handleDelete = async (id: string) => {
    const confirm = window.confirm("Are you sure you want to delete this officer?");
    if (!confirm) return;
  
    try {
      const res = await fetch(`http://localhost/crime_api/officers/${id}`, {
        method: "DELETE",
      });
  
      if (!res.ok) throw new Error("Failed to delete officer");
  
      // Refresh or filter out deleted officer
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting officer:", error);
      alert("Failed to delete officer.");
    }
  };
  


  

  


  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.status) params.append("status", filters.status);
    // if (filters.role) params.append("role", filters.role);
    if (filters.role) params.append("role_id", filters.role);
    // if (filters.role) params.append("role", filters.role); // Not role_id
    if (filters.agency) params.append("agency", filters.agency);
    if (filters.searchText) params.append("search", filters.searchText);
    if (filters.zone) params.append("zone", filters.zone);
    if (filters.state) params.append("state", filters.state); // ← now matches
    if (filters.lga) params.append("lga", filters.lga);
    if (filters.division) params.append("division", filters.division);
    
    
  
    fetch(`http://localhost/crime_api/officers?${params.toString()}`)
      .then(async (res) => {
        const contentType = res.headers.get("content-type");
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        if (!contentType || !contentType.includes("application/json")) {
          const text = await res.text();
          throw new Error("Expected JSON, got: " + text.slice(0, 100));
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          console.error("Expected array but got:", data);
          setUsers([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setUsers([]);
      });
  }, [filters]);

  // const handleViewOfficer = () => {
  //   setShowModal(true);
  // };

  

    return (
    <div className="p-4 w-full overflow-x-auto">
      <table className="min-w-full bg-white text-sm rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">S/N</th>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Role</th>
            <th className="p-3">Agency</th>
            {/* <th className="p-3">Officer Code</th>
            <th className="p-3">Officer Number</th> */}
            <th className="p-3">Status</th>
            <th className="p-3">Last Active</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-3">{index + 1}</td>
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.role_name}</td>
              <td className="p-3">{user.agency}</td>
              {/* <td>{user.officer_code}</td> */}
              {/* <td>{user.employment_number}</td> */}

              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    user.status === "active"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td className="p-3">{user.lastActive}</td>
              <td className="p-3 space-x-2">
                {/* <button onClick={() => router.push(`/access-request/search-home`)} className="text-gray-700 text-xs px-2 py-1 border rounded"> */}
                <button
                  onClick={() => setSelectedOfficerId(user.id)}
                  className="text-gray-700 text-xs px-2 py-1 border rounded"
                >
                  View
                </button>
                <button className="text-gray-700 text-xs px-2 py-1 border rounded">
                  {user.status === "active" ? "Deactivate" : "Activate"}
                </button>

                {/* <button className="inline-flex items-center text-gray-600 hover:text-blue-600">
                  <Pencil className="w-4 h-4" />
                </button> */}

<button
  className="inline-flex items-center text-gray-600 hover:text-blue-600"
  onClick={() => setEditingOfficer(user)}
>
  <Pencil className="w-4 h-4" />
</button>

<button
  onClick={() => handleDelete(user.id)}
  className="inline-flex items-center text-gray-600 hover:text-red-600"
>
  <Trash2 className="w-4 h-4" />
</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

{selectedOfficerId && (
  <ViewOfficerModal officerId={selectedOfficerId} onClose={() => setSelectedOfficerId(null)} />
)}

{editingOfficer && (
  <EditOfficerModal
    officer={editingOfficer}
    onClose={() => setEditingOfficer(null)}
  />
)}

      <Pagination
        currentPage={1}
        totalPages={10}
        onPageChange={(page) => console.log("Go to", page)}
      />
    </div>
  );
}


// "use client";

// import React, { useState, useEffect } from "react";
// import { Pencil, Trash2 } from "lucide-react";
// import Pagination from "@/Components/pagination";

// export default function Rolemanagementtable({ filters }) {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const params = new URLSearchParams();
//     if (filters.status) params.append("status", filters.status);
//     if (filters.role) params.append("role", filters.role);
//     if (filters.jurisdiction) params.append("agency", filters.jurisdiction); // ✅ FIXED key
//     if (filters.searchText) params.append("search", filters.searchText);

//     fetch(`http://localhost/crime_api/officers?${params.toString()}`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (Array.isArray(data)) {
//           setUsers(data);
//         } else {
//           console.error("Expected array but got:", data);
//           setUsers([]);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching users:", error);
//         setUsers([]);
//       });
//   }, [filters]);

//   return (
//     <div className="p-4 w-full overflow-x-auto">
//       <table className="min-w-full bg-white text-sm rounded-lg overflow-hidden">
//         <thead>
//           <tr className="bg-gray-100 text-left">
//             <th className="p-3">S/N</th>
//             <th className="p-3">Name</th>
//             <th className="p-3">Email</th>
//             <th className="p-3">Role</th>
//             <th className="p-3">Agency</th>
//             <th className="p-3">Status</th>
//             <th className="p-3">Last Active</th>
//             <th className="p-3">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user, index) => (
//             <tr key={index} className="hover:bg-gray-50">
//               <td className="p-3">{index + 1}</td>
//               <td className="p-3">{user.name}</td>
//               <td className="p-3">{user.email}</td>
//               <td className="p-3">{user.role}</td>
//               <td className="p-3">{user.agency}</td>
//               <td className="p-3">
//                 <span
//                   className={`px-2 py-1 rounded text-xs font-medium ${
//                     user.status === "active"
//                       ? "bg-green-100 text-green-800"
//                       : "bg-red-100 text-red-800"
//                   }`}
//                 >
//                   {user.status}
//                 </span>
//               </td>
//               <td className="p-3">{user.lastActive}</td>
//               <td className="p-3 space-x-2">
//                 <button className="text-gray-700 text-xs px-2 py-1 border rounded">
//                   View
//                 </button>
//                 <button className="text-gray-700 text-xs px-2 py-1 border rounded">
//                   {user.status === "active" ? "Deactivate" : "Activate"}
//                 </button>
//                 <button className="inline-flex items-center text-gray-600 hover:text-blue-600">
//                   <Pencil className="w-4 h-4" />
//                 </button>
//                 <button className="inline-flex items-center text-gray-600 hover:text-red-600">
//                   <Trash2 className="w-4 h-4" />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <Pagination
//         currentPage={1}
//         totalPages={10}
//         onPageChange={(page) => console.log("Go to", page)}
//       />
//     </div>
//   );
// }

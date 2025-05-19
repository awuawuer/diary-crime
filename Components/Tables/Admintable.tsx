// import React from "react";
// import { Edit, Trash, Eye, X } from "lucide-react";

// type Jurisdiction = {
//   sn: number;
//   name: string;
//   type: string;
//   region: string;
//   admins: string;
//   users: number;
//   cases: number;
//   status: "Active" | "Inactive" | "Pending";
// };

// export default function JurisdictionTable() {
//   const jurisdictions: Jurisdiction[] = [
//     {
//       sn: 1,
//       name: "Central Precinct",
//       type: "State Headquarters",
//       region: "North Central Zone",
//       admins: "Inspector Jonah, ACP Bayo",
//       users: 42,
//       cases: 187,
//       status: "Active",
//     },
//     {
//       sn: 2,
//       name: "Eastern Division",
//       type: "Divisional Command",
//       region: "South Eastern Zone",
//       admins: "DSP Olumide",
//       users: 28,
//       cases: 94,
//       status: "Active",
//     },
//     {
//       sn: 3,
//       name: "Western Outpost",
//       type: "Station",
//       region: "South Western Zone",
//       admins: "ASP Chioma, Inspector David",
//       users: 15,
//       cases: 63,
//       status: "Inactive",
//     },
//     {
//       sn: 4,
//       name: "Northern Territory",
//       type: "Area Command",
//       region: "North Eastern Zone",
//       admins: "CSP Musa",
//       users: 37,
//       cases: 142,
//       status: "Pending",
//     },
//   ];

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-lg font-semibold text-gray-800">
//           Jurisdiction Overview
//         </h2>
//         <a
//           href="#"
//           className="text-blue-600 hover:text-blue-800 text-xs font-medium"
//         >
//           View all
//         </a>
//       </div>

//       <div className="rounded-lg border border-gray-200 overflow-hidden">
//         <table className="w-full">
//           <thead className="bg-gray-50">
//             <tr>
//               {[
//                 "S/N",
//                 "Jurisdiction Name",
//                 "Type",
//                 "Region",
//                 "Assigned Admin(s)",
//                 "Users",
//                 "Cases",
//                 "Status",
//                 "Action",
//               ].map((header) => (
//                 <th
//                   key={header}
//                   className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider truncate"
//                 >
//                   {header}
//                 </th>
//               ))}
//             </tr>
//           </thead>

//           <tbody className="bg-white divide-y divide-gray-200">
//             {jurisdictions.map((jurisdiction) => (
//               <tr key={jurisdiction.sn} className="hover:bg-gray-50">
//                 <td className="px-3 py-2 text-xs text-gray-900 truncate">
//                   {jurisdiction.sn}
//                 </td>
//                 <td className="px-3 py-2 text-xs text-gray-900 truncate">
//                   {jurisdiction.name}
//                 </td>
//                 <td className="px-3 py-2 text-xs text-gray-900 truncate">
//                   {jurisdiction.type}
//                 </td>
//                 <td className="px-3 py-2 text-xs text-gray-900 truncate">
//                   {jurisdiction.region}
//                 </td>
//                 <td className="px-3 py-2 text-xs text-gray-900 truncate">
//                   {jurisdiction.admins}
//                 </td>
//                 <td className="px-3 py-2 text-xs text-gray-900 truncate">
//                   {jurisdiction.users}
//                 </td>
//                 <td className="px-3 py-2 text-xs text-gray-900 truncate">
//                   {jurisdiction.cases}
//                 </td>
//                 <td className="px-3 py-2 text-xs truncate">
//                   <span
//                     className={`px-2 inline-flex leading-5 font-semibold rounded-full ${
//                       jurisdiction.status === "Active"
//                         ? "bg-green-100 text-green-800"
//                         : jurisdiction.status === "Inactive"
//                         ? "bg-red-100 text-red-800"
//                         : "bg-yellow-100 text-yellow-800"
//                     }`}
//                   >
//                     {jurisdiction.status}
//                   </span>
//                 </td>
//                 <td className="px-3 py-2 flex items-center space-x-2">
//                   <button className="text-gray-400 text-xs font-medium hover:text-blue-600 p-1 rounded flex items-center">
//                     <Eye className="w-3 h-3 mr-1" /> View
//                   </button>
//                   <button className="text-gray-400 text-xs font-medium hover:text-red-600 p-1 rounded flex items-center">
//                     <X className="w-3 h-3 mr-1" /> Disable
//                   </button>
//                   <button className="text-gray-400 hover:text-green-600 p-1 rounded">
//                     <Edit className="w-4 h-4" />
//                   </button>
//                   <button className="text-gray-400 hover:text-yellow-600 p-1 rounded">
//                     <Trash className="w-4 h-4" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

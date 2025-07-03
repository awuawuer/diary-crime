// THIS FILTERS DATA ON SELECT
// "use client";

// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { Search, Download, PlusCircle } from "lucide-react";
// import Rolemanagementtable from "@/Components/Tables/Rolemanagementtable";
// import AddUserModal from "@/Components/modals/AddUserModal";

// export default function UserRoleManagementHeader() {
//   const [status, setStatus] = useState("");
//   const [role, setRole] = useState("");
//   const [agency, setAgency] = useState("");
//   const [searchText, setSearchText] = useState("");
//   const [zone, setZone] = useState("");
// const [stateId, setStateId] = useState("");
// const [lga, setLga] = useState("");
// const [division, setDivision] = useState("");
//   const [showModal, setShowModal] = useState(false);

//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const isAuthenticated = localStorage.getItem("isAuthenticated");
//     if (isAuthenticated !== "true") {
//       router.push("/login");
//     } else {
//       setIsLoading(false);
//     }
//   }, [router]);

//   if (isLoading) return null;

//   const handleExport = () => {
//     console.log("Exporting data...");
//   };

//   const handleAddUser = () => {
//     setShowModal(true);
//   };

//   return (
//     <div className="w-full p-4 md:p-6">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//         <div className="flex-1">
//           <h1 className="text-xl text-blue-500 font-semibold">
//             Super Admin Dashboard
//           </h1>
//           <p className="text-sm text-gray-500">
//             View and manage agencies and users
//           </p>
//           <div className="mt-2 flex items-center border border-gray-300 rounded-md px-3 py-2 w-full max-w-md">
//             <Search className="w-4 h-4 text-gray-400 mr-2" />
//             <input
//               type="text"
//               placeholder="Search by name, role, agency or email"
//               value={searchText}
//               onChange={(e) => setSearchText(e.target.value)}
//               className="outline-none w-full"
//             />
//           </div>
//         </div>

//         <div className="flex flex-wrap items-center gap-2">
//           <select
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//             className="border border-gray-300 rounded-md px-3 py-2 text-sm"
//           >
//             <option value="">Status</option>
//             <option value="active">Active</option>
//             <option value="inactive">Inactive</option>
//           </select>

//           <select
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             className="border border-gray-300 rounded-md px-3 py-2 text-sm"
//           >
//             <option value="">Role</option>
//             <option value="user">User</option>
//             <option value="admin">Admin</option>
//             <option value="supervisor">Supervisor</option>
//           </select>

//           <select
//             value={agency}
//             onChange={(e) => setAgency(e.target.value)}
//             className="border border-gray-300 rounded-md px-3 py-2 text-sm"
//           >
//             <option value="">Agency</option>
//             <option value="EFCC">EFCC</option>
//             <option value="NPF">NPF</option>
//             <option value="NDLEA">NDLEA</option>
//           </select>

//           <select value={zone} onChange={(e) => setZone(e.target.value)}>
//   <option value="">Zone</option>
//   <option value="1">Zone 1</option>
//   <option value="2">Zone 2</option>
//   <option value="3">Zone 3</option>
//   <option value="4">EFCC Lagos Zone</option>
//   <option value="5">EFCC Rivers Zone</option>
//   {/* etc. */}
// </select>

// <select value={stateId} onChange={(e) => setStateId(e.target.value)}>
//   <option value="">State</option>
//   <option value="1">Benue</option>
//   <option value="2">Borno</option>
//   <option value="3">Kaduna</option>
//   <option value="4">Kano</option>
//   <option value="5">Kogi</option>
//   <option value="6">Lagos</option>
//   <option value="7">Rivers</option>
//   {/* etc. */}
// </select>

// <select value={lga} onChange={(e) => setLga(e.target.value)}>
//   <option value="">LGA</option>
//   <option value="1">Makurdi</option>
//   <option value="2">Lokoja</option>
//   <option value="3">Zaria</option>
//   <option value="4">Dala</option>
//   <option value="5">Maiduguri</option>
//   <option value="6">Ikeja</option>
//   <option value="7">Port Harcourt</option>
//   {/* etc. */}
// </select>

// <select value={division} onChange={(e) => setDivision(e.target.value)}>
//   <option value="">Division</option>
//   <option value="1">Financial Crimes Division</option>
//   <option value="2">Cybercrime Unit</option>
//   <option value="3">Asset Recovery Division</option>
//   <option value="4">CID</option>
//   <option value="5">Anti-Kidnapping</option>
//   <option value="6">Forensics</option>
//   {/* etc. */}
// </select>



//           {/* <button
//             className="bg-green-800 text-white px-4 py-2 rounded-md text-sm"
//           >
//             Apply filters
//           </button>
//  */}
//           <button
//             onClick={handleExport}
//             className="bg-green-800 text-white px-4 py-2 rounded-md flex items-center gap-1 text-sm"
//           >
//             <Download className="w-4 h-4" /> Export
//           </button>

//           <button
//             onClick={handleAddUser}
//             className="bg-green-800 text-white px-4 py-2 rounded-md flex items-center gap-1 text-sm"
//           >
//             <PlusCircle className="w-4 h-4" /> Add New User
//           </button>
//         </div>
//       </div>

//       {/* 🔁 Pass filters here */}
//       <Rolemanagementtable
//   filters={{ status, role, agency, searchText, zone, state:stateId, lga, division }}
// />
//       {showModal && <AddUserModal onClose={() => setShowModal(false)} />}
//     </div>
//   );
// }




//DYNAMIC DROP DOWN

"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, Download, PlusCircle } from "lucide-react";
import Rolemanagementtable from "@/Components/Tables/Rolemanagementtable";
import testtable from "@/Components/Tables/testtable";
// import AddUserModal from "@/Components/modals/AddUserModal";
import AddOfficerModal from "@/Components/modals/AddOfficerModal";
import AddRolePermissionModal from "@/Components/modals/AddRolePermissionModal";
import RolePermissionModal from "@/Components/modals/RolePermissionModal";
import AssignRoleToOfficerModal from "@/Components/modals/AssignRoleToOfficerModal";


type Option = { id: string; name: string };
type Agency = { code: string; name: string };

export default function UserRoleManagementHeader() {
  const router = useRouter();

  // Filters
  const [status, setStatus] = useState("");
  const [role, setRole] = useState("");
  const [agency, setAgency] = useState("");
  const [zone, setZone] = useState("");
  const [stateId, setStateId] = useState("");
  const [lga, setLga] = useState("");
  const [division, setDivision] = useState("");
  const [searchText, setSearchText] = useState("");

  // Dropdown options
  const [statuses, setStatuses] = useState<string[]>([]);
  // const [roles, setRoles] = useState<string[]>([]);
  const [agencies, setAgencies] = useState<Agency[]>([]);
  const [zones, setZones] = useState<Option[]>([]);
  const [states, setStates] = useState<Option[]>([]);
  const [lgas, setLgas] = useState<Option[]>([]);
  const [divisions, setDivisions] = useState<Option[]>([]);

  interface Role {
    id: string;
    name: string;
  }
  
  const [roles, setRoles] = useState<Role[]>([]);
  

  // Others
  // const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showOfficerModal, setShowOfficerModal] = useState(false);
const [showRolePermissionModal, setShowRolePermissionModal] = useState(false);
const [showAssignRolePermissionModal, setShowAssignRolePermissionModal] = useState(false);
const [showAssignRoleToOfficerModal, setshowAssignRoleToOfficerModal] = useState(false);

const handleAddOfficer = () => setShowOfficerModal(true);
const handleAddRolePermission = () => setShowRolePermissionModal(true);
const handleAssignRolePermission = () => setShowAssignRolePermissionModal(true);
const handleAssignRoleToOfficer = () => setshowAssignRoleToOfficerModal(true);


  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated !== "true") {
      router.push("/login");
    } else {
      setIsLoading(false);
    }
  }, [router]);

  useEffect(() => {
    const fetchDropdowns = async () => {
      try {
        const [statusRes, roleRes, agencyRes, zoneRes, stateRes, lgaRes, divisionRes] = await Promise.all([
          fetch("http://localhost/crime_api/dropdowns/statuses"),
          fetch("http://localhost/crime_api/dropdowns/roles"),
          fetch("http://localhost/crime_api/dropdowns/agencies"),
          fetch("http://localhost/crime_api/dropdowns/zones"),
          fetch("http://localhost/crime_api/dropdowns/states"),
          fetch("http://localhost/crime_api/dropdowns/lgas"),
          fetch("http://localhost/crime_api/dropdowns/divisions"),
        ]);

        const [statusData, roleData, agencyData, zoneData, stateData, lgaData, divisionData] = await Promise.all([
          statusRes.json(),
          roleRes.json(),
          agencyRes.json(),
          zoneRes.json(),
          stateRes.json(),
          lgaRes.json(),
          divisionRes.json(),
        ]);

        if (Array.isArray(statusData)) setStatuses(statusData);
        // if (Array.isArray(roleData)) setRoles(roleData);
        if (roleData.roles) setRoles(roleData.roles);
        if (Array.isArray(agencyData)) setAgencies(agencyData);
        if (Array.isArray(zoneData)) setZones(zoneData);
        if (Array.isArray(stateData)) setStates(stateData);
        if (Array.isArray(lgaData)) setLgas(lgaData);
        if (Array.isArray(divisionData)) setDivisions(divisionData);
      } catch (error) {
        console.error("Failed to fetch dropdowns:", error);
      }
    };

    fetchDropdowns();
  }, []);

  if (isLoading) return null;

  const handleExport = () => {
    console.log("Exporting data...");
  };

  // const handleAddOfficer = () => {
  //   setShowModal(true);
  // };

  return (
    <div className="w-full p-4 md:p-6">
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
      <button onClick={() => router.push(`/role-management/RoleTable`)} className="text-blue-600 underline">
                  View Roles
                </button>
                <button onClick={() => router.push(`/role-management/PermissionList`)} className="text-blue-600 underline">
                  View Permisions
                </button>

        <h1 className="text-xl text-blue-500 font-semibold">Super Admin Dashboard</h1>
        <p className="text-sm text-gray-500">View and manage agencies and users</p>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full max-w-md">
          <Search className="w-4 h-4 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search by first or last name, email, employment number or officer code"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="outline-none w-full"
          />
        </div>  
        <div className="flex gap-2 ml-auto">

        <button onClick={handleAddOfficer} className="bg-green-800 text-white px-4 py-2 rounded-md flex items-center gap-1 text-sm">
            <PlusCircle className="w-4 h-4" /> Add New user
          </button>
        <button onClick={handleAddRolePermission} className="bg-green-800 text-white px-4 py-2 rounded-md flex items-center gap-1 text-sm">
            <PlusCircle className="w-4 h-4" /> Add Role and Permission
          </button>

        <button onClick={handleAssignRolePermission} className="bg-green-800 text-white px-4 py-2 rounded-md flex items-center gap-1 text-sm">
            <PlusCircle className="w-4 h-4" /> Assign Permissions to Role
          </button>

        <button onClick={handleAssignRoleToOfficer} className="bg-green-800 text-white px-4 py-2 rounded-md flex items-center gap-1 text-sm">
            <PlusCircle className="w-4 h-4" /> Assign Role user
          </button>


          <button onClick={handleExport} className="bg-green-800 text-white px-4 py-2 rounded-md flex items-center gap-1 text-sm">
            <Download className="w-4 h-4" /> Export
          </button>

      
        </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <select value={status} onChange={(e) => setStatus(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 text-sm">
            <option value="">Status</option>
            {statuses.map((s) => (
              <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
            ))}
          </select>

          <select value={role} onChange={(e) => setRole(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 text-sm">
            <option value="">Role</option>
            {roles.map((r) => (
            <option key={r.id} value={r.id}>
            {r.name}
          </option>
        ))}

          </select>

          <select value={agency} onChange={(e) => setAgency(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 text-sm">
            <option value="">Agency</option>
            {agencies.map((a) => (
              <option key={a.code} value={a.code}>{a.name}</option>
            ))}
          </select>

          <select value={zone} onChange={(e) => setZone(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 text-sm">
            <option value="">Zone</option>
            {zones.map((z) => (
              <option key={z.id} value={z.id}>{z.name}</option>
            ))}
          </select>

          <select value={stateId} onChange={(e) => setStateId(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 text-sm">
            <option value="">State</option>
            {states.map((s) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>

          <select value={lga} onChange={(e) => setLga(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 text-sm">
            <option value="">LGA</option>
            {lgas.map((l) => (
              <option key={l.id} value={l.id}>{l.name}</option>
            ))}
          </select>

          <select value={division} onChange={(e) => setDivision(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 text-sm">
            <option value="">Division</option>
            {divisions.map((d) => (
              <option key={d.id} value={d.id}>{d.name}</option>
            ))}
          </select>

        </div>
      </div>

      <Rolemanagementtable
        filters={{ status, role, agency, searchText, zone, state: stateId, lga, division }}
      />

      {/* {showModal && <AddUserModal onClose={() => setShowModal(false)} />} */}
      {/* {showOfficerModal && <AddOfficerModal onClose={() => setShowOfficerModal(false)} />} */}

      {showOfficerModal && <AddOfficerModal onClose={() => setShowOfficerModal(false)} />}
{showRolePermissionModal && <AddRolePermissionModal onClose={() => setShowRolePermissionModal(false)} />}
{showAssignRolePermissionModal && <RolePermissionModal onClose={() => setShowAssignRolePermissionModal(false)} />}
{showAssignRoleToOfficerModal && <AssignRoleToOfficerModal onClose={() => setshowAssignRoleToOfficerModal(false)} />}

    </div>
  );
}











//THIS FILTER DATA BY THE CLICK ON FILTER

// "use client";

// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { Search, Download, PlusCircle } from "lucide-react";
// import Rolemanagementtable from "@/Components/Tables/Rolemanagementtable";
// import AddUserModal from "@/Components/modals/AddUserModal";

// export default function UserRoleManagementHeader() {
//   const [status, setStatus] = useState("");
//   const [role, setRole] = useState("");
//   const [agency, setAgency] = useState("");
//   const [searchText, setSearchText] = useState("");
//   const [filters, setFilters] = useState({
//     status: "",
//     role: "",
//     agency: "",
//     searchText: "",
//   });
//   const [showModal, setShowModal] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   const router = useRouter();

//   useEffect(() => {
//     const isAuthenticated = localStorage.getItem("isAuthenticated");
//     if (isAuthenticated !== "true") {
//       router.push("/login");
//     } else {
//       setIsLoading(false);
//     }
//   }, [router]);

//   if (isLoading) return null;

//   const handleApplyFilters = () => {
//     setFilters({
//       status,
//       role,
//       agency,
//       searchText,
//     });
//   };

//   const handleExport = () => {
//     console.log("Exporting data...");
//   };

//   const handleAddUser = () => {
//     setShowModal(true);
//   };

//   return (
//     <div className="w-full p-4 md:p-6">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//         <div className="flex-1">
//           <h1 className="text-xl text-blue-500 font-semibold">
//             Super Admin Dashboard
//           </h1>
//           <p className="text-sm text-gray-500">
//             View and manage agencies and users
//           </p>
//           <div className="mt-2 flex items-center border border-gray-300 rounded-md px-3 py-2 w-full max-w-md">
//             <Search className="w-4 h-4 text-gray-400 mr-2" />
//             <input
//               type="text"
//               placeholder="Search by name, role, jurisdiction, or email"
//               value={searchText}
//               onChange={(e) => setSearchText(e.target.value)}
//               className="outline-none w-full"
//             />
//           </div>
//         </div>

//         <div className="flex flex-wrap items-center gap-2">
//           <select
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//             className="border border-gray-300 rounded-md px-3 py-2 text-sm"
//           >
//             <option value="">Status</option>
//             <option value="active">Active</option>
//             <option value="inactive">Inactive</option>
//           </select>

//           <select
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             className="border border-gray-300 rounded-md px-3 py-2 text-sm"
//           >
//             <option value="">Role</option>
//             <option value="user">User</option>
//             <option value="admin">Admin</option>
//             <option value="supervisor">Supervisor</option>
//           </select>

//           <select
//             value={agency}
//             onChange={(e) => setAgency(e.target.value)}
//             className="border border-gray-300 rounded-md px-3 py-2 text-sm"
//           >
//             <option value="">Agency</option>
//             <option value="EFCC">EFCC</option>
//             <option value="NPF">NPF</option>
//             <option value="NDLEA">NDLEA</option>
//           </select>

//           <button
//             onClick={handleApplyFilters}
//             className="bg-green-800 text-white px-4 py-2 rounded-md text-sm"
//           >
//             Apply filters
//           </button>

//           <button
//             onClick={handleExport}
//             className="bg-green-800 text-white px-4 py-2 rounded-md flex items-center gap-1 text-sm"
//           >
//             <Download className="w-4 h-4" /> Export
//           </button>

//           <button
//             onClick={handleAddUser}
//             className="bg-green-800 text-white px-4 py-2 rounded-md flex items-center gap-1 text-sm"
//           >
//             <PlusCircle className="w-4 h-4" /> Add New User
//           </button>
//         </div>
//       </div>

//       {/* ✅ Filters passed to table */}
//       <Rolemanagementtable filters={filters} />

//       {showModal && <AddUserModal onClose={() => setShowModal(false)} />}
//     </div>
//   );
// }


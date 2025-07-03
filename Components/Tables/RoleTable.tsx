"use client";
import { useEffect, useState } from "react";

export default function RoleTable() {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    fetch("http://localhost/crime_api/officers/roles")
      .then(res => res.json())
      .then(data => setRoles(data.roles || []))
      .catch(err => console.error("Failed to fetch roles:", err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Roles</h2>
      <ul className="space-y-2">
        {roles.map((role: any) => (
          <li key={role.id} className="border px-4 py-2 rounded shadow-sm">
            {role.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

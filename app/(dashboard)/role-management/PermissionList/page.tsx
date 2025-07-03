"use client";
import { useEffect, useState } from "react";

export default function PermissionList() {
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    fetch("http://localhost/crime_api/officers/permissions?type=permission")
      .then(res => res.json())
      .then(data => setPermissions(data.permissions || []))
      .catch(err => console.error("Failed to fetch permissions:", err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Permissions</h2>
      <ul className="space-y-2">
        {permissions.map((perm: any) => (
          <li key={perm.id} className="border px-4 py-2 rounded shadow-sm">
            {perm.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

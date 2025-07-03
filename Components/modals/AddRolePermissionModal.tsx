"use client";
import { useState } from "react";

interface Props {
  onClose: () => void;
}


const AddRolePermissionModal: React.FC<Props> = ({ onClose }) => {
const [role, setRole] = useState("");
const [permission, setPermission] = useState("");
  

const handleAddRole = async () => {
    await fetch("http://localhost/crime_api/officers/roles?type=role", {
      method: "POST",
      body: JSON.stringify({ name: role }),
      headers: { "Content-Type": "application/json" },
    });
    setRole("");
  };

const handleAddPermission = async () => {
    await fetch("http://localhost/crime_api/officers/roles?type=permission", {
      method: "POST",
      body: JSON.stringify({ name: permission }),
      headers: { "Content-Type": "application/json" },
    });
    setPermission("");
  };

  

  return (
    <div className="fixed inset-0 z-50 bg-black/30 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-[90%] max-w-md space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Add Role and Permission</h2>
          <button
            onClick={onClose}
            className="text-red-600 font-bold text-xl"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        <div>
          <input
            placeholder="New Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="border w-full px-3 py-2 rounded-md"
          />
          <button
            onClick={handleAddRole}
            className="mt-2 w-full bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Add Role
          </button>
        </div>

        <div>
          <input
            placeholder="New Permission"
            value={permission}
            onChange={(e) => setPermission(e.target.value)}
            className="border w-full px-3 py-2 rounded-md"
          />
          <button
            onClick={handleAddPermission}
            className="mt-2 w-full bg-green-600 text-white px-4 py-2 rounded-md"
          >
            Add Permission
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRolePermissionModal;

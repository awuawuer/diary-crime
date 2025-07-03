import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function EditOfficerModal({ officer, onClose }: { officer: any; onClose: () => void }) {
  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    employment_number: "",
    officer_code: "",
    role: "",
    status: "",
    agency_name: "",
    zone_id: "",
    state_id: "",
    lga_id: "",
    division_id: "",
  });

  useEffect(() => {
    if (officer) {
      setFormData({ ...formData, ...officer });
    }
  }, [officer]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost/crime_api/officers/${officer.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed to update officer");
      alert("Officer updated successfully");
      onClose();
    } catch (error) {
      console.error(error);
      alert("An error occurred while updating the officer.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/30 flex justify-center items-center">
<div className="relative bg-white p-6 rounded-md shadow-lg max-w-lg w-full">
<button className="absolute top-2 right-2" onClick={onClose}>
          <X className="w-5 h-5 text-gray-600" />
        </button>
        <h2 className="text-lg font-semibold mb-4">Edit Officer</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name" className="border px-3 py-2 rounded" />
            <input name="middle_name" value={formData.middle_name} onChange={handleChange} placeholder="First Name" className="border px-3 py-2 rounded" />
            <input name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name" className="border px-3 py-2 rounded" />
            <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="border px-3 py-2 rounded" />
            <input name="employment_number" value={formData.employment_number} onChange={handleChange} placeholder="Employment Number" className="border px-3 py-2 rounded" readOnly/>
            <input name="officer_code" value={formData.officer_code} onChange={handleChange} placeholder="Officer Code" className="border px-3 py-2 rounded" />
            <input name="role" value={formData.role} onChange={handleChange} placeholder="Role" className="border px-3 py-2 rounded" />
            <input name="status" value={formData.status} onChange={handleChange} placeholder="Status" className="border px-3 py-2 rounded" />
            <input name="agency_id" value={formData.agency_name} onChange={handleChange} placeholder="Agency ID" className="border px-3 py-2 rounded" />
            <input name="zone_id" value={formData.zone_id} onChange={handleChange} placeholder="Zone ID" className="border px-3 py-2 rounded" />
            <input name="state_id" value={formData.state_id} onChange={handleChange} placeholder="State ID" className="border px-3 py-2 rounded" />
            <input name="lga_id" value={formData.lga_id} onChange={handleChange} placeholder="LGA ID" className="border px-3 py-2 rounded" />
            <input name="division_id" value={formData.division_id} onChange={handleChange} placeholder="Division ID" className="border px-3 py-2 rounded" />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

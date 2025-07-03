"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function AddOfficerModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    employment_number: "",
    officer_rank: "",
    phone: "",
    password: "",
    role: "user",
    authorization_level: "",
    agency_id: "",
    zone_id: "",
    state_id: "",
    lga_id: "",
    division_id: "",
    photo: null as File | null,
  });

  const [agencies, setAgencies] = useState([]);
  const [zones, setZones] = useState([]);
  const [states, setStates] = useState([]);
  const [lgas, setLgas] = useState([]);
  const [divisions, setDivisions] = useState([]);


  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
  
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    fetch("http://localhost/crime_api/agencies").then(res => res.json()).then(setAgencies);
    fetch("http://localhost/crime_api/states").then(res => res.json()).then(setStates);
  }, []);

  useEffect(() => {
    if (formData.agency_id) {
      fetch(`http://localhost/crime_api/zones?agency_id=${formData.agency_id}`)
        .then(res => res.json())
        .then(setZones);

      fetch(`http://localhost/crime_api/divisions?agency_id=${formData.agency_id}`)
        .then(res => res.json())
        .then(setDivisions);
    }
  }, [formData.agency_id]);

  useEffect(() => {
    
    if (formData.state_id) {
      fetch(`http://localhost/crime_api/lgas?state_id=${formData.state_id}`)
        .then(res => res.json())
        .then(setLgas);
    }

    
  }, [formData.state_id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setFormData(prev => ({ ...prev, photo: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        form.append(key, value);
      }
    });
    
    
    try {
      const response = await fetch("http://localhost/crime_api/officers", {
        method: "POST",
        body: form,
      });

      if (!response.ok) {
        const error = await response.json();
        alert(error.message || "Submission failed.");
        return;
      }

      const result = await response.json();
      console.log(result);
      alert("Officer registered successfully!");
      onClose();
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network error. Could not submit form.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
<div className="relative bg-white p-6 rounded-md shadow-lg max-w-lg w-full">
<button
  onClick={onClose}
  className="absolute top-4 right-4 text-gray-500 hover:text-red-600 transition-colors"
  aria-label="Close"
>
  <X className="h-6 w-6" />
</button>

        <h2 className="text-xl font-semibold mb-1">Add New Officer</h2>
        <p className="text-sm text-gray-500 mb-6">Fill in officer details below</p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name" className="border px-3 py-2 rounded" required />
          <input name="middle_name" value={formData.middle_name} onChange={handleChange} placeholder="Middle Name" className="border px-3 py-2 rounded" />
          <input name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name" className="border px-3 py-2 rounded" required />
          <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" className="border px-3 py-2 rounded" required />
          <input name="employment_number" value={formData.employment_number} onChange={handleChange} placeholder="Employment Number" className="border px-3 py-2 rounded" required />
          <input name="officer_rank" value={formData.officer_rank} onChange={handleChange} placeholder="Officer Rank" className="border px-3 py-2 rounded" />
          <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="border px-3 py-2 rounded" />
          <input name="password" value={formData.password} onChange={handleChange} placeholder="Password" type="password" className="border px-3 py-2 rounded" required />

          <input type="file" accept="image/*" onChange={handleFileChange} className="md:col-span-2 border px-3 py-2 rounded" required />

          <select name="role" value={formData.role} onChange={handleChange} className="border px-3 py-2 rounded">
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="supervisor">Supervisor</option>
          </select>

          <select name="authorization_level" value={formData.authorization_level} onChange={handleChange} className="border px-3 py-2 rounded">
            <option value="">Authorization Level</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <select name="agency_id" value={formData.agency_id} onChange={handleChange} className="border px-3 py-2 rounded">
            <option value="">Select Agency</option>
            {agencies.map((a: any) => <option key={a.id} value={a.id}>{a.name}</option>)}
          </select>

          <select name="zone_id" value={formData.zone_id} onChange={handleChange} className="border px-3 py-2 rounded">
            <option value="">Select Zone</option>
            {zones.map((z: any) => <option key={z.id} value={z.id}>{z.name}</option>)}
          </select>

          <select name="state_id" value={formData.state_id} onChange={handleChange} className="border px-3 py-2 rounded">
            <option value="">Select State</option>
            {states.map((s: any) => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>

          <select name="lga_id" value={formData.lga_id} onChange={handleChange} className="border px-3 py-2 rounded">
            <option value="">Select LGA</option>
            {lgas.map((l: any) => <option key={l.id} value={l.id}>{l.name}</option>)}
          </select>

          <select name="division_id" value={formData.division_id} onChange={handleChange} className="border px-3 py-2 rounded">
            <option value="">Select Division</option>
            {divisions.map((d: any) => <option key={d.id} value={d.id}>{d.name}</option>)}
          </select>

          <div className="md:col-span-2 mt-6">
            <button type="submit" className="w-full bg-green-700 text-white py-3 rounded hover:bg-green-800">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

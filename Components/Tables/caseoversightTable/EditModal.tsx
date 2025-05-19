import React, { useState } from "react";
import { X } from "lucide-react";

export default function EditModal({
  caseData,
  onClose,
  onSave,
}: {
  caseData: any;
  onClose: () => void;
  onSave: (updated: any) => void;
}) {
  const [form, setForm] = useState(caseData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(form);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-semibold mb-4">Edit Case Details</h2>
        <div className="space-y-3">
          {[
            "jurisdiction",
            "type",
            "agency",
            "category",
            "caseNo",
            "status",
          ].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium mb-1 capitalize">
                {field}
              </label>
              <input
                type="text"
                name={field}
                value={form[field] || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md text-sm"
              />
            </div>
          ))}
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white w-full py-2 rounded-md mt-4 hover:bg-green-700"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

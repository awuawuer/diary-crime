import React from "react";
import { X } from "lucide-react";

export default function ViewModal({
  caseData,
  onClose,
}: {
  caseData: any;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-semibold mb-4">View Case Details</h2>
        <div className="space-y-2 text-sm">
          <p>
            <strong>S/N:</strong> {caseData.sn}
          </p>
          <p>
            <strong>Zone:</strong> {caseData.zone}
          </p>
          <p>
            <strong>Type:</strong> {caseData.type}
          </p>
          <p>
            <strong>Agency:</strong> {caseData.agency}
          </p>
          <p>
            <strong>Category:</strong> {caseData.category}
          </p>
          <p>
            <strong>Case No.:</strong> {caseData.caseNo}
          </p>
          <p>
            <strong>Status:</strong> {caseData.status}
          </p>
        </div>
      </div>
    </div>
  );
}

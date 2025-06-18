"use client";

import React, { useRef, useState } from "react";

export default function PhotoCaptureSection() {
  const [photos, setPhotos] = useState<Record<string, string>>({});

  // ✅ Fix: initialized with type assertion to avoid TS warning on ref assignment
  const fileInputs = useRef<Record<string, HTMLInputElement | null>>(
    {} as Record<string, HTMLInputElement | null>
  );

  const handleCapture = (
    label: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotos((prev) => ({ ...prev, [label]: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerCapture = (label: string) => {
    fileInputs.current[label]?.click();
  };

  return (
    <div>
      <h3 className="text-md font-medium mb-2">Photo capture</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {["Front view", "Left view", "Right view", "Full view"].map((label) => (
          <div key={label} className="text-center">
            <input
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              ref={(el) => {
                fileInputs.current[label] = el;
              }}
              onChange={(e) => handleCapture(label, e)}
            />
            <button
              type="button"
              onClick={() => triggerCapture(label)}
              className="border font-semibold text-sm py-6 px-4 rounded hover:bg-gray-100 w-full"
            >
              {photos[label] ? "Retake " + label : label + " +"}
            </button>
            {photos[label] && (
              <img
                src={photos[label]}
                alt={label}
                className="mt-2 mx-auto w-full h-32 object-cover rounded border"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

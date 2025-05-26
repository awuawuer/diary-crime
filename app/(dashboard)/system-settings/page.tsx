"use client";

import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function SystemSettingsPage() {
  const [settings, setSettings] = useState({
    maintenanceMode: false,
    allowNewReporters: true,
    autoAssignCases: false,
    notificationsEnabled: true,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="p-4 sm:p-6 lg:p-10">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        System Settings
      </h1>

      <div className="space-y-6">
        {[
          {
            key: "maintenanceMode",
            label: "Maintenance Mode",
            description:
              "Temporarily disable user access to the reporting system.",
          },
          {
            key: "allowNewReporters",
            label: "Allow New Reporters",
            description:
              "Enable new reporters to sign up and submit case reports.",
          },
          {
            key: "autoAssignCases",
            label: "Auto-assign Cases",
            description:
              "Automatically assign incoming cases to available agents.",
          },
          {
            key: "notificationsEnabled",
            label: "Enable Notifications",
            description:
              "Allow system notifications for new reports or updates.",
          },
        ].map(({ key, label, description }) => (
          <div
            key={key}
            className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
          >
            <div>
              <h2 className="font-medium text-gray-800">{label}</h2>
              <p className="text-sm text-gray-500 mt-1">{description}</p>
            </div>
            <Switch
              checked={settings[key as keyof typeof settings]}
              onChange={() => toggleSetting(key as keyof typeof settings)}
              className={`${
                settings[key as keyof typeof settings]
                  ? "bg-green-600"
                  : "bg-gray-300"
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
            >
              <span
                className={`${
                  settings[key as keyof typeof settings]
                    ? "translate-x-6"
                    : "translate-x-1"
                } inline-block h-4 w-4 transform bg-white rounded-full transition-transform`}
              />
            </Switch>
          </div>
        ))}
      </div>
    </div>
  );
}

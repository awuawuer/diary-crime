"use client";

import { useState, useMemo, createRef } from "react";
import clsx from "clsx";

// Form components
import PersonalDetails from "@/Components/newCase/PersonalDetails";
import EmploymentDetails from "@/Components/newCase/EmploymentDetails";
import SpouseDetails from "@/Components/newCase/SpouseDetails";
import OtherFamilyRelations from "@/Components/newCase/OtherFamilyRelations";
import CrimeDetails from "@/Components/newCase/CrimeDetails";
import ReporterDetails from "@/Components/newCase/ReporterDetails";
import WitnessDetails from "@/Components/newCase/WitnessDetails";
import SuccessModal from "@/Components/modals/SuccessModal";

// Type for form refs
type FormRef = {
  validate: () => boolean;
  getData: () => Record<string, any>;
};

// Define tab keys
type TabKey =
  | "personal"
  | "employment"
  | "spouse"
  | "relations"
  | "crime"
  | "reporter"
  | "witness";

// Tab definition
const tabs: {
  label: string;
  key: TabKey;
  component: React.ComponentType<any>;
  hasRef?: boolean;
}[] = [
  {
    label: "Personal details",
    key: "personal",
    component: PersonalDetails,
    hasRef: true,
  },
  {
    label: "Employment details",
    key: "employment",
    component: EmploymentDetails,
    hasRef: true,
  },
  {
    label: "Spouse details",
    key: "spouse",
    component: SpouseDetails,
    hasRef: true,
  },
  {
    label: "Other family relations",
    key: "relations",
    component: OtherFamilyRelations,
    hasRef: true,
  },
  {
    label: "Crime details",
    key: "crime",
    component: CrimeDetails,
    hasRef: true,
  },
  {
    label: "Reporter details",
    key: "reporter",
    component: ReporterDetails,
    hasRef: true,
  },
  { label: "Witness details", key: "witness", component: WitnessDetails },
];

export default function ProfileNewCase() {
  const [activeTab, setActiveTab] = useState<TabKey>("personal");
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const refs: Record<TabKey, React.RefObject<FormRef>> = useMemo(() => {
    const obj = {} as Record<TabKey, React.RefObject<FormRef>>;
    tabs.forEach((tab) => {
      if (tab.hasRef) {
        // obj[tab.key] = createRef<FormRef>();
      }
    });
    return obj;
  }, []);

  const renderComponent = () => {
    const active = tabs.find((t) => t.key === activeTab);
    if (!active) return null;
    const Component = active.component;
    return active.hasRef ? (
      <Component ref={refs[active.key as TabKey]} />
    ) : (
      <Component />
    );
  };

  const handleTabClick = (newKey: TabKey) => {
    setActiveTab(newKey);
  };

  const handleSubmitAll = () => {
    setShowConfirmModal(true);
  };

  const confirmSubmit = () => {
    const collectedData: Record<string, any> = {};
    for (const tab of tabs) {
      const key = tab.key as TabKey;
      const ref = refs[key];
      const data = ref?.current?.getData?.() ?? {};
      collectedData[key] = data;
    }
    setFormData(collectedData);
    setShowConfirmModal(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) return <SuccessModal />;

  return (
    <section className="px-4 md:px-8 py-6 bg-white">
      <div className="mb-4">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
          Profile new case
        </h1>
        <p className="text-sm text-gray-500">Enter details for a new case</p>
      </div>

      <div className="border-b border-gray-200 mb-6">
        <nav className="flex overflow-x-auto whitespace-nowrap text-sm font-medium space-x-6">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabClick(tab.key)}
              className={clsx(
                "pb-2 border-b-2 transition-colors duration-200 focus:outline-none",
                activeTab === tab.key
                  ? "text-green-700 border-green-700"
                  : "text-gray-500 border-transparent hover:text-green-700"
              )}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div>{renderComponent()}</div>

      <div className="mt-6 flex flex-col items-center space-y-3">
        {activeTab !== "witness" ? (
          <>
            <button
              onClick={() => {
                const currentIndex = tabs.findIndex((t) => t.key === activeTab);
                const nextTab = tabs[currentIndex + 1];
                if (nextTab) setActiveTab(nextTab.key);
              }}
              className="bg-green-800 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Save and Continue
            </button>
            <button
              onClick={() => (window.location.href = "/user-dashboard")}
              className="text-green-700  text-sm"
            >
              Go back
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleSubmitAll}
              className="bg-green-800 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Submit Case
            </button>
            <button
              onClick={() => (window.location.href = "/user-dashboard")}
              className="text-green-700  text-sm"
            >
              Go back to dashboard
            </button>
          </>
        )}
      </div>

      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg text-center space-y-4 w-[90%] max-w-sm">
            <h2 className="text-lg font-semibold">Confirm Submission</h2>
            <p className="text-sm text-gray-600">
              Are you sure you want to submit all details?
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 rounded border"
              >
                Cancel
              </button>
              <button
                onClick={confirmSubmit}
                className="px-4 py-2 rounded bg-green-700 text-white hover:bg-green-800"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

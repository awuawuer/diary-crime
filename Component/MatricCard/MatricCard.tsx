"use client";
import React from "react";

interface MetricCardProps {
  title: string;
  subtitle: string;
  targetId?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  subtitle,
  targetId,
}) => {
  const handleClick = () => {
    if (targetId) {
      const section = document.getElementById(targetId);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-full bg-white p-4 rounded-xl shadow-sm border text-left hover:shadow-md transition"
    >
      <h2 className="text-base font-semibold text-gray-900">{title}</h2>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </button>
  );
};

export default MetricCard;

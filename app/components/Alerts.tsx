'use client';

import React from "react";

const Alerts = () => {
  return (
    <div className="m-12 space-y-6">
      <h2 className="font-semibold text-2xl uppercase hover:cursor-auto">
        Some Notification Types{" "}
      </h2>
      <div
        className="bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-3"
        role="alert"
      >
        <p className="font-bold">Informational message</p>
        <p className="text-sm">Some additional text to explain said message.</p>
      </div>

      <div
        className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
        role="alert"
      >
        <p className="font-bold">Informational message</p>
        <p className="text-sm">Some additional text to explain said message.</p>
      </div>

      <div
        className="bg-amber-100 border-t border-b border-amber-500 text-amber-700 px-4 py-3"
        role="alert"
      >
        <p className="font-bold">Informational message</p>
        <p className="text-sm">Some additional text to explain said message.</p>
      </div>

      <div
        className="bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-3"
        role="alert"
      >
        <p className="font-bold">Informational message</p>
        <p className="text-sm">Some additional text to explain said message.</p>
      </div>

      <div
        className="bg-purple-100 border-t border-b border-purple-500 text-purple-700 px-4 py-3"
        role="alert"
      >
        <p className="font-bold">Informational message</p>
        <p className="text-sm">Some additional text to explain said message.</p>
      </div>
      <div
        className="bg-gray-100 border-t border-b border-gray-500 text-gray-700 px-4 py-3"
        role="alert"
      >
        <p className="font-bold">Informational message</p>
        <p className="text-sm">Some additional text to explain said message.</p>
      </div>
    </div>
  );
};

export default Alerts;

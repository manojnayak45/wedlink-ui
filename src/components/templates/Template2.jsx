import React from "react";

export default function Template2({
  brideName,
  groomName,
  location,
  date,
  guestName,
}) {
  return (
    <div className="bg-blue-50 border border-blue-300 rounded-md p-4 text-center shadow-md">
      <h2 className="text-2xl font-semibold text-blue-700"> You're Invited!</h2>

      <p className="text-lg text-gray-800 mb-2">
        Dear <span className="font-semibold text-blue-700">{guestName}</span>,
      </p>
      <p className="text-lg mt-1">
        {groomName} & {brideName}
      </p>
      <p className="text-gray-600 mt-2">📍 {location}</p>
      <p className="text-gray-600">📅 {date}</p>
    </div>
  );
}

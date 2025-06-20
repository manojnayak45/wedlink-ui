import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../utils/axios";

export default function InvitationPage() {
  const { guestId } = useParams();
  const [guest, setGuest] = useState(null);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchGuestAndEvent = async () => {
      try {
        const resGuest = await axios.get(`/public/guest/${guestId}`);
        setGuest(resGuest.data);

        const resEvent = await axios.get(
          `/public/event/${resGuest.data.eventId}`
        );
        setEvent(resEvent.data);
      } catch (err) {
        console.error("Error fetching guest or event data:", err);
      }
    };

    fetchGuestAndEvent();
  }, [guestId]);

  if (!guest || !event)
    return (
      <div className="p-6 text-center text-xl text-gray-600">Loading...</div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-300 flex items-center justify-center px-4 py-10">
      <div className="max-w-2xl bg-white rounded-2xl shadow-2xl p-10 border border-pink-300 text-center animate-fade-in-up">
        <h1 className="text-4xl font-extrabold text-pink-600 mb-4 drop-shadow-sm">
          💌 You're Invited!
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Dear <span className="font-semibold text-pink-700">{guest.name}</span>
          ,
        </p>
        <p className="text-md text-gray-600 mb-6">
          We are thrilled to invite you to the joyous wedding celebration of
        </p>

        <h2 className="text-2xl font-bold text-pink-800 mb-4">
          {event.groomName} 💍 {event.brideName}
        </h2>

        <div className="text-md text-gray-700 mb-4 space-y-2">
          <p>
            <strong>Date:</strong>{" "}
            <span className="text-pink-700 font-medium">
              {new Date(event.date).toDateString()}
            </span>
          </p>
          <p>
            <strong>Location:</strong>{" "}
            <span className="text-pink-700 font-medium">{event.location}</span>
          </p>
          <p>
            <strong>Description:</strong>{" "}
            <span className="text-pink-600 italic">{event.description}</span>
          </p>
        </div>

        <div className="mt-6">
          <p className="text-md text-gray-600">
            We can’t wait to celebrate with you! 🎊✨
          </p>
        </div>
      </div>
    </div>
  );
}

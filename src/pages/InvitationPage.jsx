import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../utils/axios";
import Template1 from "../components/templates/Template1";
import Template2 from "../components/templates/Template2";

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
          `/events/public/${resGuest.data.eventId}`
        );

        setEvent(resEvent.data);
      } catch (err) {
        console.error("Error fetching guest or event data:", err);
      }
    };

    fetchGuestAndEvent();
  }, [guestId]);

  if (!guest || !event) {
    return (
      <div className="p-6 text-center text-xl text-gray-600">Loading...</div>
    );
  }

  const formattedDate = new Date(event.date).toDateString();

  // 🔁 Dynamically render based on saved template
  const renderTemplate = () => {
    const props = {
      guestName: guest.name,
      brideName: event.brideName,
      groomName: event.groomName,
      location: event.location,
      date: formattedDate,
    };

    switch ((event.template || "").replace(/\s+/g, "").toLowerCase()) {
      case "template1":
        return <Template1 {...props} />;
      case "template2":
        return <Template2 {...props} />;
      default:
        return (
          <div className="text-center text-red-500 mt-10">
            🚫 No valid template selected for this event.
          </div>
        );
    }
  };

  return <>{renderTemplate()}</>;
}

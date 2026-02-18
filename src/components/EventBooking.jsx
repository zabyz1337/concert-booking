import { useMemo, useState } from "react";
import EventDetails from "./EventDetails";
import SeatSelector from "./SeatSelector";

export default function EventBooking() {
  const event = {
    title: "Concert of the Year",
    date: "2023-12-01",
    venue: "City Arena",
  };

  const seats = useMemo(
    () =>
      ["1A", "1B", "1C", "1D", "1E", "1F", "1G"].map((label) => ({
        id: label,
        label,
      })),
    [],
  );

  const [selected, setSelected] = useState(["1A", "1E", "1F"]);

  function toggleSeat(seatId) {
    setSelected((prev) =>
      prev.includes(seatId)
        ? prev.filter((x) => x !== seatId)
        : [...prev, seatId],
    );
  }

  return (
    <div className="page">
      <div className="card">
        <EventDetails
          title={event.title}
          date={event.date}
          venue={event.venue}
        />
        <SeatSelector seats={seats} selected={selected} onToggle={toggleSeat} />
      </div>
    </div>
  );
}

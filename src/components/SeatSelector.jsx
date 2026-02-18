export default function SeatSelector({ seats, selected, onToggle }) {
  return (
    <div className="seatSelector">
      <div className="seatGrid">
        {seats.map((seat, index) => {
          const isSelected = selected.includes(seat.id);

          return (
            <button
              key={seat.id}
              type="button"
              className={`seatBtn ${isSelected ? "selected" : ""}`}
              onClick={() => onToggle(seat.id)}
              aria-pressed={isSelected}
              title={`Seat #${index + 1}`}
            >
              {seat.label}
            </button>
          );
        })}
      </div>

      <div className="selectedText">
        Selected Seats: {selected.length ? selected.join(", ") : "—"}
      </div>
    </div>
  );
}

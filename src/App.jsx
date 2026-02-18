import "./styles.css";
import EventDetails from "./components/EventDetails";

export default function App() {
  return (
    <div className="page">
      <div className="card">
        <EventDetails
          title="Concert of the Year"
          date="2023-12-01"
          venue="City Arena"
        />
      </div>
    </div>
  );
}

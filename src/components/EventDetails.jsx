export default function EventDetails({ title, date, venue }) {
  return (
    <div className="eventDetails">
      <h1 className="title">{title}</h1>
      <div className="meta">{date}</div>
      <div className="meta">{venue}</div>
    </div>
  );
}

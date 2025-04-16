import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addEvent, editEvent, deleteEvent } from "../store/eventSlice";

function EventManager() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);

  const events = useSelector((state) => state.events.events);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      dispatch(editEvent({ id: editingId, title, date, description }));
      setEditingId(null);
    } else {
      dispatch(addEvent({ title, date, description }));
    }
    setTitle("");
    setDate("");
    setDescription("");
  };

  const handleEdit = (event) => {
    setEditingId(event.id);
    setTitle(event.title);
    setDate(event.date);
    setDescription(event.description);
  };

  return (
    <div className="event-manager">
      <h2>Event Manager</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Event Title"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Event Description"
          required
        />
        <button type="submit">
          {editingId ? "Update Event" : "Add Event"}
        </button>
      </form>
      <div className="events-list">
        {events.map((event) => (
          <div key={event.id} className="event">
            <h3>{event.title}</h3>
            <p>Date: {event.date}</p>
            <p>{event.description}</p>
            <div className="event-actions">
              <button onClick={() => handleEdit(event)}>Edit</button>
              <button onClick={() => dispatch(deleteEvent(event.id))}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventManager;

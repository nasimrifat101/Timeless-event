import Nav from "../Navigation/Nav";
import { useState, useEffect, useRef } from "react";

const Brainstorm = () => {
  const storedEvents = JSON.parse(localStorage.getItem("selectedCards")) || [];
  const storedSelectedEvent = localStorage.getItem("selectedEvent") || "";
  const storedSelectedDate = localStorage.getItem("selectedDate") || "";
  const storedIdeas = JSON.parse(localStorage.getItem("ideas")) || [];

  const [selectedEvent, setSelectedEvent] = useState(storedSelectedEvent);
  const [selectedDate, setSelectedDate] = useState(storedSelectedDate);
  const [events, setEvents] = useState(storedEvents);
  const [ideas, setIdeas] = useState([]);

  const brainstormBoxRef = useRef(null);

  const handleInputIdeas = (e) => {
    if (e.key === "Enter") {
      const idea = e.target.value;
      brainstormBoxRef.current.value = "";
      setIdeas((prevIdeas) => [...prevIdeas, idea]);
    }
  };
  useEffect(() => {
    const olElement = document.getElementById("brainstorm-list");
    if (olElement) {
      olElement.innerHTML = "";
      ideas.forEach((idea, index) => {
        const liElement = document.createElement("li");
        liElement.textContent = idea;
        liElement.key = index;
        olElement.appendChild(liElement);
      });
    }
    localStorage.setItem("ideas", JSON.stringify(ideas));
  }, [ideas]);

  const handleEventChange = (e) => {
    const newSelectedEvent = e.target.value;
    setSelectedEvent(newSelectedEvent);
    localStorage.setItem("selectedEvent", newSelectedEvent);
  };

  const handleDateChange = (e) => {
    const newSelectedDate = e.target.value;
    setSelectedDate(newSelectedDate);
    localStorage.setItem("selectedDate", newSelectedDate);
  };

  useEffect(() => {
    localStorage.setItem("selectedEvent", selectedEvent);
    localStorage.setItem("selectedDate", selectedDate);
  }, [selectedEvent, selectedDate]);

  return (
    <div className="bg-white">
      <Nav />
      <div className="max-w-6xl mx-auto my-10 grid grid-cols-2">
        <div>
          <h1 className="text-4xl">Plan your big day</h1>
          <div className="flex items-center space-x-2">
            <div className="form-control">
              <select
                className="input input-bordered w-fit p-3"
                value={selectedEvent}
                onChange={handleEventChange}
              >
                <option value="">Select an event</option>
                {events.map((event) => (
                  <option key={event.id} value={event.title}>
                    {event.title}
                  </option>
                ))}
              </select>
            </div>
            <input
              className="input input-bordered p-3"
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>

          <div className="py-5">
            <h1 className="text-2xl">Create your list of ideas</h1>
            <input
              type="text"
              id="brainstorm-box"
              placeholder="write your idea one by one"
              ref={brainstormBoxRef}
              className="input input-bordered w-[430px] rounded-xl"
              onKeyDown={handleInputIdeas}
            />
          </div>
        </div>
        {/* second div */}
        <div>
          <div>
            <h1 className="text-4xl">
              {selectedEvent
                ? `${selectedEvent}`
                : "Select an event to brainstorm ideas"}
            </h1>
            <p>{selectedDate ? `Date: ${selectedDate}` : ""}</p>
            <ol className="list-disc pl-10" id="brainstorm-list">
              {/* appendchild here */}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brainstorm;

"use client";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { AnimatePresence, motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const EventsPage = () => {
  const currentDate = new Date(); // Get today's date

  const events = [
    {
      title: "Spotify UI Integration",
      date: "March 21, 2025",
      startTime: "7:00 PM",
      endTime: "8:00 PM",
      location: "Shillman 135",
    },
    {
      title: "Spotify API Integration (pt. 2)",
      date: "March 28, 2025",
      startTime: "7:00 PM",
      endTime: "8:00 PM",
      location: "Shillman 135",
    },
    {
      title: "End of Semester Game Night",
      date: "April 4, 2025",
      startTime: "7:00 PM",
      endTime: "8:00 PM",
      location: "Shillman 135",
    },
  ];

  // Split events into upcoming and past
  const upcomingEvents = events.filter(
    (event) => new Date(event.date) >= currentDate
  );
  const pastEvents = events.filter(
    (event) => new Date(event.date) < currentDate
  );

  const [viewMode, setViewMode] = useState<"calendar" | "list">("calendar");
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  // Function to handle event clicks
  const handleEventClick = (clickInfo: any) => {
    const clickedEvent = events.find(
      (event) => event.title === clickInfo.event.title
    );
    if (clickedEvent) {
      setSelectedEvent(clickedEvent);
    }
  };

  return (
    <div id="events">
      <NavBar />

      {/* Header with Events title and View Toggle */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-start md:items-end w-full p-4 md:p-8 mt-6 gap-2"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1
          className="font-bold text-4xl md:text-5xl text-center md:text-left"
          style={{ color: "rgb(29, 29, 31)" }}
        >
          Events.
        </h1>

        {/* Toggle Switch */}
        <div className="flex items-center gap-2">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={viewMode === "list"}
              onChange={() =>
                setViewMode(viewMode === "calendar" ? "list" : "calendar")
              }
            />
            <div className="w-10 h-5 bg-gray-300 rounded-full peer peer-checked:bg-gray-600 after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-5"></div>
          </label>
          <span className="text-sm md:text-lg font-medium">
            {viewMode === "calendar" ? "Calendar View" : "List View"}
          </span>
        </div>
      </motion.div>

      {/* View Toggle Animation */}
      <motion.div
        className="flex items-center mb-4 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0 }}
      >
        <AnimatePresence mode="wait">
          {viewMode === "calendar" ? (
            <motion.div
              key="calendar"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              {/* Calendar */}
              <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={events.map((event) => ({
                  title: event.title,
                  start: new Date(
                    `${event.date} ${event.startTime}`
                  ).toISOString(),
                  className:
                    new Date(event.date) < currentDate ? "past-event" : "", // Mark past events
                }))}
                eventClick={(info) => {
                  info.jsEvent.preventDefault();
                  handleEventClick(info);
                }}
                height="auto"
              />
            </motion.div>
          ) : (
            <div className="w-full flex flex-col items-center">
              {/* Upcoming Events Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-2xl"
              >
                <h2 className="text-xl font-bold mt-4 mb-2 text-left">
                  Upcoming Events
                </h2>
                <motion.ul
                  key="list"
                  className="divide-y divide-gray-300 flex flex-col justify-center mx-auto text-left"
                  style={{ color: "rgb(29, 29, 31)" }}
                >
                  {upcomingEvents.map((event, index) => (
                    <li key={index} className="p-2">
                      <span className="font-bold">{event.date}</span>:{" "}
                      {event.title} - {event.startTime} - {event.endTime} 📍
                      {event.location}
                    </li>
                  ))}
                </motion.ul>
              </motion.div>

              {/* Passed Events Section */}
              {pastEvents.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-2xl"
                >
                  <h2 className="text-xl font-bold mt-6 text-left">
                    Passed Events
                  </h2>
                  <motion.ul
                    key="passed-list"
                    className="divide-y divide-gray-300 flex flex-col justify-center mx-auto text-left opacity-60"
                    style={{ color: "rgb(29, 29, 31)" }}
                  >
                    {pastEvents.map((event, index) => (
                      <li key={index} className="p-2 line-through">
                        <span className="font-bold">{event.date}</span>:{" "}
                        {event.title} - {event.startTime} - {event.endTime} 📍
                        {event.location}
                      </li>
                    ))}
                  </motion.ul>
                </motion.div>
              )}
            </div>
          )}
        </AnimatePresence>
        {/* Modal for Event Details */}
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
              <h2 className="text-2xl font-bold mb-2">{selectedEvent.title}</h2>
              <p className="text-gray-600">{selectedEvent.date}</p>
              <p className="text-gray-600">
                {selectedEvent.startTime} - {selectedEvent.endTime}
              </p>
              <p className="text-gray-600">📍 {selectedEvent.location}</p>
              <button
                className="mt-4 px-4 py-2 text-white rounded"
                style={{ backgroundColor: "rgb(29, 29, 31)" }}
                onClick={() => setSelectedEvent(null)}
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
      <Footer />
    </div>
  );
};

export default EventsPage;

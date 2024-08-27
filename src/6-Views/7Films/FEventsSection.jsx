import React from "react";

const FEventsSection = () => {
  const events = [
    {
      title: "Busoga Segment Premiere",
      date: "21st February, 2024",
      description:
        "This documentary segment premiered at the Ugandan National Theatre, Kampala. It also screened in Cinemas for one week at Ham Cinemax.",
    },
    {
      title: "Ankole Segment Premiere",
      date: "10th March, 2024",
      description:
        "This documentary segment premiered at the Uganda National Theatre, Kampala. It also screened in Cinemas for one week at Ham Cinemax.",
    },
    {
      title: "Eastern Uganda Segment Premiere",
      date: "23rd March, 2024",
      description:
        "This documentary segment premiered at the Ugandan National Theatre, Kampala. It is also screened in cinemas for one week at Ham Cinemax.",
    },
    {
      title: "Tooro Segment Premiere",
      date: "8th April, 2024",
      description:
        "This documentary Segment premiered at the Ndere Centre Auditorium, Kampala. It also screened in Cinemas for one week at National Theatre and Ham Cinemax.",
    },
  ];

  return (
    <section className="w-full bg-[#141118] py-4 md:py-16 overflow-hidden">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl text-center text-white font-bold mb-4">
        Events
      </h2>

      {/* Sub Title */}
      <h3 className="text-xl md:text-2xl text-center text-gray-400 mb-8">
        Premiere & Screenings
      </h3>

      {/* Premiere and Screening Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-16">
        {events.map((event, index) => (
          <div key={index} className="bg-[#1e1a26] p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-white mb-2">
              {event.title} - {event.date}
            </h4>
            <p className="text-gray-300">{event.description}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-8">
        <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
          Load More Events
        </button>
      </div>
    </section>
  );
};

export default FEventsSection;

import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

// Archives Section Component
const archiveData = [
  { year: 2024, months: ['January', 'February', 'March'] },
  { year: 2023, months: ['April', 'May', 'June'] },
  { year: 2022, months: ['July', 'August', 'September'] },
  { year: 2021, months: ['October', 'November', 'December'] },
  { year: 2020, months: ['January', 'February', 'March'] },
  { year: 2019, months: ['April', 'May', 'June'] },
  { year: 2018, months: ['July', 'August', 'September'] },
  { year: 2017, months: ['October', 'November', 'December'] },
];

const InternetArchivesSection = () => {
  const [expandedYear, setExpandedYear] = useState(null);

  const handleToggle = (year) => {
    setExpandedYear(expandedYear === year ? null : year);
  };

  return (
    <section className="h-screen bg-whites-500 flex flex-col lg:pl-[150px] justify-center">
      {/* Title Section */}
      <h2 className="text-xl font-bold mb-4">Archives</h2>

      {/* Archives Grid */}
      <div className="grid grid-cols-4 gap-4">
        {archiveData.map(({ year, months }) => (
          <div key={year} className={`col-${expandedYear === year ? 4 : 1}`}>
            <div
              className="flex items-center justify-start cursor-pointer"
              onClick={() => handleToggle(year)}
            >
              <span
                className="flex items-center justify-center w-6 h-6 border border-gray-500 rounded-full"
              >
                {expandedYear === year ? <FaMinus /> : <FaPlus />}
              </span>
              <span className="text-lg font-medium ml-2">{year}</span>
            </div>
            {expandedYear === year && (
              <ul className="mt-2">
                {months.map((month, index) => (
                  <li key={index} className="ml-4 list-none">
                    {month}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default InternetArchivesSection;

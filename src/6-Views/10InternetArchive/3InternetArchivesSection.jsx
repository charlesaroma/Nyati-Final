import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

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
    <section className="p-4 h-screen bg-whites-500">
      <h2 className="text-xl font-bold mb-4">Archives</h2>
      <div className="grid grid-cols-4 gap-4">
        {archiveData.map(({ year, months }) => (
          <div key={year} className={`col-${expandedYear === year ? 4 : 1}`}>
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => handleToggle(year)}
            >
              <span className="text-lg font-medium">{year}</span>
              <span className="ml-2">
                {expandedYear === year ? <FaMinus /> : <FaPlus />}
              </span>
            </div>
            {expandedYear === year && (
              <ul className="mt-2">
                {months.map((month, index) => (
                  <li key={index} className="ml-4 list-disc">
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

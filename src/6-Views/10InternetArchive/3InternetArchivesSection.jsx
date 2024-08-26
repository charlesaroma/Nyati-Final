import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

// Archives Section Component
const archiveData = [
  { year: 2024, months: ["January", "February", "March"] },
  { year: 2023, months: ["April", "May", "June"] },
  { year: 2022, months: ["July", "August", "September"] },
  { year: 2021, months: ["October", "November", "December"] },
  { year: 2020, months: ["January", "February", "March"] },
  { year: 2019, months: ["April", "May", "June"] },
  { year: 2018, months: ["July", "August", "September"] },
  { year: 2017, months: ["October", "November", "December"] },
];

const InternetArchivesSection = () => {
  const [expandedYear, setExpandedYear] = useState(null);

  const handleToggle = (year) => {
    setExpandedYear(expandedYear === year ? null : year);
  };

  return (
    <section className="h-[90vh] relative bg-whites-500 flex flex-col items-center justify-center gap-9">

      {/* Archives Grid */}
      <div className="max-w-[750px] flex flex-col justify-center">
        {/* Title Section */}
        <h2 className="text-xl font-bold mb-4">Archives</h2>
        <div className="grid grid-cols-4 gap-4">
          {archiveData.map(({ year, months }) => (
            <div key={year} className={`col-${expandedYear === year ? 4 : 1}`}>
              <div
                className="flex items-center mx-6 justify-start cursor-pointer"
                onClick={() => handleToggle(year)}
              >
                <span className="flex items-center justify-center w-6 h-6 border border-gray-500 rounded-full">
                  {expandedYear === year ? <FaMinus /> : <FaPlus />}
                </span>
                <span className="text-lg font-medium ml-2">{year}</span>
              </div>
              {expandedYear === year && (
                <ul className="mt-2 px-10 text-whites-800">
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
      </div>

      {/* Categories Section */}
      <div className="max-w-[750px] flex flex-row justify-center gap-10">
        
        {/* row 1 */}
        <div className="flex flex-col gap-3">
          <span>Categories</span>
          <span>Premiere Photos</span>
        </div>

        {/* row 2 */}
        <div className="flex flex-col gap-3">
        <span>Festivals</span>
        <span>Articles</span>
        </div>

        {/* row 3 */}
        <div>
            <span>Behind the scenes</span>
        </div>
      </div>
    </section>
  );
};

export default InternetArchivesSection;

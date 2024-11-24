import React, { useState } from 'react';
import './Dailycalender.css';

const Dailycalender = () => {
  const months = [
    { name: 'January', days: 31 },
    { name: 'February', days: 28 },
    { name: 'March', days: 31 },
    { name: 'April', days: 30 },
    { name: 'May', days: 31 },
    { name: 'June', days: 30 },
    { name: 'July', days: 31 },
    { name: 'August', days: 31 },
    { name: 'September', days: 30 },
    { name: 'October', days: 31 },
    { name: 'November', days: 30 },
    { name: 'December', days: 31 },
  ];

  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const [showFirstHalf, setShowFirstHalf] = useState(true);

  const handlePrevMonth = () => {
    setCurrentMonthIndex((prevIndex) =>
      prevIndex === 0 ? months.length - 1 : prevIndex - 1
    );
    setShowFirstHalf(true); // Reset to the first half when changing months
  };

  const handleNextMonth = () => {
    setCurrentMonthIndex((prevIndex) =>
      prevIndex === months.length - 1 ? 0 : prevIndex + 1
    );
    setShowFirstHalf(true); // Reset to the first half when changing months
  };

  const toggleHalf = () => {
    setShowFirstHalf((prev) => !prev);
  };

  const generateDays = (days) => {
    const allDays = Array.from({ length: days }, (_, i) => i + 1);
    return showFirstHalf ? allDays.slice(0, 15) : allDays.slice(15);
  };

  return (
    <div className="Dailycalender">
      <div className="monthNavigation">
        <span onClick={handlePrevMonth} className="arrow">&larr;</span>
        <div className="monthName">{months[currentMonthIndex].name}</div>
        <span onClick={handleNextMonth} className="arrow">&rarr;</span>
      </div>
      
      <div className="daysNavigation">
        <span onClick={toggleHalf} className={`arrow ${showFirstHalf ? 'disabled' : ''}`}>
          &larr;
        </span>
        <div className="monthDays">
          {generateDays(months[currentMonthIndex].days).map((day) => (
            <span key={day} className="day">
              {day}
            </span>
          ))}
        </div>
        <span onClick={toggleHalf} className={`arrow ${!showFirstHalf ? 'disabled' : ''}`}>
          &rarr;
        </span>
      </div>
    </div>
  );
};

export default Dailycalender;

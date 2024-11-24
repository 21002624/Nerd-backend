import React, { useState } from 'react';
import './Monthlycalender.css';

const Monthlycalender = () => {
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

  const handlePrevMonth = () => {
    setCurrentMonthIndex((prevIndex) =>
      prevIndex === 0 ? months.length - 1 : prevIndex - 1
    );
  };

  const handleNextMonth = () => {
    setCurrentMonthIndex((prevIndex) =>
      prevIndex === months.length - 1 ? 0 : prevIndex + 1
    );
  };

  const generateDays = (days) => {
    return Array.from({ length: days }, (_, i) => i + 1);
  };

  return (
    <div className="monthly-calendar">
      <div className="month-navigation">
        <span onClick={handlePrevMonth} className="arrow">&larr;</span>
        <h1 className="month-name">{months[currentMonthIndex].name}</h1>
        <span onClick={handleNextMonth} className="arrow">&rarr;</span>
      </div>
      <div className="month-days">
        {generateDays(months[currentMonthIndex].days).map((day) => (
          <span key={day} className="day">
            {day}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Monthlycalender;

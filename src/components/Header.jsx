import React from "react";

function Header({ today, month, year, week }) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div className="flex flex-col m-5 p-4 border rounded-lg border-blue-400">
      <h2>
        📆 Today is {today}. {month}. {year} {days[week]}
      </h2>
    </div>
  );
}

export default Header;

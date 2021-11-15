import React from "react";


export function getCurrentDate() {

  const d = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const date = new Date().toDateString('en-GB', d);
  return (
    <div>
      {date}
    </div>
  );
}

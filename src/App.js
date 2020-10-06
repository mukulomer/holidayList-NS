import React from "react";
import "./styles.css";

// const Cities = [
//   "Goa(India)",
//   "Amsterdam(Netherlands)",
//   "New York(USA)",
//   "Darjeeling(India)",
//   "Tokyo(Japan)",
//   "Lonavala(India)"
// ];
// const getCity = Cities.map((city) => city);
export default function App() {
  return (
    <div className="App">
      <ol>
        <li key={"location1"}>Goa(India) </li>
        <li key={"location2"}>Amsterdam(Netherlands) </li>
        <li key={"location3"}>New York(USA)</li>
        <li key={"location4"}>Darjeeling(India)</li>
        <li key={"location5"}>Tokyo(Japan)</li>
        <li key={"location6"}>Lonavala(India)</li>
      </ol>
    </div>
  );
}

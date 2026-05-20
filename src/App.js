// Import the schedule data from the JSON file — you can use it like a regular JS array
import days from './schedule_data.json';
import Sidebar from './components/Sidebar';
import Timetable from './components/Timetable';
import Logo from './components/Logo';
import Toggle from './components/Toggle';

// TODO: Build your Frosh Week Schedule page here
import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [nite, setNite] = useState(false);

  useEffect(() => {
    if (nite) {
      document.documentElement.classList.add("nite");
    } else {
      document.documentElement.classList.remove("nite");
    }
  }, [nite]);
  return (
    <div className="page">
      <Sidebar />
      <Timetable />
      <Logo nite={nite} />
      <Toggle
        nite={nite}
        setNite={setNite}
      />
    </div>
  );
}
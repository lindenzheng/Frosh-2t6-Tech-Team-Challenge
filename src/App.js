// Import the schedule data from the JSON file — you can use it like a regular JS array
import weekdays from './schedule_data.json';
import Header from './components/Header';
import Week from './components/WeekViewer';
import Logo from './components/Logo';
import Toggle from './components/Toggle';

// TODO: Build your Frosh Week Schedule page here

import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="page">
      <Header />
      <Week />
      <Logo />
      <Toggle />
    </div>
  );
}
import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //Early return  pattern
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48 col-span-1">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Gaming</li>
        <li>live</li>
      </ul>
      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li>Movies</li>
        <li>Gaming</li>
        <li>Shorts</li>
      </ul>
    </div>
  );
};

export default Sidebar;

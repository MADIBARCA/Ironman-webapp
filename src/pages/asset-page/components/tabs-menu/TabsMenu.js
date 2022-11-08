import React from "react";
import { useState } from "react";

import "./TabsMenu.css";

const TabsMenu = ({ itemsArray }) => {
  const [tabsArray, setTabsArray] = useState(itemsArray);

  const [currentComponent, setCurrentComponent] = useState();

  const [clicked, setClicked] = useState(false);

  const handleChange = (activeItemIndex) => {
    setClicked(true);
    const itemsToActive = tabsArray.map((item, index) => {
      if (activeItemIndex === index) {
        item.isActive = true;
        setCurrentComponent(itemsArray[index].component);
      } else {
        item.isActive = item.isActive && false;
      }
      return item;
    }, []);
    setTabsArray(itemsToActive);
  };

  return (
    <div className="tabsMenuContainer">
      <div className="tabsMenuItems">
        {tabsArray.map((tab, i) => (
          <a
            className={tab.isActive ? "activeTabItem" : "defaultTabItem"}
            key={i}
            onClick={() => handleChange(i)}
          >
            {tab.title}
          </a>
        ))}
      </div>

      {clicked ? currentComponent : itemsArray[0].component}
    </div>
  );
};

export default TabsMenu;

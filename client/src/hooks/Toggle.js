import React from "react";
import { useToggle } from "../hooks/useToggle";

const Toggle = () => {
  const [colorMode, setColorMode] = useToggle(false);
  const toggleMode = e => {
    e.preventDefault();
    setColorMode(!colorMode);
  };
  return (
    <div>
      <div className="color-mode__toggle">
        <div data-testid="divvy"
          onClick={toggleMode}
          className={colorMode ? "toggle toggled" : "toggle"}
          />
      </div>
    </div>
  );
};

export default Toggle;
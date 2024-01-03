import React, { useState, createContext, useEffect } from "react";
export const activeContextSidebar = createContext(null);

const SidebarContext = ({ children }) => {
  const [isActiveSidebar, setIsActiveSidebar] = useState(true);


  useEffect(() => { 
     if (window.innerWidth < 890) {
    setIsActiveSidebar(false);
  } else {
    setIsActiveSidebar(true);
  }
    // if width size less than 890px then sidebar hide
    const handleWindowResize = () => {
      if (window.innerWidth < 890) {
        setIsActiveSidebar(false);
      } else {
        setIsActiveSidebar(true);
      }
    };
    window.addEventListener("resize", handleWindowResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <activeContextSidebar.Provider
      value={{ isActiveSidebar, setIsActiveSidebar }}
    >
      {children}
    </activeContextSidebar.Provider>
  );
};

export default SidebarContext;

import React from "react";

// https://blog.logrocket.com/create-advanced-scroll-lock-react-hook/
export const useScrollLock = () => {
  const lockScroll = React.useCallback(() => {
    const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarCompensation}px`;
  }, []);

  const unlockScroll = React.useCallback(() => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  }, []);

  return {
    lockScroll,
    unlockScroll,
  };
};

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function ScrollTopPages () {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]); // Trigger on path change.

  return null;
};

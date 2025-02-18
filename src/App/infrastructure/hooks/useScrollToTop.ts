import { useEffect, useState } from "react";

const resetScroll: ScrollToOptions = { top: 0, behavior: "smooth" };

const useScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY >= 600);

    const handleClick = () => window.scrollTo(resetScroll);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return { isVisible };
};

export default useScrollToTop;

import { useEffect, useState } from "react";

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);
  console.log(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 900);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  if (!showButton) return null;
  return (
    <button
      className="bottom-10 text-primary-dark font-bold right-2.5 fixed border-2 w-8  h-8 rounded-md border-dark-green bg-ascent-green  shadow-2xl animate-bounce cursor-pointer"
      onClick={() => window.scrollTo(0, 0)}
    >
      ↑
    </button>
  );
}

export default ScrollToTop;

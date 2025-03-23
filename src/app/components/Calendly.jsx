import { useEffect } from "react";

const Calendly = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openCalendlyWidget = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/blendxemini/byte-sized-chats-meet-the-developer-blend-emini",
      });
    }
  };

  return (
    <div>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <a
        className="text-black font-semibold text-lg rounded-lg hover:border bg-teal-400  box-border p-3 "
        href="#"
        onClick={openCalendlyWidget}
      >
        Find a time to set a meeting
      </a>
    </div>
  );
};

export default Calendly;

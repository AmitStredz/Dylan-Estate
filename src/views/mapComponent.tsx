import React, { useState } from "react";

// MapComponent.tsx
interface MapComponentProps {
  destination: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ destination }) => {
  const [iframeSrc, setIframeSrc] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.516618665685!2d72.8561644!3d19.2211919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b638773455f3%3A0x1bbd8b1b31a9a0e2!2sGokul%20Village%20CHS%202%2C%20Mira%20Road%2C%20Mira%20Bhayandar%2C%20Maharashtra%20401707%2C%20India!5e0!3m2!1sen!2sus!4v1628123445805!5m2!1sen!2sus"
  );

  React.useEffect(() => {
    if (destination) {
      const query = encodeURIComponent(destination);
      setIframeSrc(
        `https://www.google.com/maps/embed/v1/search?q=${query}&key=YOUR_API_KEY`
      );
    }
  }, [destination]);

  return (
    <>
      {iframeSrc && (
        <iframe
          src={iframeSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          title="Gokul Village CHS 2"
        ></iframe>
      )}
    </>
  );
};

export default MapComponent;

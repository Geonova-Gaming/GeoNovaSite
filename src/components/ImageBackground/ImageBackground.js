import React, { useEffect, useState } from "react";

const ImageWithTransition = ({ image, section }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      // Initial
      let minScroll = 0;  
      let maxScroll = 0;
      let endScroll = 0;


      // Definir los puntos mínimo y máximo del scroll
      if (section == "games") {
        minScroll = 350;  // Cuando la imagen empieza a aparecer
        maxScroll = 1000; // Cuando la imagen está completamente visible
        endScroll = 1500; // Cuando la imagen empieza a desaparecer
      }

      if (section == "news") {
        minScroll = 1000;  // Cuando la imagen empieza a aparecer
        maxScroll = 1732; // Cuando la imagen está completamente visible
        endScroll = 2250; // Cuando la imagen empieza a desaparecer
      }

      // Calculamos la opacidad entre 0 y 1
      if (currentScrollTop >= minScroll && currentScrollTop <= maxScroll) {
        // Aumenta la opacidad de 0 a 1
        const opacityValue = (currentScrollTop - minScroll) / (maxScroll - minScroll);
        setOpacity(opacityValue);
      } else if (currentScrollTop > maxScroll && currentScrollTop <= endScroll) {
        // Disminuye la opacidad de 1 a 0
        const opacityValue = 1 - (currentScrollTop - maxScroll) / (endScroll - maxScroll);
        setOpacity(opacityValue);
      } else {
        // Si estamos antes del minScroll o después del endScroll, la opacidad es 0 o 1
        setOpacity(currentScrollTop < minScroll || currentScrollTop > endScroll ? 0 : 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="image-container">
      <img
        src={image}
        alt="Header"
        className="scrolling-image box-inner-shadow"
        style={{ opacity }} // Aplica la opacidad dinámica
      />
    </div>
  );
};

export default ImageWithTransition;

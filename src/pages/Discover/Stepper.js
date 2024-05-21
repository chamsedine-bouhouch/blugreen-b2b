import React, { useEffect, useState } from "react";
import Besoins from "../../Images/1.png";
import Produits from "../../Images/2.png";
import Boxes from "../../Images/3.png";
import Compatibilité from "../../Images/4.png";
import Ingrédients from "../../Images/5.png";
import "./Stepper.css";
const rgba = (r, g, b, a) => `rgba(${r}, ${g}, ${b}, ${a})`;

const steps = [
  {
    icon: Besoins,
    title: "Détection",
    backgroundColor: rgba(236, 236, 108, 1),
  },
  {
    icon: Ingrédients,
    title: "Déchiffrage",
    backgroundColor: rgba(116, 209, 234, 1),
  },
  {
    icon: Compatibilité,
    title: "Vérification",
    backgroundColor: rgba(255, 185, 144, 1),
  },
  {
    icon: Produits,
    title: "Adaptation",
    backgroundColor: rgba(191, 155, 222, 1),
  },
  {
    icon: Boxes,
    title: "Personnalisation",
    backgroundColor: rgba(157, 231, 215, 1),
  },
];

function StepperComponent() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="timeline">
      {steps.map((step, index) => (
        <div
          key={index}
          className="timeline-item"
          style={{ marginTop: isSmallScreen ? "0" : `${index * -50}px` }}
        >
          <div
            className="timeline-content poppins-medium"
            style={{ backgroundColor: step.backgroundColor }}
          >
            <div className="timeline-icon">
              <img src={step.icon} alt={step.title} />
            </div>
            <div className="steptitle">{step.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StepperComponent;

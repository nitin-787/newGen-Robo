import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // npm install react-icons

const WhatsAppFloatingButton: React.FC = () => {
  const whatsappLink = "https://wa.me/9509234130"; // Replace with your number

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "50%",
        padding: "15px",
        zIndex: 1000,
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      }}
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppFloatingButton;

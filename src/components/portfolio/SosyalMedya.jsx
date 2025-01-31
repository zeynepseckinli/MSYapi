import React, { useState } from "react";
import { Box } from "@mui/material";

const mediaItems = [
  { id: 1, name: "The Cocktail Talks", src: "https://res.cloudinary.com/dirsnej9m/image/upload/v1735577093/dn2upkrlzkduwk7tjrm9.jpg", url: "https://www.instagram.com/thecocktailtalks/" },
  { id: 2, name: "Maria Nila", src: "https://res.cloudinary.com/dirsnej9m/image/upload/v1735577093/dn2upkrlzkduwk7tjrm9.jpg", url: "https://www.instagram.com/marianilaturkiye/" },
  { id: 3, name: "Balmain Hair Turkiye", src: "https://res.cloudinary.com/dirsnej9m/image/upload/v1735577093/dn2upkrlzkduwk7tjrm9.jpg", url: "https://www.instagram.com/haircouture_tr/" },
];

const SosyalMedya = () => {
  const handleMediaClick = (item) => {
    window.open(item.url, "_blank"); // Yeni sekmede URL aç
  };

  return (
    <div style={{ margin: 0, padding: "80px", display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "100%", textAlign: "center", backgroundColor: "background.default" }}>
        {/* İçerik Gösterimi */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "center" }}>
          {mediaItems.map((item) => (
            <Box
              key={item.id}
              sx={{
                position: "relative",
                maxWidth: "300px",
                height: "550px",
                borderRadius: "8px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
                },
              }}
              onClick={() => handleMediaClick(item)}
            >
              <img src={item.src} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "0",
                  width: "100%",
                  height: "50px",
                  backgroundColor: "#10375C99",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "text.secondary",
                  fontSize: "16px",
                  fontWeight: "bold",
                  padding: "0 10px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.name}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default SosyalMedya;

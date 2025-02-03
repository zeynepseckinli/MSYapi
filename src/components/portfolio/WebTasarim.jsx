import React, { useState } from "react";
import { Box } from "@mui/material";

const mediaItems = [
  { id: 1, name: "Sanatolia Akademi", src: "https://res.cloudinary.com/dy20zavvv/image/upload/v1738315279/123_qt2z7z.png", url: "https://www.sanatoliaakademi.com" },
  { id: 2, name: "Zeynepse", src: "https://res.cloudinary.com/dy20zavvv/image/upload/v1738315100/Screenshot_2025-01-31_121702_lgkfym.png", url: "https://www.zeynepse.com" },
  { id: 3, name: "Studio Bal", src: "https://res.cloudinary.com/dy20zavvv/image/upload/v1738315098/Screenshot_2025-01-31_121744_mhtwyz.png", url: "https://www.studiobal.art" },
];

const WebTasarim = () => {
  const handleMediaClick = (item) => {
    window.open(item.url, "_blank"); // Yeni sekmede URL aç
  };

  return (
    <div style={{ margin: 0,  
    display: "flex", justifyContent: "center" }}>
  <Box sx={{ width: "100%", maxWidth: "1500px", 
    padding: { xs: "24px", sm: "80px" },
    textAlign: "center", backgroundColor: "background.default" }}>
    {/* İçerik Gösterimi */}
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center" }}>
      {mediaItems.map((item) => (
        <Box
          key={item.id}
          sx={{
            position: "relative",
            maxWidth: "400px",
            height: "300px",
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

export default WebTasarim;

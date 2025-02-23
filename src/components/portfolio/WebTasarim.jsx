import React, { useState } from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const mediaItems = [
  { id: 1, name: "Konut Rekonstrüksiyonu", src: "/a.jpg", url: "" },
  { id: 2, name: "Konut Rekonstrüksiyonu", src: "/b.jpg", url: "" },
  { id: 3, name: "Konut Rekonstrüksiyonu", src: "/c.jpg", url: "" },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + mediaItems.length) % mediaItems.length);
  };

  const handleMediaClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Box sx={{ width: "100%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Başlık Alanı */}
      <Box sx={{ 
    maxWidth: "1000px", // 1000px sınırı koyar ama dar ekranda küçülebilir
    width: "100%", 
    padding: { xs: "24px", sm: "0px" },
    display: "flex", 
    flexDirection: "column", 
    alignItems: "flex-start", // Sol hizalama sağlar
    margin: "100px",
}}>
      <Typography variant="subtitle2" sx={{ fontSize: "0.9rem", fontWeight: "500", marginTop: "6px", marginBottom: "15px", color: "#E2AD7E" }}>
        PROJELERİMİZ
      </Typography>
      <Typography variant="h1" sx={{ fontSize: "4rem", fontWeight: "bold", color: "text.primary",  lineHeight: 1.2 }}>
        Örnek Projeler
      </Typography>
      </Box>
      {/* Carousel Alanı */}
      <Box sx={{ width: "100%", maxWidth: "1300px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", marginBottom: "100px" }}>
        {/* Sol Buton */}
        <IconButton 
  onClick={handlePrev} 
  sx={{ 
    position: "absolute", 
    left: 0, 
    zIndex: 2, 
    backgroundColor: "transparent", 
    border: "1px solid #E2AD7E",
    "&:hover": { backgroundColor: "#E2AD7E" },
    width: "100px", // Buton boyutu (ikon ile uyumlu olmalı)
    height: "100px"
  }}
>
  <img 
    src="/sol.PNG" // PNG ikonunun yolu
    alt="Geri"
    style={{ width: "50px", height: "50px", objectFit: "contain" }} // İkon boyutu
  />
</IconButton>

        {/* Proje Görseli */}
        <Box
          sx={{
            width: "1000px",
            height: "500px",
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
          }}
          onClick={() => handleMediaClick(mediaItems[currentIndex].url)}
        >
          {/* Proje Resmi */}
          <img src={mediaItems[currentIndex].src} alt={mediaItems[currentIndex].name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />

          {/* Hover Efekti */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "background.paper",
              opacity: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "opacity 0.3s",
              "&:hover": { opacity: 0.9 },
            }}
          >
            <Typography variant="subtitle2" sx={{ fontSize: "0.9rem", fontWeight: "600", color: "#E2AD7E"}}>
            PROJEYİ GÖRÜNTÜLE
              </Typography>
           
          </Box>

          <Box
            sx={{
              position: "absolute",
              bottom: "30px",
              left: "30px",
              color: "white",
              padding: "6px 12px",
              borderRadius: "4px",
            }}
          >
            <Typography variant="h2" sx={{ fontSize: "4rem", fontWeight: "bold", color: "text.secondary" }}>
              {mediaItems[currentIndex].name}
            </Typography>
          </Box>
        </Box>

        {/* Sağ Buton */}
        <IconButton 
  onClick={handlePrev} 
  sx={{ 
    position: "absolute", 
    right: 0, 
    zIndex: 2, 
    backgroundColor: "transparent", 
    border: "1px solid #E2AD7E",
    "&:hover": { backgroundColor: "#E2AD7E" },
    width: "100px", // Buton boyutu (ikon ile uyumlu olmalı)
    height: "100px"
  }}
>
  <img 
    src="/sag2.png" // PNG ikonunun yolu
    alt="Geri"
    style={{ width: "50px", height: "50px", objectFit: "contain" }} // İkon boyutu
  />
</IconButton>
      </Box>
    </Box>
  );
};

export default Projects;

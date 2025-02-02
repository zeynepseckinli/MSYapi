import React, { useState } from "react";
import { Box, Button, Dialog } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow"; 
import mediaItems from "../../data/mediaData";

const categories = [
  "Tümü",
  "Kutlama",
  "Etkİnlİk",
  "Festİval",
  "Konser",
  "Mİmarİ",
  "Ürün",
  "Sosyal Medya",
];

const FotografVideo = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleMediaClick = (item) => {
    setSelectedMedia(item);
  };

  const handleClose = () => {
    setSelectedMedia(null);
  };

  const filteredMedia =
    selectedCategory === "Tümü"
      ? mediaItems
      : mediaItems.filter((item) => item.category === selectedCategory);

  return (
    <div style={{ margin: 0, paddingBottom: "80px", display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "100%", maxWidth: "1500px", display: "flex", flexDirection: "column", // Elemanları yatay sırala
              alignItems: "center", // Dikeyde hizala
              justifyContent: "center", textAlign: "center", backgroundColor: "background.default" }}>
        {/* Kategori Butonları */}
        <Box
  sx={{
    display: "flex",
    width: "1200px",
    justifyContent: "space-between",
    flexWrap: "wrap",
    borderBottom: "2px solid #10375C", // Yatay çizgi ekleme
    boxShadow:  "0px 4px 10px rgba(0, 0, 0, 0.2)",
    marginBottom: "40px",
  }}
>
  {categories.map((category) => (
    <Button
      key={category}
      variant={selectedCategory === category ? "outlined" : "outlined"}
      color="primary"
      onClick={() => handleCategoryChange(category)}
      
      sx={{
        width: "150px", // Buton genişliği
        height: "50px",
        borderColor: "#EDEFF3",
        borderRadius: "0px",
        boxShadow: selectedCategory === category ? "0px 4px 10px rgba(0, 0, 0, 0.2)" : "none",
        "&:hover": {
          boxShadow: selectedCategory === category ? "0px 4px 12px rgba(0, 0, 0, 0.3)" : "none",
          color: "#EDEFF3",
          backgroundColor: "#10375C",
          borderColor: "#10375C",

        },
      }}
    >
      {category}
    </Button>
  ))}
</Box>


        {/* İçerik Gösterimi */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", marginTop: "20px" }}>
          {filteredMedia.map((item) => (
            <Box
              key={item.id}
              sx={{
                position: "relative",
                width: "400px",
                maxWidth: "400px",
                height: "300px",
                borderRadius: "8px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)", // Hafif gölge efekti
                },
              }}
              onClick={() => handleMediaClick(item)}
            >
              {item.type === "image" ? (
                <img src={item.src} alt={item.category} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              ) : (
                <>
                  <video src={item.src} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  {/* Oynatma İkonu (Sürekli Görünür) */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      backgroundColor: "#10375C99",
                      borderRadius: "50%",
                      width: "60px",
                      height: "60px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      transition: "transform 0.2s",
                      "&:hover": { transform: "translate(-50%, -50%) scale(1.2)" }, // Üzerine gelince büyüsün
                    }}
                  >
                    <PlayArrowIcon sx={{ color: "#fff", fontSize: 40 }} />
                  </Box>
                </>
              )}
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
                  whiteSpace: "nowrap", // Yazının taşmasını önle
                  overflow: "hidden",
                  textOverflow: "ellipsis", // Uzun yazıları kes ve "..." ekle
                }}
              >
                {item.name}
              </Box>
            </Box>
          ))}
        </Box>

        {/* MODAL - Büyük Görsel veya Video */}
        <Dialog open={!!selectedMedia} onClose={handleClose} maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "background.default", // Hafif koyu arka plan
              padding: "0px",
            }}
            onClick={handleClose} // Tıklayınca kapansın
          >
            {selectedMedia?.type === "image" ? (
              <img
                src={selectedMedia?.src}
                alt="Büyük Görsel"
                style={{
                  maxWidth: "80vw", // Genişlik en fazla %80
                  maxHeight: "80vh", // Yükseklik en fazla %80
                }}
              />
            ) : (
              <video
                src={selectedMedia?.src}
                controls
                autoPlay
                style={{
                  maxWidth: "80vw",
                  maxHeight: "80vh",
                }}
              />
            )}
          </Box>
        </Dialog>
      </Box>
    </div>
  );
};

export default FotografVideo;

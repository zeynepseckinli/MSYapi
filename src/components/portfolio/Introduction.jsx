import React, { useEffect, useState } from "react";
import { Box, Typography, Button,  Dialog  } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow"; 


const mediaItems = [
      { id: 1, name: "ornek isim ornek isimornek isim", src: "/foto1.png", type: "image", category: "Kutlama" },
      { id: 2, name: "ornek falan", src: "https://res.cloudinary.com/dirsnej9m/image/upload/v1735577093/dn2upkrlzkduwk7tjrm9.jpg", type: "image", category: "Etkinlik" },
      { id: 3, name: "falan isimornek isimornek isimornek isimornek isim", src: "/images/festival1.jpg", type: "image", category: "Festival" },
      { id: 4, name: "ornek isim", src: "https://res.cloudinary.com/dirsnej9m/video/upload/v1735474100/1220_ngp0ue.mp4", type: "video", category: "Konser" },
      { id: 5, name: "falan isim", src: "https://res.cloudinary.com/dirsnej9m/image/upload/v1735027997/lsziumygj5usa3p1vkcd.jpg", type: "image", category: "Mimari" },
      { id: 6, name: "falan falan", src: "https://res.cloudinary.com/dirsnej9m/image/upload/v1733822705/vnvdabwlqhddrwzrqpub.jpg", type: "image", category: "Ürün" },
      { id: 7, name: "ornek isim", src: "/images/sosyalmedya1.jpg", type: "image", category: "Sosyal Medya" },
      { id: 8, name: "falan isim", src: "https://res.cloudinary.com/dy20zavvv/video/upload/v1738232167/1220_e5ytdo.mp4", type: "video", category: "Kutlama" },
];
  
  const Introduction = () => {
    const [selectedMedia, setSelectedMedia] = useState(null);

  
   

    const handleMediaClick = (item) => {
        setSelectedMedia(item);
      };
    
      const handleClose = () => {
        setSelectedMedia(null);
      };
  
    
  
    
    
      return (
        <div style={{ margin: 0, padding: 0 }}>
          
<Box id="services"
        sx={{
          width: "100%", // Sayfanın tamamını kapla (genişlik)
          display: 'flex', // İçeriği yerleştirmek için flex kullan
          justifyContent: 'center', // Sol tarafa hizala
          alignItems: 'center', // Dikeyde ortalamak için center
          backgroundColor: "background.default",
          paddingBottom: "50px",
        }}
      >
            
            <Box
                      sx={{
                        display: "flex", // Flexbox kullan
                        width: "1500px", // İçeriğin genişliği
                        flexDirection: "column", // Elemanları dikey hizala
                        alignItems: "center", // Yatayda ortala
                        justifyContent: "center", // Dikeyde ortala
                        margin: "0 auto", // Tüm Box'ı ortalamak için margin ayarı
                        gap: "24px", // Yazılar arasında boşluk
                        backgroundColor: "background.default",
                      }}
                    >
                      <Box
                      sx={{
                        display: "flex", // Flexbox kullan
                        flexDirection: "column", // Elemanları dikey hizala
                        alignItems: "flex-start", // Sol tarafa hizala
                        gap: "24px", // Yazılar arasında boşluk
                        width: "1200px", // İçeriğin genişliği
                        paddingTop: "70px",
                        paddingBottom: "40px",

                      }}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          color: "text.primary", // Tema rengi
                          fontWeight: 500, // Kalın yazı
                        }}
                      >
                        Neler Yaptık?        
                      </Typography>
                    
                      
                    </Box>


      {/* İçerik Gösterimi */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", }}>
  {mediaItems.map((item) => (
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
            transform: "scale(1.03)" ,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" // Hafif gölge efekti
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
              backgroundColor: "rgba(0, 0, 0, 0.6)",
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
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Yarı saydam siyah arka plan
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
      </Box>
        </div>
      );
    };

export default Introduction;

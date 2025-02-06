import React, { useEffect, useState } from "react";
import { Box, Typography, Button,  Dialog  } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow"; 
import ClassicButton from "../buttons/ClasicButton";
import { useNavigate } from "react-router-dom";

const mediaItems = [
      { id: 2, name: "ornek falan", src: "https://res.cloudinary.com/dirsnej9m/image/upload/v1735577093/dn2upkrlzkduwk7tjrm9.jpg", type: "image", category: "Etkinlik" },
      { id: 3, name: "falan isimornek isimornek isimornek isimornek isim", src: "/images/festival1.jpg", type: "image", category: "Festival" },
      { id: 4, name: "ornek isim", src: "https://res.cloudinary.com/dirsnej9m/video/upload/v1735474100/1220_ngp0ue.mp4", type: "video", category: "Konser" },
      { id: 5, name: "falan isim", src: "https://res.cloudinary.com/dirsnej9m/image/upload/v1735027997/lsziumygj5usa3p1vkcd.jpg", type: "image", category: "Mimari" },
      { id: 6, name: "falan falan", src: "https://res.cloudinary.com/dirsnej9m/image/upload/v1733822705/vnvdabwlqhddrwzrqpub.jpg", type: "image", category: "Ürün" },
      { id: 7, name: "ornek isim", src: "/images/sosyalmedya1.jpg", type: "image", category: "Sosyal Medya" },
];
  const Introduction = () => {
    const [selectedMedia, setSelectedMedia] = useState(null);
    const navigate = useNavigate();
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
          width: "100%", 
          height: "100%",
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          backgroundColor: "background.default",
          paddingBottom: "50px",
        }}
      >
        <Box
          sx={{
            display: "flex", 
            width: "100%", 
            maxWidth: "1500px", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center", 
            margin: "0 auto", 
            gap: "24px", 
            backgroundColor: "background.default",
            padding: { xs: "36px 24px", sm: "0rem" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" }, 
              justifyContent: { xs: "flex-start", sm: "space-between" }, 
              alignItems: { xs: "flex-start", sm: "center" }, 
              gap: "24px",
              width: "100%",
              maxWidth: "1200px",
              paddingTop: { xs: "0px", sm:"70px" },
              paddingBottom: { xs: "0px", sm:"40px" },
              paddingRight: { xs: "0px", sm:"100px" },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "text.primary",
                fontWeight: 500,
                fontSize: { xs: "2.5rem", sm: "3rem" }, 
              }}
            >
              Neler Yaptık?        
            </Typography>
            <img
              src="/OK.png" 
              alt="Separator"
              style={{ width: "350px", height: "60px" ,    objectFit: "cover", marginBottom: "40px" }} 
            />
            <ClassicButton
              sx={{width: "200px" }}
              text="Portfolyo"
              onClick={() => navigate("/portfolio")}
            />
          </Box>

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
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" 
        },
      }}
      onClick={() => handleMediaClick(item)}
    >
      {item.type === "image" ? (
        <img src={item.src} alt={item.category} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        <>
          <video src={item.src} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
              "&:hover": { transform: "translate(-50%, -50%) scale(1.2)" }, 
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
      <Dialog open={!!selectedMedia} onClose={handleClose} maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "background.default", 
            padding: "0px",
          }}
          onClick={handleClose} 
        >
          {selectedMedia?.type === "image" ? (
            <img
              src={selectedMedia?.src}
              alt="Büyük Görsel"
              style={{
                maxWidth: "80vw", 
                maxHeight: "80vh", 
                
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

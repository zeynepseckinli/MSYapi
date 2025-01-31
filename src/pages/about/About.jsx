import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import ClassicButton from "../../components/buttons/ClasicButton";
import ContactBox from "../../components/contactBox/ContactBox";

const About = () => {

  useEffect(() => {
    const handleScrollEvent = () => {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    window.addEventListener("scrollToContact", handleScrollEvent);
    return () => {
      window.removeEventListener("scrollToContact", handleScrollEvent);
    };
  }, []);

  return (
    <div style={{ margin: 0, padding: 0 }}>
      {/* İlk Box - Resim ve Yazı */}
      <Box
        sx={{
            width: "100%", // Sayfanın tamamını kapla (genişlik)
            height: "100vh", // Tam ekran yüksekliği
            backgroundImage: 'url(/foto1.png)', // Public içindeki foto1'i arka plan olarak kullan
            backgroundSize: 'cover', // Resmin boyutlarını box'a göre ayarla
            backgroundPosition: 'center', // Resmin ortalanmasını sağla
            display: 'flex', // İçeriği yerleştirmek için flex kullan
            justifyContent: 'flex-start', // Sol tarafa hizala
            alignItems: 'center', // Dikeyde ortalamak için center
        }}
      >
        

        {/* Yazı */}
        <Box
          sx={{
            display: "flex", // Flexbox kullan
            width: "1200px", // İçeriğin genişliği
            flexDirection: "column", // Elemanları dikey hizala
            alignItems: "center", // Yatayda ortala
            justifyContent: "center", // Dikeyde ortala
            margin: "0 auto", // Tüm Box'ı ortalamak için margin ayarı
            gap: "24px", // Yazılar arasında boşluk

          }}
        >
          <Box
          sx={{
            display: "flex", // Flexbox kullan
            width: "1200px", // İçeriğin genişliği
            flexDirection: "column", // Elemanları dikey hizala
            alignItems: "flex-start", // Sol tarafa hizala
            gap: "24px", // Yazılar arasında boşluk
            zIndex: 2, // Yazıların üstte kalmasını sağlamak için

          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "text.primary", // Tema rengi
              fontWeight: 600, // Kalın yazı
            }}
          >
            Merhaba, burasi Studio BAL
          </Typography>
          <Typography
            variant="h3" // İkinci yazının boyutunu bir tık küçültebilirsin
            sx={{
              color: "text.primary", // Tema rengi
              fontWeight: 400, // Daha ince yazı
            }}
          >
            ben Berkus 
          </Typography>
          <ClassicButton
            sx={{ marginLeft: "1px" }}
            text="Daha Fazla"
            onMouseEnter={() => setShowImage(true)}
            onMouseLeave={() => setShowImage(false)}
          />
          
        </Box>
        </Box>

      </Box>

      

    

      {/* Üçüncü Box */}
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#fdffb6", // Açık sarı arka plan
        }}
      />

      {/* Dördüncü Box */}
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#caffbf", // Açık yeşil arka plan
        }}
      />

      {/* Beşinci Box */}
      <Box id="contact-section"
        sx={{
          width: "100%",
          height: "400px",
          backgroundColor: "#9bf6ff", // Açık mavi arka plan
        }}
      >
              <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <ContactBox />
    </div>
      </Box>
    </div>
  );
};

export default About;

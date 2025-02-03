import React, { useEffect, useState, useRef, useCallback } from "react";
import { Box, Typography, Button, Dialog } from "@mui/material";
import ContactBox from "../../components/contactBox/ContactBox";
import FotografVideo from "../../components/portfolio/FotografVideo";
import WebTasarim from "../../components/portfolio/WebTasarim";
import SosyalMedya from "../../components/portfolio/SosyalMedya";
import VariantButton from "../../components/buttons/VariantButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"; 


const Portfolio = () => {
    const [showScroll, setShowScroll] = useState(false);

  const [selectedTab, setSelectedTab] = useState("fotografVideo");
  const videoRef = useRef(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Sayfa yüklendiğinde en üste kaydır
  }, []);

  

  useEffect(() => {
      // Mobil cihaz olup olmadığını kontrol eden fonksiyon
      console.log("Ekran genişliği:", window.innerWidth);
  
      const checkMobile = () => {
        const mobile = window.matchMedia("(max-width: 850px)").matches;
        console.log("isMobile değeri güncellendi:", mobile);
        setIsMobile(mobile);
      };
      checkMobile();
      window.addEventListener("resize", checkMobile);

      return () => {
        window.removeEventListener("resize", checkMobile);
      };
    }, []);

  const handleVideoError = () => {
    setVideoFailed(true);
  };

  const renderComponent = () => {
    switch (selectedTab) {
      case "fotografVideo":
        return <FotografVideo />;
      case "webTasarim":
        return <WebTasarim />;
      case "sosyalMedya":
        return <SosyalMedya />;
      default:
        return null;
    }
  };

  useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setShowScroll(true);
        } else {
          setShowScroll(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

      return (
<div style={{ 
  margin: 0, 
  padding: 0, 
  overflowX: "hidden", 
  width: "100%", 
  maxWidth: "100vw" 
}}>

            <div style={{ margin: 0, padding: 0, maxWidth: "100%", 
              height: "400px" ,
              display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#EDEFF3", }}>
                  <Box
                    sx={{
                      position: "relative", // Mutlaka relative olsun
                      maxWidth: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#f0f1f5",
                      
                      paddingBottom: "0px",
                      marginBottom: "0px",
                    }}
                  >
                    {isMobile || videoFailed ? (
                    <img
                      src="/1b.png"
                      alt="Background"
                      style={{
                        
                        paddingBottom: "0px",
                        marginBottom: "0px",
                        width: "100%",
                        maxWidth: "2000px",
                        height:  "400px",
                        objectFit: "cover",
                        zIndex: 1,
                        transition: "opacity 0.3s ease-in-out",
                      }}
                    />
                  ) : (
                    <video
                      ref={videoRef}
                      autoPlay
                      muted
                      playsInline
                      loop  
                      onError={handleVideoError} // Video yüklenemezse img göster
                      style={{
                        paddingTop: "0px",
                        marginBottom: "0px",
                        width: "100vw",
                        height: "400px",
                        objectFit: "cover",
                        zIndex: 0,
                      }}
                    >
                      <source
                        src="https://res.cloudinary.com/dy20zavvv/video/upload/v1738307113/hikayenin_devam%C4%B1_i%C3%A7in_6_zobc4r.mp4"
                        type="video/mp4"
                      />
                    </video>
                  )}
            
            <Box
  sx={{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)", // Ortalamayı garanti eder
    width: "100%",
    maxWidth: "1200px",
    height: "300px",
    display: "flex",
    flexDirection: { xs: "row", sm: "column" },
    alignItems: "center", // Ortaya hizalama
    justifyContent: "center", // Dikey ortalama
    zIndex: 10, // Videonun üstüne çıkmasını sağla
  }}
>
<Box
  sx={{
    display: "flex",
    gap: 2,
    flexDirection: { xs: "column", sm: "row" }, // xs için column, sm ve üstü için row
    alignItems: "center",
    justifyContent: "center",
  }}
>
         
<Button 
  variant={selectedTab === "fotografVideo" ? "contained" : "outlined"}
  sx={{
      width:  { xs: "310px", sm: "350px" },
      height: "50px",
      borderColor: "#10375C",
      borderRadius: "50px",
      fontSize: '1rem',
      backgroundColor: selectedTab === "fotografVideo" ? "#10375C" : "rgba(255, 255, 255, 0.6)", // Yarı saydam arka plan
      color: selectedTab === "fotografVideo" ? "#EDEFF3" : "#10375C",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      transition: "0.3s",
      "&:hover": {
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
        color: "#EDEFF3",
        backgroundColor: "#10375C",
        borderColor: "#10375C",
      },
    }}
  onClick={() => setSelectedTab("fotografVideo")}
>
Fotoğraf ve Vİdeo Prodüksİyon
</Button>

          <Button 
  variant={selectedTab === "webTasarim" ? "contained" : "outlined"}
  sx={{
      width: { xs: "310px", sm: "350px" },
      height: "50px",
      borderColor: "#10375C",
      borderRadius: "50px",
      fontSize: '1rem',
      backgroundColor: selectedTab === "webTasarim" ? "#10375C" : "rgba(255, 255, 255, 0.6)", // Yarı saydam arka plan
      color: selectedTab === "webTasarim" ? "#EDEFF3" : "#10375C",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      transition: "0.3s",
      "&:hover": {
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
        color: "#EDEFF3",
        backgroundColor: "#10375C",
        borderColor: "#10375C",
      },
    }}
  onClick={() => setSelectedTab("webTasarim")}
>
  Web Tasarım
</Button>
<Button 
  variant={selectedTab === "sosyalMedya" ? "contained" : "outlined"}
  sx={{
      width: { xs: "310px", sm: "350px" },
      height: "50px",
      borderColor: "#10375C",
      borderRadius: "50px",
      fontSize: '1rem',
      backgroundColor: selectedTab === "sosyalMedya" ? "#10375C" : "rgba(255, 255, 255, 0.6)", // Yarı saydam arka plan
      color: selectedTab === "sosyalMedya" ? "#EDEFF3" : "#10375C",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      transition: "0.3s",
      "&:hover": {
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
        color: "#EDEFF3",
        backgroundColor: "#10375C",
        borderColor: "#10375C",
      },
    }}
  onClick={() => setSelectedTab("sosyalMedya")}
>
  Sosyal Medya Yönetİmİ
</Button>
          
        </Box>
</Box>

                  </Box>
                  </div>

          <Box sx={{ width: "100%",  textAlign: "center", backgroundColor: "background.default" }}>
          {renderComponent()}
      </Box>

          
    
          <Box id="contact-section"
            sx={{
              width: "100%",
              height: "400px",
            }}
          >
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <ContactBox />
        </div>
          </Box>

          {showScroll && (
        <Button
        color="primary"
        onClick={scrollToTop}
        sx={{
          color: "#EDEFF3",
          position: "fixed",
          bottom: "30px",
          right: "30px",
          zIndex: 1000,
          backgroundColor: "#10375C", // Buton rengi
          "&:hover": { backgroundColor: "#0d2a46" }, // Hover efekti
          width: "40px", // Kare buton için genişlik
          height: "40px", // Kare buton için yükseklik
          minWidth: "40px",
          borderRadius: "8px", // Köşeleri hafif yuvarlatmak için
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)", // Hafif gölge efekti
        }}
      >
        <KeyboardArrowUpIcon fontSize="small" />
      </Button>
      )}

        </div>
      );
    };

export default Portfolio;

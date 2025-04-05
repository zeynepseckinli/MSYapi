import React, { useEffect, useState, useRef  } from "react";
import { Box, Typography, Button } from "@mui/material";
import ClassicButton from "../../components/buttons/ClasicButton";
import ContactBox from "../../components/contactBox/ContactBox";
import WebTasarim from "../../components/portfolio/WebTasarim";
import IntroductionVersion2 from "../../components/portfolio/IntroductionVersion2";
import { useNavigate } from "react-router-dom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"; 

const Home = () => {
  const [showScroll, setShowScroll] = useState(false);

  const navigate = useNavigate();

  const videoRef = useRef(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  
  useEffect(() => {
    console.log("Ekran genişliği:", window.innerWidth);
    const checkMobile = () => {
      const mobile = window.matchMedia("(max-width: 850px)").matches;
      console.log("isMobile değeri güncellendi:", mobile);
      setIsMobile(mobile);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
  
    const handleScrollEvent = () => {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("scrollToContact", handleScrollEvent);
  
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scrollToContact", handleScrollEvent);
    };
  }, []);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.pause(); 
    }
  };

  const handleVideoError = () => {
    setVideoFailed(true); 
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
    <div style={{ margin: 0, padding: 0, width: "100%",
      maxWidth: "100vw",  overflowX: "hidden", 
       backgroundColor: "#EFEBE6", }}>
    <div style={{ margin: 0, padding: 0, maxWidth: "100vw", 
                  height: "100vh" ,
                    display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", backgroundColor: "#05151B", }}>
                      <Box
  sx={{
    position: "relative",
    width: "100vw",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f1f5",
    paddingBottom: 0,
    marginBottom: 0,
    overflow: "hidden",
  }}
>
  <img
    src="/home.PNG"
    alt="Background"
    style={{
      width: "100vw",
      height: "100%",
      maxWidth: "none",
      objectFit: "cover",
      objectPosition: "top",
      zIndex: 1,
      transition: "opacity 0.3s ease-in-out",
    }}
  />


                      
                
    </Box>
    <Box
    sx={{
      position: "absolute", // Mutlak konumlandırma
      bottom: 0, // Alt kenara sabitle
      left: "50%", // Ortala
      transform: "translateX(-50%)", // Ortalamayı düzelt
      width: "1200px", // Tam genişlikte
      maxWidth: "100vw",
      height: "50vh", // Ekranın kalan %30'unu kaplasın
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "center",
      
      zIndex: 2, // Videonun üstünde olsun
      paddingBottom: "250px",
    }}
  >
  
  <Typography variant="h1" sx={{  color: "text.primary", marginBottom: 0,  lineHeight: 1 }}>
  Kenan Beyazkılınç
  </Typography>
  <Typography variant="h3" sx={{  color: "text.primary", marginTop: 4,  lineHeight: 1 }}>
  Zarafetin ve Stilin Buluştuğu Adres
  </Typography>
  <Typography variant="body1" sx={{ fontWeight: "bold",textAlign: "right",  marginTop: "50px", color: "text.primary" }}>
  2003’ten beri İstanbul’un kalbinde, <br/>kişisel tarzınızı en iyi şekilde yansıtmanız için buradayız. <br/>Modern teknikler ve ustalıkla, saçınızı sanat eserine dönüştürüyoruz.
  </Typography>
  <Button
    onClick={() => {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }}
    sx={{
      borderRadius: "0", // Tam yuvarlak görünüm
      width: "200px",
      height: "50px",
      marginTop: "40px",
      backgroundColor: "transparent", // Normalde arka plan rengi
      color: "#05151B", // Normalde yazı rengi (primary)
      border: "2px solid #05151B", // Kenarlık rengi
      transition: "all 0.3s ease", // Geçiş efektleri
      "&:hover": {
        backgroundColor: "#9e7a68", // Üzerine gelince arka plan transparan olacak
      //  color: "#EFEBE6", // Yazı rengi secondary olacak
      },
    }}
  >
    RANDEVU AL
  </Button>
</Box>

    </div>



    <Box
  id="about"
  sx={{
    width: "100vw",
    height: { xs: "100%", sm: "100vh" },
    display: "flex",
    flexDirection: "row",
    backgroundColor: "black",
    zIndex: 20,
    position: "relative",
    overflow: "hidden",
  }}
>
<Box
  sx={{
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    
    zIndex: 2,
  }}
>
  <Box
    sx={{
      width: "600px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start", // bu da yazıların sağa yaslanmasını sağlar
    }}
  >
    <Typography
      variant="h3"
      sx={{
        fontSize: "3rem",
        color: "text.secondary",
        marginBottom: 0,
        lineHeight: 1.2,
      
      }}
    >
      22 Yıllık Deneyim, Kusursuz Sanat
    </Typography>

    <Typography
      variant="body1"
      sx={{
        fontSize: "1.2rem",
        fontWeight: 300,
        marginTop: "60px",
        color: "text.secondary",
       
      }}
    >
      Saç kesimi bir sanattır ve biz bu sanatı tutkuyla icra ediyoruz.
    </Typography>

    <Button
      onClick={() => navigate("/about")}
      sx={{
        borderRadius: "0",
        width: "200px",
        height: "50px",
        marginTop: "80px",
        backgroundColor: "transparent",
        color: "#EFEBE6",
        border: "2px solid #EFEBE6",
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: "#9e7a68",
        },
      }}
    >
      HİKAYEMİZİ KEŞFET
    </Button>
  </Box>
</Box>


  {/* SAĞ: Görsel */}
  <Box
    sx={{
      width: "50%",
      height: "100%",
      padding: "0px",
    }}
  >
    <img
      src="/KB_SALON-37.jpg"
      alt="Salon"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
      }}
    />
  </Box>
</Box>





<Box
  id="services"
  sx={{
    width: "100vw",
    height: { xs: "100%", sm: "100vh" },
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "secondary.main",
    zIndex: 20,
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* İçerik Box */}
  <Box
    sx={{
      display: "flex",
      width: "1200px",
      height: "100%",
      maxWidth: "100vw",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "0 auto",
      gap: { xs: "0px", sm: "0px" },
      padding: { xs: "36px 24px", sm: "0rem" },
      position: "relative",
      zIndex: 2,
    }}
  >
    {/* Sağ Tarafa GIF */}
    <Box
  sx={{
    width: "50%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  }}
>
  <video
    src="https://res.cloudinary.com/dfoi520wc/video/upload/v1741289714/MN_KB_V1_l6aq3k.mp4"
    autoPlay
    loop
    muted
    playsInline
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />
</Box>

    {/* Metin İçeriği */}
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        width: "50%",
        maxWidth: "600px",
        paddingLeft: "50px",
        backgroundColor: "transparent",
        position: "relative",
        zIndex: 3,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: "3rem",
          color: "text.primary",
          marginBottom: 0,
          lineHeight: 1.2,
        }}
      >
        Size Özel Dokunuşlar
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontSize: "1rem",
        //  fontWeight: 300,
          textAlign: "left",
          marginTop: "40px",
          color: "text.primary",
          display: "flex",
          flexDirection: "column",
          gap: "12px", // Alt alta boşluk bırakır
        }}
      >
        <span><strong>Kesim & Şekillendirme</strong> – Yüz hatlarınıza ve stilinize uygun modern kesimler</span>
        <span><strong>Renk & Balayage</strong> – Son trend renklendirme teknikleriyle yenilenin</span>
        <span><strong>Bakım & Onarım</strong> – Saçınızın sağlığını ön planda tutan özel bakımlar</span>
        <span><strong>Profesyonel Styling</strong> – Özel günler için kusursuz saç tasarımları</span>
      </Typography>

      <Button
        onClick={() => navigate("/services")}
        sx={{
          borderRadius: "0",
          width: "200px",
          height: "50px",
          marginTop: "80px",
          backgroundColor: "transparent",
          color: "black",
          border: "2px solid black",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "#9e7a68",
          },
        }}
      >
        TÜM HİZMETLERİ GÖR
      </Button>
    </Box>

    
  </Box>
</Box>





      
      






      <Box id="contact-section"
        sx={{
          width: "100%",
          height: { xs: "300px", sm: "700px" },
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
          color: "secondary",
          position: "fixed",
          bottom: "30px",
          right: "130px",
          zIndex: 1000,
          border: "2px solid #9e7a68", // Kenarlık rengi
          backgroundColor: "#9e7a68", 
          "&:hover": { backgroundColor: "transparent", color: "#9e7a68" }, 
          width: "40px", 
          height: "40px", 
          minWidth: "40px",
          borderRadius: "8px", 
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)", 
        }}
      >
        <KeyboardArrowUpIcon fontSize="small" />
      </Button>
      )}
    </div>
  );
};

export default Home;

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

  
    const items = [
      { number: "1", title: "Mühendislik", description: "Yapısal analizler ve modern mühendislik çözümleri ile güvenli yapılar inşa ediyoruz." },
      { number: "2", title: "Restorasyon", description: "Tarihi yapıların özgün dokusunu koruyarak modern tekniklerle restore ediyoruz." },
      { number: "3", title: "Rekonstrüksiyon", description: "Geçmişin izlerini günümüz teknolojisiyle birleştirerek yapıları yeniden hayata kazandırıyoruz." }
    ];
  

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
                          maxWidth: "100vw",
                          height: "70%" ,
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
                          src="https://res.cloudinary.com/dy20zavvv/image/upload/v1738596978/225ae210-b83e-41f3-a05e-685c9a0e75a8_rw_1920_cwsgkt.jpg"
                          alt="Background"
                          style={{
                            paddingBottom: "0px",
                            marginBottom: "0px",
                            width: "100%",
                            maxWidth: "2000px",
                            height:  "100%",
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
                          onError={handleVideoError} 
                          onEnded={() => videoRef.current.play()} 
                          style={{
                            paddingTop: "0px",
                            marginBottom: "0px",
                            width: "100vw",
                            height: "100%",
                            objectFit: "cover",
                            zIndex: 0,
                          }}
                        >
                          <source
                            src="/MS_5.mp4"
                            type="video/mp4"
                          />
                        </video>
                      )}
                
    </Box>
    <Box
    sx={{
      position: "absolute", // Mutlak konumlandırma
      bottom: 0, // Alt kenara sabitle
      left: "50%", // Ortala
      transform: "translateX(-50%)", // Ortalamayı düzelt
      width: "1000px", // Tam genişlikte
      maxWidth: "100vw",
      height: "50vh", // Ekranın kalan %30'unu kaplasın
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      
      zIndex: 2, // Videonun üstünde olsun
      paddingBottom: "200px",
    }}
  >
  <Typography variant="subtitle2" sx={{ fontSize: "0.8rem", fontWeight: "500",  marginBottom: "50px",  textShadow: "3px 3px 4px rgba(0, 0, 0, 0.9)", color: "#E2AD7E"}}>
  Geçmişi Koruyor, Geleceği İnşa Ediyoruz
  </Typography>
  <Typography variant="h1" sx={{ fontWeight: "bold", color: "text.secondary", marginBottom: 0,  textShadow: "3px 3px 4px rgba(0, 0, 0, 0.6)", lineHeight: 1 }}>
    MS YAPI
  </Typography>
  <Typography variant="h4" sx={{ fontWeight: "bold", color: "text.secondary", marginTop: 0,  textShadow: "3px 3px 4px rgba(0, 0, 0, 0.9)", lineHeight: 1 }}>
  Mühendislik-Restorasyon-Rekonstrüksiyon
  </Typography>
  <Typography variant="body1" sx={{ fontSize: "0.9rem", textAlign: "flex-start",  marginTop: "50px", color: "#AFB4B6" }}>
    Tarihi yapıları geleceğe taşırken, modern teknolojilerle <br/>güvenilir, sürdürülebilir ve yenilikçi çözümler sunuyoruz.
  </Typography>
</Box>

    </div>
      
      <Box id="services"
        sx={{
          width: "100%", 
          height: { xs: "100%", sm: "1000px" },
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          backgroundColor: "secondary.main",
          zIndex: 20,
        }}
      >
        <Box
          sx={{
            display: "flex", 
            width: "100%", 
            maxWidth: "1000px", 
            flexDirection: "row", 
            alignItems: "flex-start", 
            justifyContent: "flex-start", 
            margin: "0 auto", 
            gap: { xs: "0px", sm: "24px" },
            padding: { xs: "36px 24px", sm: "0rem" },
          }}
        >
          <Box
          sx={{
            display: "flex", 
            flexDirection: "column", 
            alignItems: "flex-start", 
            width: "100%", 
            maxWidth: "500px", 
            paddingRight: "50px",
          }}
        >
          <Typography variant="subtitle2" sx={{ fontSize: "0.9rem", fontWeight: "500",  marginBottom: "30px", color: "#E2AD7E"}}>
          HİZMETLERİMİZ
  </Typography>
  <Typography variant="h1" sx={{ fontSize: "4rem",fontWeight: "bold", color: "text.primary", marginBottom: 0, lineHeight: 1 }}>
  Neler yapıyoruz?
  </Typography>
  
  <Typography variant="body1" sx={{ fontSize: "1rem", textAlign: "flex-start",  marginTop: "40px", color: "text.primary" }}>
  Geçmişin mirasını koruyarak, modern mühendislik çözümleriyle yapıların geleceğe taşınmasını sağlıyoruz. Restorasyon, mühendislik ve rekonstrüksiyon alanlarında uzman ekibimizle estetik, güvenli ve dayanıklı yapılar inşa ediyoruz.
  </Typography>
        </Box>
        <Box sx={{ maxWidth: "500px", margin: "auto", borderTop: "1px solid #05151B", borderBottom: "1px solid black" }}>
      {items.map((item, index) => (
        <Box key={item.number} sx={{ display: "flex", alignItems: "center", padding: "16px", borderBottom: index < items.length - 1 ? "1px solid black" : "none" }}>
          <Typography variant="h1" sx={{ fontWeight: "bold", minWidth: "40px", color: "text.primary" , margin: 0, paddingBottom: "30px" }}>
            {item.number}
          </Typography>
          <Box sx={{ marginLeft: "40px", gap: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "text.primary", marginBottom: "8px"  }}>
              {item.title}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.primary" }}>
              {item.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
        </Box>
      </Box>


      <Box id="about"
        sx={{
          width: "100%", 
          height: { xs: "100%", sm: "900px" },
          display: 'flex', 
          flexDirection: 'row',
          justifyContent: 'center', 
          alignItems: 'center', 
          backgroundColor: "secondary.main",
          zIndex: 20,
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex", 
            width: "50%", 
            height: "100%",
            maxWidth: "900px", 
            flexDirection: "row", 
            alignItems: "flex-end", 
            justifyContent: "flex-end", 
            margin: "0 auto", 
            gap: { xs: "0px", sm: "24px" },
            padding: { xs: "36px 24px", sm: "0rem" },
            backgroundColor: "background.paper",
          }}
        >
          <Box
          sx={{
            display: "flex", 
            flexDirection: "column", 
            alignItems: "flex-start", 
            justifyContent: "flex-start",
            width: "730px", 
            height: "500px",
            maxWidth: "730px", 
            marginRight: "-180px",
            marginBottom: "300px",
            zIndex: 50,
            backgroundColor: "background.default",
            padding: "50px",
          }}
        >
          <Typography variant="subtitle2" sx={{ fontSize: "0.9rem", fontWeight: "500", marginTop: "6px", marginBottom: "15px", color: "#E2AD7E"}}>
          HAKKIMIZDA
  </Typography>
  <Typography variant="h1" sx={{ fontSize: "4rem",fontWeight: "bold", color: "text.primary", marginBottom: 0, lineHeight: 1.2 }}>
  
Geçmişi Koruyor, Geleceği İnşa Ediyoruz
  </Typography>
  
  <Typography variant="body1" sx={{ fontSize: "1rem", fontWeight: 300, textAlign: "flex-start",  marginTop: "30px", color: "text.primary" }}>
  10 yıllık restorasyon tecrübemizle, alanında uzman ekibimizle tarihi dokulara yeniden hayat veriyoruz. Geleneksel mimariye saygılı, sürdürülebilir ve estetik çözümler üreterek projelerimizi titizlikle hayata geçiriyoruz.  
  </Typography>

<Button
    onClick={() => navigate("/about")}
    sx={{
      borderRadius: "50px", // Tam yuvarlak görünüm
      width: "200px",
      height: "50px",
      marginTop: "40px",
      backgroundColor: "transparent", // Normalde arka plan rengi
      color: "#05151B", // Normalde yazı rengi (primary)
      border: "1px solid #E2AD7E", // Kenarlık rengi
      transition: "all 0.3s ease", // Geçiş efektleri
      "&:hover": {
        backgroundColor: "#E2AD7E", // Üzerine gelince arka plan transparan olacak
      //  color: "#EFEBE6", // Yazı rengi secondary olacak
      },
    }}
  >
    DAHA FAZLA
  </Button>
        </Box>
        </Box>


        <Box
          sx={{
            display: "flex", 
            width: "50%", 
            height: "100%",
            maxWidth: "900px", 
            flexDirection: "row", 
            alignItems: "flex-start", 
            justifyContent: "flex-start", 
            margin: "0 auto", 
            gap: { xs: "0px", sm: "24px" },
            padding: { xs: "36px 24px", sm: "0rem" },
          }}
        >
          {isMobile || videoFailed ? (
                        <img
                          src="https://res.cloudinary.com/dy20zavvv/image/upload/v1738596978/225ae210-b83e-41f3-a05e-685c9a0e75a8_rw_1920_cwsgkt.jpg"
                          alt="Background"
                          style={{
                            paddingBottom: "0px",
                            marginBottom: "0px",
                            width: "100%",
                            maxWidth: "2000px",
                            height:  "100%",
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
                          onError={handleVideoError} 
                          onEnded={() => videoRef.current.play()} 
                          style={{
                            paddingTop: "0px",
                            marginBottom: "0px",
                            width: "100vw",
                            height: "100%",
                            objectFit: "cover",
                            zIndex: 0,
                          }}
                        >
                          <source
                            src="/MS_6.mp4"
                            type="video/mp4"
                          />
                        </video>
                      )}
          
        </Box>
      </Box>





      <Box
        sx={{
          width: "100%",
        }}
      >
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <WebTasarim />
        </div>
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
          border: "2px solid #E2AD7E", // Kenarlık rengi
          backgroundColor: "#E2AD7E", 
          "&:hover": { backgroundColor: "transparent", color: "#E2AD7E" }, 
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

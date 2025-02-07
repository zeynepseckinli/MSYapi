import React, { useEffect, useState, useRef  } from "react";
import { Box, Typography, Button } from "@mui/material";
import ClassicButton from "../../components/buttons/ClasicButton";
import ContactBox from "../../components/contactBox/ContactBox";
import Introduction from "../../components/portfolio/Introduction";
import IntroductionVersion2 from "../../components/portfolio/IntroductionVersion2";
import { useNavigate } from "react-router-dom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"; 

const Home = () => {
  const [showScroll, setShowScroll] = useState(false);

  const [showImage, setShowImage] = useState(false);
  const [showImageProfil, setShowImageProfil] = useState(false);
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
       backgroundColor: "#EDEFF3", }}>
    <div style={{ margin: 0, padding: 0,  display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#EDEFF3", }}>
      <Box
        sx={{
          position: "relative", 
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#EDEFF3",
          height: { xs: "500px", sm: "800px" },
          paddingBottom: "0px",
          marginBottom: "0px",
          overflow: "hidden", 
          borderRight: "15px solid #EDEFF3", 
        }}
      >
        {isMobile || videoFailed ? (
        <img
          src="/3.jpg"
          alt="Background"
          style={{
            paddingBottom: "0px",
            marginBottom: "0px",
            width: { xs: "100%", sm: "1200px" },
            height: { xs: "500px", sm: "800px" },
            objectFit: "cover",
            objectPosition: "center bottom", 
            transform: "scale(0.7)", 
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
          onEnded={handleVideoEnd} 
          onError={handleVideoError}
          style={{
            paddingTop: "0px",
            marginBottom: "0px",
            width: { xs: "100%", sm: "1200px" },
            height: "800px",
            objectFit: "contain",
            zIndex: 0,
            outline: "none",
          }}
        >
          <source
            src="https://res.cloudinary.com/dy20zavvv/video/upload/v1738307113/hikayenin_devam%C4%B1_i%C3%A7in_6_zobc4r.mp4"
            type="video/mp4"
          />
        </video>
      )}

        {showImage && (
          <img
            src="/4.jpg"
            alt="Background"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: { xs: "100%", sm: "1200px" },
              height: "800px",
              objectFit: "cover",
              zIndex: 1,
              transition: "opacity 0.3s ease-in-out",
            }}
          />
        )}

        {showImageProfil && (
          <img
            src="/5.jpg"
            alt="Background"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: { xs: "100%", sm: "1200px" },
              height: "800px",
              objectFit: "cover",
              zIndex: 1,
              transition: "opacity 0.3s ease-in-out",
            }}
          />
        )}

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", 
            width: "100%",
            maxWidth: "1200px",
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            alignItems: "flex-start",
            zIndex: 2,
          }}
        >
          <ClassicButton
            sx={{  width: "200px", marginTop: "500px" }}
            text="Hakkımızda"
            onMouseEnter={() => setShowImageProfil(true)}
            onMouseLeave={() => setShowImageProfil(false)}
            onClick={() => navigate("/about")}

          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", 
            width: "100%",
            maxWidth: "1200px",
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            alignItems: "flex-end",
            zIndex: 2,
          }}
        >
          <ClassicButton
            sx={{marginBottom: "200px",width: "200px", }}
            text="Portfolyo"
            onMouseEnter={() => setShowImage(true)}
            onMouseLeave={() => setShowImage(false)}
            onClick={() => navigate("/portfolio")}
          />
        </Box>
      </Box>
      </div>
      
      <Box id="services"
        sx={{
          width: "100%", 
          height: { xs: "100%", sm: "600px" },
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
            maxWidth: "1200px", 
            flexDirection: "column", 
            alignItems: "flex-start", 
            justifyContent: "center", 
            margin: "0 auto", 
            gap: "24px", 
            padding: { xs: "36px 24px", sm: "0rem" },
          }}
        >
          <Box
          sx={{
            display: "flex", 
            flexDirection: "column", 
            alignItems: "flex-start", 
            gap: "24px", 
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
            Nasıl yardımcı olabiliriz?
          </Typography>
        </Box>
        <Box 
            sx={{
              display: "flex", 
              width: "100%",
              maxWidth: "1200px",
              flexDirection: { xs: "column", sm: "row" }, 
              alignItems: "center", 
              justifyContent: "center", 
              gap: "40px", 
              padding: "20px 0px", 
            }}
          >
            {[
              {
                title: "Fotoğraf ve Video Prodüksiyon",
                description: "Etkinlikleriniz, reklam ve tanıtım içerikleriniz, özel günleriniz… Kısacası, kaydetmek ve kitlelere ulaştırmak istediğiniz her an için buradayız!",
              },
              {
                title: "Sosyal Medya",
                description: "Strateji geliştirmeden kullanıcı analizine, içerik üretiminden sosyal medya yönetimine kadar tüm ihtiyaçlarınız için birlikte çalışmaya hazırız!",
              },
              {
                title: "PR & Marketing",
                description: "Markanızı hem dijitalde hem de gerçek dünyada daha görünür hale getirmek ve doğru kitlelere ulaştırmak için buradayız!",
              },
              {
                title: "Web Tasarım",
                description: "Kişisel veya kurumsal kimliğinizi dijital dünyada yansıtan web sitelerinizi, size özel tasarlıyor ve hayata geçiriyoruz!",
              },
            ].map((card, index) => (
              <Box
                key={index}
                sx={{
                  width: "350px", 
                  height: "350px", 
                  backgroundColor: "background.default",
                  borderRadius: "16px", 
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
                  overflow: "hidden", 
                  display: "flex", 
                  flexDirection: "column", 
                  padding: "0px 10px",
                }}
              >
                <Box
                  sx={{
                    padding: "16px", 
                    display: "flex",
                    flexDirection: "column", 
                    gap: "25px", 
                  }}
                >
                  <Box
                    sx={{
                      height: "90px", 
                      display: "flex",
                      alignItems: "center", 
                      justifyContent: "center", 
                      textAlign: "center", 
                      borderBottom: "2px solid #10375C", 

                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: "text.primary",
                      }}
                    >
                      {card.title}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.primary",
                      textAlign: "left",
                    }}
                  >
                    {card.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
        }}
      >
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <IntroductionVersion2 />
        </div>
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
          backgroundColor: "#10375C", 
          "&:hover": { backgroundColor: "#0d2a46" }, 
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

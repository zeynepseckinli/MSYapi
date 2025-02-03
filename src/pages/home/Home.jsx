import React, { useEffect, useState, useRef  } from "react";
import { Box, Typography, Button } from "@mui/material";
import ClassicButton from "../../components/buttons/ClasicButton";
import ContactBox from "../../components/contactBox/ContactBox";
import Introduction from "../../components/portfolio/Introduction";
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
    // Mobil cihaz olup olmadığını kontrol eden fonksiyon
    console.log("Ekran genişliği:", window.innerWidth);

    const checkMobile = () => {
      const mobile = window.matchMedia("(max-width: 850px)").matches;
      console.log("isMobile değeri güncellendi:", mobile);
      setIsMobile(mobile);
    };
    
  
    checkMobile();
    window.addEventListener("resize", checkMobile);
  
    // Özel scroll event'i için fonksiyon
    const handleScrollEvent = () => {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    window.addEventListener("scrollToContact", handleScrollEvent);
  
    // Cleanup function
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scrollToContact", handleScrollEvent);
    };
  }, []);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // Video bitince durdur
    }
  };

  const handleVideoError = () => {
    setVideoFailed(true); // Video yüklenemezse img göster
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
    <div style={{ margin: 0, padding: 0, width: "100vw", // Ekran genişliği kadar sınırla
      maxWidth: "100vw",  overflowX: "hidden", 
      // Aşırı genişlemeyi önle
       backgroundColor: "secondary", }}>
    <div style={{ margin: 0, padding: 0, height: "800px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#EDEFF3", }}>
      <Box
        sx={{
          position: "relative", // Mutlaka relative olsun
          width: "100%",
          maxWidth: "1200px",
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
            width: { xs: "100%", sm: "1200px" },
            height: "800px",
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
          onEnded={handleVideoEnd} // Video bitince durdur
          onError={handleVideoError} // Video yüklenemezse img göster
          style={{
            paddingTop: "0px",
            marginBottom: "0px",
            width: { xs: "100%", sm: "1200px" },
            height: "800px",
            objectFit: "contain",
            zIndex: 0,
          }}
        >
          <source
            src="https://res.cloudinary.com/dy20zavvv/video/upload/v1738307113/hikayenin_devam%C4%B1_i%C3%A7in_6_zobc4r.mp4"
            type="video/mp4"
          />
        </video>
      )}

        {/* Hover ile Görünen Arka Plan Resmi */}
        {showImage && (
          <img
            src="/1b.png"
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
            src="/2b.png"
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

        {/* İçerik (Butonlar vb.) */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // Ortalamayı garanti eder
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
            transform: "translate(-50%, -50%)", // Ortalamayı garanti eder
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
      

      {/* İkinci Box */}
      <Box id="services"
        sx={{
          width: "100%", // Sayfanın tamamını kapla (genişlik)
          height: { xs: "100%", sm: "600px" }, // Tam ekran yüksekliği
          display: 'flex', // İçeriği yerleştirmek için flex kullan
          justifyContent: 'center', // Sol tarafa hizala
          alignItems: 'center', // Dikeyde ortalamak için center
          backgroundColor: "secondary.main",
        }}
      >
        {/* Yazı */}
        <Box
          sx={{
            display: "flex", // Flexbox kullan
            width: "100%", // Sayfanın tamamını kapla (genişlik)
            maxWidth: "1200px", // İçeriğin genişliği
            flexDirection: "column", // Elemanları dikey hizala
            alignItems: "flex-start", // Yatayda ortala
            justifyContent: "center", // Dikeyde ortala
            margin: "0 auto", // Tüm Box'ı ortalamak için margin ayarı
            gap: "24px", // Yazılar arasında boşluk
            padding: { xs: "36px 24px", sm: "0rem" },
          }}
        >
          <Box
          sx={{
            display: "flex", // Flexbox kullan
            flexDirection: "column", // Elemanları dikey hizala
            alignItems: "flex-start", // Sol tarafa hizala
            gap: "24px", // Yazılar arasında boşluk
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "text.primary",
              fontWeight: 500,
              fontSize: { xs: "2.5rem", sm: "3rem" }, // Burada fontSize'ı responsive hale getirebilirsiniz
            }}
          >
            Nasıl yardımcı olabiliriz?
          </Typography>
        
          
        </Box>
        <Box 
            sx={{
              display: "flex", // Flexbox kullan
              width: "100%",
              maxWidth: "1200px",
              flexDirection: { xs: "column", sm: "row" }, // Elemanları yatay sırala
              alignItems: "center", // Dikeyde hizala
              justifyContent: "center", // Elemanlar arasındaki boşluğu ayarla
              gap: "40px", // Elemanlar arasındaki boşluk
              padding: "20px 0px", // Dış boşluk
            }}
          >
            {/* Kartlar */}
            {[
              {
                title: "Fotoğraf ve Video Produksiyon",
                description: "Tüm etkinlikleriniz, reklam ve tanıtım içerikleriniz veya özel günleriniz kısacası kayıt altına almak ve kitlelere ulaştırmak istediğiniz tüm anlar için burdayız.",
                image: 'url(/foto2.jpg)', // Örnek resim
              },
              {
                title: "Sosyal Medya",
                description: "Strateji geliştirmeden kullanıcı analizine, içerik üretiminden sosyal medyaya kadar tüm ihtiyaçlarınız için birlikte çalışabiliriz.",
                image: 'url(/foto2.jpg)',
              },
              {
                title: "PR & Marketing",
                description:
                  "Markanızın, hem sanal dünyada hem de gerçek dünyada bilinirliğini artırmak ve doğru kullanıcılara ulaşmasını sağlamak için hazırız.",
                image: 'url(/foto2.jpg)',
              },
              {
                title: "Web Tasarım",
                description:
                  "Kişisel ve kurumsal kimliğinizi sanal dünyada temsil eden web sitelerinizi, size özel olarak tasarlamak ve üretmek için yanınızdayız.",
                image: 'url(/foto2.jpg)',
              },
            ].map((card, index) => (
              <Box
                key={index}
                sx={{
                  width: "350px", // Kart genişliği
                  height: "350px", // Kart yüksekliği
                  backgroundColor: "background.default", // Arkaplan rengi
                  borderRadius: "16px", // Köşeleri yuvarla
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Hafif gölge
                  overflow: "hidden", // Taşan içerikleri gizle
                  display: "flex", // Flexbox
                  flexDirection: "column", // Dikey hizala
                  padding: "0px 10px",

                }}
              >
                
                <Box
                  sx={{
                    padding: "16px", // İçerik için boşluk
                    display: "flex",
                    flexDirection: "column", // Dikey hizala
                    gap: "25px", // Başlık ve açıklama arasında boşluk
                  }}
                >
                  <Box
                    sx={{
                      height: "90px", // Sabit yükseklik (2 satır için yeterli)
                      display: "flex",
                      alignItems: "center", // Dikeyde ortalama
                      justifyContent: "center", // Yatayda ortalama
                      textAlign: "center", // Metni ortala
                      borderBottom: "2px solid #10375C", // Yatay çizgi ekleme

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

                  {/* Açıklama Metni */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.primary",
                      textAlign: "left", // Açıklamayı sola yasla
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

      {/* Üçüncü Box */}
      <Box
        sx={{
          width: "100%",
        }}
      >
              <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
              <Introduction />
    </div>
    </Box>



      

      {/* Beşinci Box */}
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

export default Home;

import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ContactBox from "../../components/contactBox/ContactBox";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Portfolio = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 850px)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        overflowX: "hidden",
        width: "100%",
        maxWidth: "100vw",
        display: "flex",
        flexDirection: "column", 
        minHeight: "100vh", 
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh", 
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#EDEFF3",
          position: "relative",
          backgroundImage: "url('/honey-stick.PNG')",
          backgroundSize: { xs: "80% auto", sm: "40% auto" },
          backgroundPosition: "top right", 
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            minHeight: "100vh", 
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            textAlign: "flext-start",
            padding: { xs: "24px", sm: "100px" },
            position: "relative", 
          }}
        >
          <Typography 
          variant="h3"
          sx={{
            color: "text.primary",
            fontWeight: 500,
            fontSize: { xs: "2.5rem", sm: "3rem" }, 
            mb: 5,
            mt:{ xs: 15, sm: 5 },
          }}>
            Selam! Burası Studio Bal 
          </Typography>
          <Typography 
          variant="body3"
          sx={{ 
            color: "text.primary",
            fontWeight: 400,
            fontSize: { xs: "1rem", sm: "1rem" }, 
            mb: 1,
          }}>
            Studio Bal, genç, enerjik ve yaratıcı fikirlerin buluştuğu bir alan.
          </Typography>
          <Typography 
          variant="body3"
          sx={{ 
            color: "text.primary",
            fontWeight: 400,
            fontSize: { xs: "1rem", sm: "1rem" }, 
            mb: 1,
          }}>
            Bir markadan öte, çok ortaklı bir dükkân ve aynı zamanda bir ortak çalışma alanı. 🙂
          </Typography>
          <Typography 
            variant="body3"
            sx={{ 
              color: "text.primary",
              fontWeight: 400,
              fontSize: { xs: "1rem", sm: "1rem" }, 
              mb: 1,
            }}
          >
            Bal’da projelerinizin ihtiyaçlarına göre şekillenen ekipler oluşturuyoruz ve içerik üretimi, 
            <Box component="span" sx={{ display: { xs: "inline", sm: "block" }, marginTop: { xs:0, sm: 1} }}>
              fotoğraf & video prodüksiyon, sosyal medya yönetimi ve web tasarımı gibi alanlarda hizmet veriyoruz.
            </Box>
          </Typography>



          <Typography 
          variant="h6" 
          sx={{ 
            color: "text.primary",
            fontWeight: 500,
            fontSize: { xs: "1.5rem", sm: "2rem" }, 
            mt: 3,
            mb: 3,
          }}>
            Biraz da sohbet edelim!
          </Typography>
          <Typography 
          variant="body3"
          sx={{ 
            color: "text.primary",
            fontWeight: 400,
            fontSize: { xs: "1rem", sm: "1rem" }, 
            mb: 1,
          }}>
            Ben Berkay, ekibin daimi üyesiyim. Genelde bana Berkuş derler. 🐥 
          </Typography>
          <Typography 
          variant="body3"
          sx={{ 
            color: "text.primary",
            fontWeight: 400,
            fontSize: { xs: "1rem", sm: "1rem" }, 
            mb: 1,
          }}>
            Aslında mimarım, ahaha! İki yıl boyunca mimarlık yaptım ama ilk makinemi aldıktan sonra işler değişti. 
          </Typography>
          <Typography 
          variant="body3"
          sx={{ 
            color: "text.primary",
            fontWeight: 400,
            fontSize: { xs: "1rem", sm: "1rem" }, 
            mb: 1,
          }}>
            Fotoğraf çekmeye ilk kez 14-15 yaşlarındayken, spor kulüplerinin ödünç ekipmanlarıyla başladım. 
          </Typography>
          <Typography 
          variant="body3"
          sx={{ 
            color: "text.primary",
            fontWeight: 400,
            fontSize: { xs: "1rem", sm: "1rem" }, 
            mb: 1,
          }}>
            Peki ya ilk kendi makinem? Benden en az iki kat yaşlı, analog bir makineydi. 
          </Typography>
          <Typography 
          variant="body3"
          sx={{ 
            color: "text.primary",
            fontWeight: 400,
            fontSize: { xs: "1rem", sm: "1rem" }, 
            mb: 1,
          }}>
            Sonrasında, ilk fırsatta bir dijital makine aldım, sonra bir tane daha… ve kendimi dans partilerinde çekim yaparken buldum!
          </Typography>
          <Typography 
          variant="body3"
          sx={{ 
            color: "text.primary",
            fontWeight: 400,
            fontSize: { xs: "1rem", sm: "1rem" }, 
            mb: 1,
          }}>
            Bir noktada fark ettim ki güzel anları yakalamak, mimarlıktan daha fazla heyecan veriyor. İşte o yüzden şimdi buradayım!          
          </Typography>
          <Typography 
          variant="body3"
          sx={{ 
            color: "text.primary",
            fontWeight: 400,
            fontSize: { xs: "1rem", sm: "1rem" }, 
            mb: 1,
          }}>
            Bazen ekibimle, bazen tek başıma, <strong>Studio Bal</strong> olarak sizinle hayaller kuruyor, projeler üretiyor ve bunları kaydediyoruz.          
          </Typography>
          <Typography 
          variant="body3"
          sx={{ 
            color: "text.primary",
            fontWeight: 400,
            fontSize: { xs: "1rem", sm: "1rem" }, 
            mb: { xs: 5, sm: 0 },
          }}>
            Tanıştığımıza memnun oldum! Umarım birlikte harika işler yaparız. 💛
          </Typography>
        </Box>
      </Box>

      <Box
        id="contact-section"
        sx={{
          width: "100%",
          backgroundColor: "#f8f9fa",
          padding: "0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ContactBox />
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

export default Portfolio;

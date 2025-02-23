import React, { useEffect, useState } from "react";
import { Box, Typography, List, Button, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import ContactBox from "../../components/contactBox/ContactBox";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


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
    minWidth: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EDEFF3",
    position: "relative",
    backgroundImage: "url('/122.jpg')",
    backgroundSize: "cover", // Resmi oranlarını bozmadan sığdırır
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center", // Ortaya hizalar
    height: "500px", // Sabit 500px yükseklik
        }}
      >
        <Box sx={{
      width: "100%",
      maxWidth: "1200px",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      textAlign: "left",
      padding: { xs: "24px", sm: "100px" },
      position: "relative",
    }}>
      <Typography variant="h1" sx={{ fontSize: "4rem",fontWeight: "bold", color: "text.primary", marginBottom: 0, lineHeight: 1 }}>
      Geçmişi Koruyor, Geleceği İnşa Ediyoruz
        </Typography>
      
      </Box>
      
    </Box>
    <Box
        sx={{
          width: "100%",
    minWidth: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EDEFF3",
    position: "relative",
    
  //  height: "500px", // Sabit 500px yükseklik
        }}
      >
        <Box sx={{
      width: "100%",
      maxWidth: "1200px",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      textAlign: "left",
      padding: { xs: "24px", sm: "100px" },
      position: "relative",
    }}>
      
      <Typography variant="body1" paragraph>
        Konya’da faaliyet gösteren MS Yapı tarihi ve kültürel mirasımızı koruma tutkusuyla restorasyon, rekonstrüksiyon ve güçlendirme alanlarında uzmanlaşmış bir mühendislik firmasıdır. 
        Tarihi yapıları geleceğe taşırken, modern teknolojilerle yenilikçi çözümler sunuyoruz.
      </Typography>
      
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#10375C", mt: 4 }}>
        Kimiz?
      </Typography>
      <Typography variant="body1" paragraph>
        10 yıllık restorasyon tecrübemizle, alanında uzman ekibimizle tarihi dokulara yeniden hayat veriyoruz. Geleneksel mimariye saygılı, sürdürülebilir ve estetik çözümler üreterek projelerimizi titizlikle hayata geçiriyoruz.
      </Typography>
      
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#10375C", mt: 4 }}>
        Ne Yapıyoruz?
      </Typography>
      <List>
        {["Restorasyon – Tescilli yapıların aslına uygun şekilde korunması ve yeniden işlevlendirilmesi",
          "Rekonstrüksiyon – Kaybolmuş ya da zarar görmüş tarihi yapıların bilimsel verilerle yeniden inşası",
          "Güçlendirme – Tarihi yapıların statik dayanıklılığını artırarak uzun ömürlü hale getirilmesi",
          "Danışmanlık & Proje Yönetimi – Restorasyon sürecinin her aşamasında uzman rehberlik ve teknik destek"]
          .map((item, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#10375C" }} />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
      </List>
      
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#10375C", mt: 4 }}>
        Misyonumuz
      </Typography>
      <Typography variant="body1" paragraph>
        Kültürel mirasımızı geleceğe taşırken, kaliteli ve güvenilir hizmet anlayışımızla, projelerimizde estetik ve işlevselliği bir araya getirmek.
      </Typography>
      
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#10375C", mt: 4 }}>
        Vizyonumuz
      </Typography>
      <Typography variant="body1" paragraph>
        Türkiye’nin önde gelen restorasyon ve mühendislik firmalarından biri olarak, yenilikçi teknolojilerle tarihi yapıları modern dünyaya uyarlamak ve sektörde sürdürülebilir çözümlerle fark yaratmak.
      </Typography>
      
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#10375C", mt: 4 }}>
        Neden Biz?
      </Typography>
      <List>
        {["Uzman Kadro – Restorasyon, mühendislik ve mimarlık alanlarında deneyimli profesyoneller",
          "Teknolojik Yaklaşım – Yapı analizleri ve mühendislik çözümlerinde en son teknolojiler",
          "Kurul Onaylı Projeler – Resmi kurumlardan onaylı ve belgeli restorasyon süreçleri",
          "Kalite & Güven – Tüm projelerde titizlikle uygulanan yüksek kalite standartları"]
          .map((item, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#10375C" }} />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
      </List>
      
      <Typography variant="body1" paragraph sx={{ mt: 4, fontWeight: "bold", color: "#10375C" }}>
        Gelenek ile geleceği buluşturan projelerimizle, kültürel mirasın korunmasına katkı sağlamaya devam ediyoruz. Siz de bizimle bu yolculuğa katılın!
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

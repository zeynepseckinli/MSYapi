import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Fade , List, Button, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import ContactBox from "../../components/contactBox/ContactBox";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { textAlign, width } from "@mui/system";


const Services = () => {
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
      {/* Hizmetler Bölümü */}
      <Box
  sx={{
    width: "100%",
    height: "600px",
    display: "flex",
  }}
>
  {/* Sol Taraf (İçerik) */}
  <Box
    sx={{
      width: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-end",
    //  padding: "100px",
      backgroundColor: "#8C96A0",
      paddingTop: "80px",
    }}
  >
    <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", paddingBottom: "80px", width: "600px" }}>
      SAÇ İŞLEMLERİ
    </Typography>
    <Grid container spacing={0} sx={{ width: "600px" }} >
      <Grid item xs={5}>
        {[
          "Fön",
          "Botox",
          "Kesim",
          "Topuz",
          "Maşa",
          "Dip Boya",
          "Boya Değişim",
          "Röfle",
          "Cila",
          "Ombre",
        ].map((item, index) => (
          <Typography key={index} variant="body2" sx={{ marginBottom: "4px" }}>
            {item}
          </Typography>
        ))}
      </Grid>
      <Grid item xs={7}>
        {[
          "Koruyucu Bakım",
          "Geçiş Renklendirme",
          "Sombre",
          "Pigmentasyon",
          "Keratin Bakım",
          "Komple Boya",
          "Perma",
          "Transparan Boya",
          "Dip Açma Boyama",
          "Organik Boya",
          "Mikro Kaynak",
        ].map((item, index) => (
          <Typography key={index} variant="body2" sx={{ marginBottom: "4px" }}>
            {item}
          </Typography>
        ))}
      </Grid>
    </Grid>
  </Box>

  {/* Sağ Taraf (Fotoğraf) */}
  <Box
    sx={{
      width: "50%",
      backgroundImage: 'url("/sac.JPG")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
</Box>

<Box
  sx={{
    width: "100%",
    height: "600px",
    display: "flex",
  }}
>
  {/* Sağ Taraf (Fotoğraf) */}
  <Box
    sx={{
      width: "50%",
      backgroundImage: 'url("/makyaj.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
  {/* Sol Taraf (İçerik) */}
  <Box
    sx={{
      width: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      backgroundColor: "#D2C8BF",
      paddingLeft: "100px",
    }}
  >
    <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", paddingBottom: "80px", width: "600px" }}>
    MAKYAJ
    </Typography>
    <Grid container spacing={0} sx={{ width: "600px" }} >
      <Grid item xs={5}>
        {[
          "Günlük Makyaj",

          "Gece Makyajı",
          
          "Kalıcı Makyaj" ,
          
          "Dudak Gençleştirme",
          
          "Takma Kirpik",
          
          "İpek Kirpik",
          
          "Lifting",
          
          "Kirpik Boyama",
          
          "Kaş Vitamini",
        ].map((item, index) => (
          <Typography key={index} variant="body2" sx={{ marginBottom: "4px" }}>
            {item}
          </Typography>
        ))}
      </Grid>
      
    </Grid>
  </Box>

  
</Box>


<Box
  sx={{
    width: "100%",
    height: "600px",
    display: "flex",
  }}
>
  {/* Sol Taraf (İçerik) */}
  <Box
    sx={{
      width: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-end",
      backgroundColor: "#8C96A0",
    }}
  >
    <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", paddingBottom: "80px", width: "600px" }}>
    MANİKÜR & BAKIM
    </Typography>
    <Grid container spacing={0} sx={{ width: "600px" }} >
      <Grid item xs={5}>
        {[
          "Manikür",

          "Pedikür",
          
          "Kaş Alma",
          
          "Kalıcı Oje" ,
          
          "Üst Dudak Alımı",
          
          "Kaş + Dudak Üstü",
          
          "Komple Yüz Alımı",
        ].map((item, index) => (
          <Typography key={index} variant="body2" sx={{ marginBottom: "4px" }}>
            {item}
          </Typography>
        ))}
      </Grid>
    </Grid>
  </Box>

  {/* Sağ Taraf (Fotoğraf) */}
  <Box
    sx={{
      width: "50%",
      backgroundImage: 'url("/tirnak.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
</Box>

<Box
  sx={{
    width: "100%",
    height: "600px",
    display: "flex",
  }}
>
  {/* Sağ Taraf (Fotoğraf) */}
  <Box
    sx={{
      width: "50%",
      backgroundImage: 'url("/gelin.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
  {/* Sol Taraf (İçerik) */}
  <Box
    sx={{
      width: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      backgroundColor: "#D2C8BF",
      paddingLeft: "100px",
    }}
  >
    <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", paddingBottom: "80px", width: "600px" }}>
    GELİN PAKETLERİ
    </Typography>
    <Grid container spacing={0} sx={{ width: "600px" }} >
      <Grid item xs={5}>
        {[
          "Gelin Saç & Makyaj",

          "Nişan Saç & Makyaj",
          
          "Kına Saç & Makyaj",
          
          "Gelin Dış Çekim (Saç & Makyaj)",
        ].map((item, index) => (
          <Typography key={index} variant="body2" sx={{ marginBottom: "4px" }}>
            {item}
          </Typography>
        ))}
      </Grid>
      
    </Grid>
  </Box>

  
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
            backgroundColor: "#9e7a68",
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

export default Services;

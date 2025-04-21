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
    width: "100vw",
    height: { xs: "100vh", sm: "800px" },
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    marginTop: { xs: "80px", sm: "0" },
    position: "relative",
    overflow: "hidden",
  }}
>
<Box
    sx={{
      width: { xs: "100%", sm: "50%" },
      height: { xs: "50%", sm: "100%" },
      backgroundImage: 'url("/sac2.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: { xs: "flex", sm: "none" },
    }}
  />
  {/* Sol Taraf (İçerik) */}
  <Box
    sx={{
      width: { xs: "100%", sm: "50%" },
      height: { xs: "50%", sm: "100%" },
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-end",
    //  padding: "100px",
      backgroundColor: "black",
      paddingTop: { xs: "30px", sm: "80px" },
      padding: { xs: "30px", sm: "0" },
    }}
  >
    <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "2rem", sm: "3rem" },
                color: "white",
                marginBottom: 0,
                lineHeight: 1.2,
                paddingBottom: { xs: "20px", sm: "40px" },
                width: { xs: "100%", sm: "600px" },
              }}
            >
              Saç İşlemleri
            </Typography>
    <Grid container spacing={0} sx={{ width: { xs: "100%", sm: "600px" }, }} >
      <Grid item xs={5}>
        {[
          "Fön",
          "Kesim",
          "Topuz",
          "Maşa",
          "Örgü",
          "Perma",
          "Koruyucu Bakım",
          "Keratin Bakım",
          "Mikro Kaynak",
          
        ].map((item, index) => (
          <Typography key={index} variant="body1" sx={{ marginBottom: "4px", color: "white" }}>
            {item}
          </Typography>
        ))}
      </Grid>
      <Grid item xs={7}>
        {[
          "Dip Boya",
          "Boya Değişim",
          "Röfle",
          "Cila",
          "Ombre",
          "Geçiş Renklendirme",
          "Pigmentasyon",
          "Dip Açma Boyama",
          "Organik Boya",
        ].map((item, index) => (
          <Typography key={index} variant="body1" sx={{ marginBottom: "4px", color: "white"  }}>
            {item}
          </Typography>
        ))}
      </Grid>
    </Grid>
  </Box>

  {/* Sağ Taraf (Fotoğraf) */}
  <Box
    sx={{
      width: { xs: "100%", sm: "50%" },
      height: { xs: "50%", sm: "100%" },
      backgroundImage: 'url("/sac2.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: { xs: "none", sm: "flex" },
    }}
  />
</Box>



<Box
  sx={{
    width: "100%",
    height: { xs: "100vh", sm: "700px" },
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* Sağ Taraf (Fotoğraf) */}
  <Box
    sx={{
      width: { xs: "100%", sm: "50%" },
      height: { xs: "50%", sm: "100%" },
      
      backgroundImage: 'url("/gelin3.JPG")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
  {/* Sol Taraf (İçerik) */}
  <Box
    sx={{
      width: { xs: "100%", sm: "50%" },
      height: { xs: "50%", sm: "100%" },
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      backgroundColor: "white",
      paddingLeft: { xs: "30px", sm: "100px" },
    }}
  >
    <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "2rem", sm: "3rem" },
                color: "black",
                marginBottom: 0,
                lineHeight: 1.2,
                paddingBottom: "40px",
                width: "600px",
              }}
            >
              Gelin Paketleri
            </Typography>
    
    <Grid container spacing={0} sx={{ width: "600px" }} >
      <Grid item xs={5}>
        {[
          "Gelin Saç & Makyaj",

          "Nişan Saç & Makyaj",
          
          "Gelin Dış Çekim (Saç & Makyaj)",

          "Nişan Dış Çekim (Saç & Makyaj)",
        ].map((item, index) => (
          <Typography key={index} variant="body1" sx={{ marginBottom: "4px" }}>
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
    height: { xs: "100vh", sm: "700px" },
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    position: "relative",
    overflow: "hidden",
  }}
>

<Box
    sx={{
      width: { xs: "100%", sm: "50%" },
      height: { xs: "50%", sm: "100%" },
      backgroundImage: 'url("/makyaj3.JPG")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: { xs: "flex", sm: "none" },
    }}
  />
  
  {/* Sol Taraf (İçerik) */}
  <Box
    sx={{
      width: { xs: "100%", sm: "50%" },
      height: { xs: "50%", sm: "100%" },
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-end",
      backgroundColor: "black",
      padding: { xs: "30px", sm: "0" },
    }}
  >
    <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "2rem", sm: "3rem" },
                color: "white",
                marginBottom: 0,
                lineHeight: 1.2,
                paddingBottom:  { xs: "20px", sm: "40px" },
                width: { xs: "100%", sm: "600px" },
              }}
            >
              Makyaj
            </Typography>
    
    <Grid container spacing={0} sx={{ width:{ xs: "100%", sm: "600px" }, }} >
      <Grid item xs={5}>
        {[
          "Günlük Makyaj",

          "Gece Makyajı",
          
          "Kalıcı Makyaj" ,
          
          "Göz Makyajı",
          
          "Takma Kirpik",
          
          "İpek Kirpik",
          
          "Lifting",
          
          "Kirpik Boyama",
          
        ].map((item, index) => (
          <Typography key={index} variant="body1" sx={{ marginBottom: "4px", color: "white" }}>
            {item}
          </Typography>
        ))}
      </Grid>
      
    </Grid>
  </Box>
{/* Sağ Taraf (Fotoğraf) */}
<Box
    sx={{
      width: { xs: "100%", sm: "50%" },
      height: { xs: "50%", sm: "100%" },
      backgroundImage: 'url("/makyaj3.JPG")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: { xs: "none", sm: "flex" },
    }}
  />
  
</Box>






<Box
  sx={{
    width: "100%",
    height: { xs: "110vh", sm: "700px" },
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    position: "relative",
    overflow: "hidden",
  }}
>
   {/* Sağ Taraf (Fotoğraf) */}
   <Box
    sx={{
      width: { xs: "100%", sm: "50%" },
      height: { xs: "45%", sm: "100%" },
      backgroundImage: 'url("/tirnak2.JPG")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
  {/* Sol Taraf (İçerik) */}
  <Box
    sx={{
      width: { xs: "100%", sm: "50%" },
      height: { xs: "55%", sm: "100%" },
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      backgroundColor: "white",
      paddingLeft: { xs: "30px", sm: "100px" },
    }}
  >
    <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "2rem", sm: "3rem" },
                color: "black",
                marginBottom: 0,
                lineHeight: 1.2,
                paddingBottom: { xs: "20px", sm: "40px" },
                width: { xs: "100%", sm: "600px" },
              }}
            >
              Manikür & Bakım
            </Typography>
    
    <Grid container spacing={0} sx={{ width: { xs: "100%", sm: "600px" }, }} >
      <Grid item xs={5}>
        {[
          "Manikür",
          "Pedikür",
          "Oje El-Ayak",
          "Kalıcı Oje El-Ayak" ,
          "Kaş Alımı",
          "Üst Dudak Alımı",
          "Kaş + Dudak Üstü",
          "Komple Yüz Alımı",
          "Kol Alımı",
          "Bacak Alımı",
          "Bikini Alımı",
        ].map((item, index) => (
          <Typography key={index} variant="body1" sx={{ marginBottom: "4px" }}>
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

import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Fade , List, Button, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import ContactBox from "../../components/contactBox/ContactBox";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { textAlign } from "@mui/system";


const About = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);



  const teamMembers = [
    { name: "Ahmet ", photo: "/111.JPG" },
    { name: "Fuat ", photo: "/KB_SALON-19.jpg" },
    { name: "Kenan ", photo: "/120.JPG" },
    { name: "Burak ", photo: "/119.JPG" },
    { name: "Mehmet ", photo: "/112.JPG" },
    { name: "Elif ", photo: "/113.JPG" },
    { name: "Burak ", photo: "/115.JPG" },
    { name: "Burak ", photo: "/118.JPG" },
    { name: "Burak ", photo: "/117.JPG" },
  ];

  const salonPhotos = [
    "/KB_SALON-34.jpg",
    "/KB_SALON-46.jpg",
    "/KB_SALON-45.jpg",
    "/KB_SALON-42.jpg",
    "/KB_SALON-44.jpg",
    "/KB_SALON-52.jpg",
    "/KB_SALON-49.jpg",
    "/KB_SALON-53.jpg",
    "/KB_SALON-47.jpg",
  ];
  

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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: 'url("/3.JPG")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "600px",
        }}
      />

      {/* Kuaför Hakkında */}
      {/* Hakkımızda */}
      <Box
  sx={{
    width: "100%",
    minHeight: "600px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
  }}
>
  {/* Başlık */}
  <Typography variant="h4" align="center" gutterBottom  paddingBottom={"40px"}>
    Hakkımızda
  </Typography>

  {/* İçerik Alanı */}
  <Box sx={{ maxWidth: "1000px", textAlign: "left" }}>
    <Typography variant="body1" sx={{ mb: 2 }}>
      2003 yılında kurulan kuaför salonumuz, güzellik ve bakım sektöründe fark yaratmaya devam ediyor. 
      Sektördeki gelişmeleri yakından takip eden ekibimizle, müşterilerimize en iyi hizmeti sunuyoruz. 
      Kişiye özel stil danışmanlığı ile sadece saç kesimi ve renklendirme değil, aynı zamanda güven ve 
      özgüven kazandırıyoruz. Profesyonellik, samimiyet ve müşteri memnuniyeti ilkeleriyle, her ziyaretinizi 
      unutulmaz bir deneyime dönüştürüyoruz.
    </Typography>
    <Typography variant="body1" sx={{ mb: 2 }}>
      Salonumuzda kullanılan tüm ürünler, yüksek kalite standartlarına sahiptir ve saç sağlığını ön planda tutar. 
      Ekip olarak, dünya çapındaki güzellik trendlerini takip ediyor, düzenli olarak eğitimlere katılıyor ve 
      yeteneklerimizi sürekli geliştiriyoruz. Bu sayede, en yeni kesim, renklendirme ve bakım tekniklerini uygulayarak 
      müşterilerimize modern ve kişiye özel çözümler sunabiliyoruz.
    </Typography>
    <Typography variant="body1" sx={{ mb: 2 }}>
      Yıllardır süregelen profesyonellik, samimiyet ve müşteri memnuniyeti anlayışımızla, her ziyaretinizde kendinizi 
      özel hissetmenizi sağlamak için buradayız. Çünkü biz, sadece saç kesmiyor veya şekillendirmiyoruz; müşterilerimize 
      kendilerini iyi hissettirecek bir deneyim sunuyoruz.
    </Typography>
    <Typography variant="body1">
      Siz de güzelliğinize değer katmak ve kendinizi özel hissetmek için bizimle tanışın.
    </Typography>
  </Box>
</Box>


     
<Box sx={{ backgroundColor: "background.paper", height: "auto", padding: "90px" }}>
  <Typography variant="h4" gutterBottom textAlign="center" color="white" paddingBottom={"40px"}>
    Ekibimiz
  </Typography>

  {/* İlk 5 kişi */}
  <Grid container columnSpacing={4} rowSpacing={3} justifyContent="center">
    {teamMembers.slice(0, 5).map((member, index) => (
      <Grid item key={index}>
        <Box sx={{ textAlign: "center", width: "200px" }}>
          {/* Sadece fotoğraf çerçeve içinde */}
          <Box sx={{ border: "2px solid white", padding: "10px" }}>
            <img
              src={member.photo}
              alt={member.name}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover"
              }}
            />
          </Box>
          {/* İsim çerçevenin dışında */}
          <Typography variant="h5" sx={{ marginTop: "10px", color: "white" }}>
            {member.name}
          </Typography>
        </Box>
      </Grid>
    ))}
  </Grid>

  {/* Satır arası boşluk */}
  <Box sx={{ height: "60px" }} />

  {/* Kalan ekip üyeleri */}
  <Grid container columnSpacing={4} rowSpacing={3} justifyContent="center">
    {teamMembers.slice(5).map((member, index) => (
      <Grid item key={index + 5}>
        <Box sx={{ textAlign: "center", width: "200px" }}>
          <Box sx={{ border: "2px solid white", padding: "10px" }}>
            <img
              src={member.photo}
              alt={member.name}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover"
              }}
            />
          </Box>
          <Typography variant="h5" sx={{ marginTop: "10px", color: "white" }}>
            {member.name}
          </Typography>
        </Box>
      </Grid>
    ))}
  </Grid>
</Box>




      {/* Salon Fotoğrafları */}
<Box sx={{ padding: "80px", textAlign: "center" }}>
  <Typography
    variant="h4"
    gutterBottom
    paddingBottom={"40px"}
    paddingTop={"20px"}
  >
    Salonumuz
  </Typography>

  <Grid container spacing={4} justifyContent="center">
    {salonPhotos.map((photo, index) => (
      <Grid item key={index} xs={12} sm={6} md={4}>
        <Box>
          <img
            src={photo}
            alt={`Salon fotoğrafı ${index + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Grid>
    ))}
  </Grid>
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

export default About;

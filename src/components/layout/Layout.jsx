import { Outlet } from "react-router-dom";
import { AppBar, Toolbar, Typography, Container, Box, Button, Drawer, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Layout = () => {
  const menuItems = ["Hakkımızda", "Hizmetlerimiz", "Portfolyo", "İletişim"];
  const menuItemsMobil = ["Anasayfa", "Hakkımızda", "Hizmetlerimiz", "Portfolyo", "İletişim"];
  const navigate = useNavigate();
  const [open, setOpen] = useState(false); // Menü durumunu kontrol etmek için state

  const handleContactClick = () => {
    navigate("/"); // Önce anasayfaya yönlendir
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("scrollToContact"));
    }, 100); // Kısa bir gecikme ekle
  };

  const handleLogoClick = () => {
    navigate("/"); // StudioBal'a tıklandığında anasayfaya yönlendir
  };

  const handleHizmetlerimizClick = () => {
    navigate("/"); // Önce anasayfaya yönlendir
    setTimeout(() => {
      const servicesBox = document.getElementById("services"); // ID'si 'services' olan öğeye ulaş
      if (servicesBox) {
        servicesBox.scrollIntoView({ behavior: "smooth" }); // Yavaşça kaydır
      }
    }, 100); // Kısa bir gecikme ekle
  };

  const handleMenuToggle = () => {
    setOpen(!open); // Menü açma / kapama
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        minWidth: "100%",
        margin: 0,
        padding: 0,
        backgroundColor: "background.default",
      }}
    >
      {/* Header (AppBar) */}
      <AppBar
        position="static"
        sx={{
          width: "100%",
          display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
          boxShadow: "none",
          backgroundColor: "transparent",
          height: "50px",
          zIndex: 2,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "space-between", sm: "flex-start" },
            padding: { xs: "20px", sm: "0px" },
            marginTop: { xs: "20px", sm: "0px" },
            gap: 4,
            height: "50px",
            width: { xs: "100%", sm: "1200px" },
          }}
        >
          {/* Başlık */}
          <Typography
            variant="h5"
            sx={{
              flexShrink: 0,
              color: "text.primary",
              cursor: "pointer",
              fontSize: { xs: "1.5rem", sm: "1.5rem" },
            }}
            onClick={handleLogoClick} // Tıklanırsa anasayfaya git
          >
            StudioBal
          </Typography>

          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton
              onClick={handleMenuToggle}
              color="#10375C"
              sx={{
                fontSize: "3rem", // İkonu büyütmek için
                color: "#10375C", // İkon rengini değiştirmek için
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Menü Butonları (Desktop için) */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item}
                color="inherit"
                sx={{
                  color: "text.primary",
                  textTransform: "capitalize",
                  fontSize: "1rem",
                }}
                onClick={item === "İletişim" ? handleContactClick : item === "Hizmetlerimiz" ? handleHizmetlerimizClick : () => navigate(
                  item === "Hakkımızda" ? "/about" :
                  item === "Anasayfa" ? "/" :
                  item === "Portfolyo" ? "/portfolio" :
                  "/"
                )}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer (Mobil Menü) */}
      <Drawer
  anchor="right"
  open={open}
  onClose={handleMenuToggle} // Menü dışına tıklayınca kapanacak
  sx={{
    display: { xs: "block", sm: "none" },
    height: "100vh", // Menü yüksekliği ekranın tamamı kadar olacak
    overflow: "hidden", // Kaydırma engelleniyor
  }}
>
  <Box
    sx={{
      width: 300,
      height: "100%", // Yüksekliği %100 yaparak ekranı kaplamasını sağlıyoruz
      padding: 2,
      backgroundColor: "background.paper", // Arka plan rengi
      marginTop: 4,
    }}
  >
    {menuItemsMobil.map((item) => (
      <Button
        key={item}
        color="inherit"
        sx={{
          width: "100%",
          textTransform: "capitalize",
          fontSize: "1.3rem",
          padding: "10px 0",
          color: "text.secondary", // Metin rengi
        }}
        
        onClick={() => {
          // Yönlendirmeler
          if (item === "İletişim") {
            handleContactClick();
          } else if (item === "Hizmetlerimiz") {
            handleHizmetlerimizClick();
          } else {
            navigate(
              item === "Hakkımızda" ? "/about" :
              item === "Portfolyo" ? "/portfolio" :
              "/"
            );
          }
      
          // Menü kapanacak
          handleMenuToggle();
        }}
        
      >
        {item}
      </Button>
    ))}
  </Box>
</Drawer>



      {/* İçerik Alanı */}
      <Container
        maxWidth="100%"
        disableGutters
        sx={{
          flex: 1,
          margin: 0,
          marginTop: "-50px",
        }}
      >
        <Outlet />
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          backgroundColor: "background.paper",
          color: "white",
          padding: 2,
          textAlign: "center",
          width: "100%",
          marginTop: "auto",
        }}
      >
        <Typography variant="body2" sx={{ fontSize: { xs: "0.75rem", sm: "1rem" } }}>
          © 2025 Journey. Made by{" "}
          <a
            href="https://www.zeynepse.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "inherit",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            zeynepse
          </a>{" "}
          with <span style={{ color: "red" }}>❤</span>
        </Typography>
      </Box>
    </div>
  );
};

export default Layout;

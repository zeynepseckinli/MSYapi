import React, { useState, useEffect  } from "react";
import { Outlet, useLocation  } from "react-router-dom";
import { AppBar, Toolbar, Typography, Container, Box, Button, Drawer, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import { display } from "@mui/system";

const Layout = () => {
  const menuItems = ["ANASAYFA", "HAKKIMIZDA", "HİZMETLERİMİZ", "İLETİŞİM"];
  const menuItemsMobil = ["ANASAYFA", "HAKKIMIZDA", "HİZMETLERİMİZ",  "İLETİŞİM"];
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false); 
  const [isScrolled, setIsScrolled] = useState(false)

  const handleContactClick = () => {
    navigate("/"); 
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("scrollToContact"));
    }, 100); 
  };

  const handleLogoClick = () => {
    navigate("/"); 
  };

  const handleMenuToggle = () => {
    setOpen(!open); 
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // 50px aşağı kayınca arka plan değişecek
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
          display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
          boxShadow: "none",
          backgroundColor:   isScrolled ? "#9e7a68F2" : "transparent", //"#9e7a68",
          height: "80px",
          zIndex: 1000,
          borderBottom: "1px solid black", // Alt çizgi ekleme
          transition: "background-color 0.3s ease-in-out, border-bottom 0.3s ease-in-out",
        }}
      >
        
        <Toolbar
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", // iki kutuyu ayırır
    padding: { xs: "20px", sm: "0px" },
    paddingRight: { xs: "0px", sm: "30px" },
    marginTop: { xs: "10px", sm: "0px" },
    gap: 4,
    height: "80px",
    width: { xs: "100%", sm: "1200px" },
    marginRight: { xs: "0px", sm: "0px" },
  }}
>
  {/* Sol kısım - Logo */}
  <Box sx={{ display: "flex", alignItems: "center" }}>
    <Box sx={{ flexShrink: 0, cursor: "pointer", margin: "0px" }} onClick={handleLogoClick}>
      <img
        src="/ikon3.PNG"
        alt="Logo"
        style={{ height: "60px", width: "auto" }}
      />
    </Box>
  </Box>

  {/* Sağ kısım - Menü */}
  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
    {/* Mobil ikon */}
    <Box sx={{ display: { xs: "flex", sm: "none" } }}>
      <IconButton
        onClick={handleMenuToggle}
        color="black"
        sx={{
          fontSize: "3rem",
          color: "black",
        }}
      >
        <MenuIcon />
      </IconButton>
    </Box>

    {/* Desktop menü */}
    <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
      {menuItems.map((item) => (
        <Button
          key={item}
          color="inherit"
          sx={{
            color: "black",
            fontSize: "1rem",
            
            
          }}
          onClick={
            item === "İLETİŞİM"
              ? handleContactClick
              : () =>
                  navigate(
                    item === "HAKKIMIZDA"
                      ? "/about"
                      : item === "ANASAYFA"
                      ? "/"
                      : item === "HİZMETLERİMİZ"
                      ? "/services"
                      : "/"
                  )
          }
        >
          {item}
        </Button>
      ))}
    </Box>
  </Box>
</Toolbar>


      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={handleMenuToggle} 
        sx={{
          display: { xs: "block", sm: "none" },
          height: "100vh", 
          overflow: "hidden", 
        }}
      >
        <Box
          sx={{
            width: 300,
            height: "100%", 
            padding: 2,
            backgroundColor: "background.paper", 
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
                color: "text.secondary", 
              }}
              onClick={() => {
                if (item === "İLETİŞİM") {
                  handleContactClick();
                } else {
                  navigate(
                    item === "HAKKIMIZDA" ? "/about" :
                    item === "HİZMETLERİMİZ" ? "/services":
                    item === "ANASAYFA" ? "/" :
                    "/"
                  );
                }
                handleMenuToggle();
              }}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Drawer>

      <Container
        maxWidth="100%"
        disableGutters
        sx={{
          flex: 1,
          margin: 0,
          marginTop: "0px",
        }}
      >
        <Outlet />
      </Container>

      <Box
  component="footer"
  sx={{
    backgroundColor: "background.paper",
    color: "white",
    padding: 2,
    textAlign: "center",
    width: "100%",
    height: "200px",
    marginTop: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderTop: "1px solid #EFEBE680", // Alt çizgi ekleme
  }}
>
  <Typography
    variant="body2"
    sx={{
      fontSize: { xs: "0.75rem", sm: "1rem" },
      color: "text.secondary",
    }}
  >
    © 2025 | Made by <strong>zeynepse</strong>
  </Typography>
</Box>
    </div>
  );
};

export default Layout;

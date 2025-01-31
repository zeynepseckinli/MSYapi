import { Outlet } from "react-router-dom";
import { AppBar, Toolbar, Typography, Container, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const menuItems = ["Hakkımızda", "Hizmetlerimiz", "Portfolyo", "İletişim"];
  const navigate = useNavigate();

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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
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
          width: "1200px",
          maxWidth: "1200px",
          margin: "0 auto",
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
            gap: 4,
            padding: 0,
            minHeight: "50px",
            height: "50px",
          }}
        >
          {/* Başlık */}
          <Typography
            variant="h5"
            sx={{
              flexShrink: 0,
              color: "text.primary",
              cursor: "pointer", // Tıklanabilir yapmak için
            }}
            onClick={handleLogoClick} // Tıklanırsa anasayfaya git
          >
            StudioBal
          </Typography>

          {/* Menü Butonları */}
          <Box sx={{ display: "flex", gap: 2 }}>
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
        <Typography variant="body2">
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

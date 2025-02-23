import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Box, Typography } from "@mui/material";

const ContactBox = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "700px", // Toplam yükseklik kesin olarak 700px olacak
        display: "flex",
        flexDirection: "column", // Dikey hizalama için column
        alignItems: "center",
        backgroundColor: "background.paper",
      }}
    >
      {/* Üst Box - 300px */}
      <Box
        sx={{
          display: "flex",
          width: "1000px",
          height: "200px", // Sabit yükseklik
          backgroundColor: "background.paper",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <Typography variant="h1" sx={{ fontSize: "4rem",fontWeight: "bold", textAlign: "center", color: "text.secondary", marginBottom: 0, lineHeight: 1.2 }}>
        İletişime Geçin
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
          }}
        >
          <a href="https://www.instagram.com/msyapimuh.rest.rekn/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={40} color="#EFEBE6" />
          </a>
          <a href="#" rel="noopener noreferrer">
            <FaLinkedin size={40} color="#EFEBE6" />
          </a>
        </Box>
        
      </Box>

      {/* Alt Box - 400px (Arka Plan Fotoğrafı) */}
      <Box
  sx={{
    display: "flex",
    width: "100%",
    height: "500px",
    alignItems: "center",
    justifyContent: "center",
    gap: "40px",
    position: "relative",
    color: "#fff",
    backgroundImage: "url('/2.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.7)", // Siyah, %50 opaklık
      zIndex: 1,
    },
  }}
>
      

      {/* E-mail Bilgisi */}
      <Box sx={{ textAlign: "center", width: "300px", zIndex: 10, }}>
        <Typography variant="body1" sx={{ fontWeight: "bold", color: "#E2AD7E", marginBottom: "20px" , textShadow: "3px 3px 4px rgba(0, 0, 0, 0.9)", }}>
          📩 EMAIL
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#EFEBE6" }}>
          <a
            href="mailto:info@msyapirestorasyon.com"
            style={{ color: "#EFEBE6", textShadow: "3px 3px 4px rgba(0, 0, 0, 0.9)", textDecoration: "none" }}
          >
            info@msyapirestorasyon.com
          </a>
        </Typography>
      </Box>

      {/* Adres Bilgisi */}
      <Box sx={{ textAlign: "center", width: "300px",  zIndex: 10, }}>
        <Typography variant="body1" sx={{ fontWeight: "bold", color: "#E2AD7E", marginBottom: "20px", textShadow: "3px 3px 4px rgba(0, 0, 0, 0.9)", }}>
          📍 ADRES
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#EFEBE6", textShadow: "3px 3px 4px rgba(0, 0, 0, 0.9)", }}>
          Malazgirt Mahallesi Eyüp Sultan Caddesi 57/1 B2 Giriş 1.Kat No:102
          <br /> Selçuklu/Konya
        </Typography>
      </Box>

      {/* Telefon Bilgisi */}
      <Box sx={{ textAlign: "center", width: "300px", zIndex: 10, }}>
        <Typography variant="body1" sx={{ fontWeight: "bold", color: "#E2AD7E", textShadow: "3px 3px 4px rgba(0, 0, 0, 0.9)", marginBottom: "20px" }}>
          📞 TELEFON
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold", textShadow: "3px 3px 4px rgba(0, 0, 0, 0.9)", color: "#EFEBE6" }}>
          +90 545 335 45 95</Typography>
      </Box>
    </Box>
    </Box>
  );
};

export default ContactBox;

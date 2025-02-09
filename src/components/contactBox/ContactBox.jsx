import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Box, Typography } from "@mui/material";

const ContactBox = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "300px", sm: "400px" },
        backgroundColor: "secondary.main",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          maxWidth: "1200px",          
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "center",
          margin: "0 auto",
          gap: "24px",
          padding: { xs: "0px 24px", sm: "0rem" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            maxWidth: "600px",             
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "16px",
          }}
        >
          <Typography variant="h3" sx={{color: "text.primary", fontWeight: 500, fontSize: { xs: "1.8rem", sm: "3rem" },  }}>
            Hadi Çalışalım!
          </Typography>
          <Typography variant="body1" sx={{  fontWeight: 400 }}>
            Etkinlik, proje ya da bir girişim... <br/> Hadi birlikte çalışalım!
          </Typography>
          <Typography variant="body1" sx={{  fontWeight: 400 }}>
            📩 İletişime Geçin
          </Typography>
          <Typography variant="body1" sx={{  fontWeight: 400 }}>
            <a href="mailto:berkusbizicek@gmail.com" style={{ color: "#10375C" }}>berkusbizicek@gmail.com</a>
          </Typography>
          <Typography variant="body1" sx={{  fontWeight: 400 }}>
            🌐 Bağlantıda Kalın
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <a href="https://www.instagram.com/berkusbizicek/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} color="#10375C" />
            </a>
            <a href="#" rel="noopener noreferrer">
              <FaLinkedin size={24} color="#10375C" />
            </a>
            
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactBox;

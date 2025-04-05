import { FaInstagram } from "react-icons/fa";
import { Box, Typography } from "@mui/material";

const ContactBox = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "700px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "background.paper",
        gap: "40px",
      }}
    >
      {/* Google Haritalar */}
      <Box
        sx={{
          width: "40%",
          height: "400px",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.5)",
        }}
      >
        <iframe
          title="Google Maps"
          width="100%"
          height="400"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.631020625216!2d29.05522207582292!3d40.970444271207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac70dc6f3b363%3A0x621b25f22a691757!2zU3VhZGl5ZSBNYWhhbGxlc2kgS2F6xLFtIMWeemFscCBTb2thaywgxLBhxZ9rxLFuYmFra2FsIE5vOjQ4LCAzNDc0MCBLYWTDvGvDvHk!5e0!3m2!1str!2str!4v1741344055286!5m2!1str!2str"
          allowFullScreen
        ></iframe>
      </Box>

      {/* İletişim Bilgileri */}
      <Box sx={{ textAlign: "left", width: "40%" }}>
        <Typography
                variant="h3"
                sx={{
                  fontSize: "3rem",
                  color: "text.secondary",
                  marginBottom: "10px",
                  lineHeight: 1.2,
                }}
              >
          Randevu İçin Arayın
        </Typography>

        <Typography variant="body1" sx={{fontWeight: "bold",  color: "#9e7a68", marginBottom: "10px" }}>
          📞 TELEFON
        </Typography>
        <Typography variant="h5" sx={{  color: "#EFEBE6" }}>
          0216 360 34 62
        </Typography>

        <Typography variant="body1" sx={{ fontWeight: "bold", color: "#9e7a68", marginTop: "20px", marginBottom: "10px" }}>
          📍 ADRES
        </Typography>
        <Typography variant="h5" sx={{ color: "#EFEBE6" }}>
          Suadiye Mahallesi Kazım Özalp Sokak, Şaşkınbakkal No:48, 34740 Kadıköy/İstanbul
        </Typography>

        <Typography variant="body1" sx={{ fontWeight: "bold", color: "#9e7a68", marginTop: "20px", marginBottom: "10px" }}>
          ⏰ ÇALIŞMA SAATLERİ
        </Typography>
        <Typography variant="h5" sx={{  color: "#EFEBE6" }}>
          Salı - Pazar: 09:00 - 19:00
          <br /> Pazartesi: Kapalı
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px" }}>
          <FaInstagram size={30} color="#9e7a68" />
          <a
            href="https://www.instagram.com/kenanbeyazkilinc/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#9e7a68", fontSize: "1.2rem", textDecoration: "none" }}
          >
            Bizi Instagram'da takip edin!
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactBox;

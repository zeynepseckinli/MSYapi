import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import PropTypes from "prop-types";

const ColorButton = styled(Button)(() => ({
  borderRadius: "50px", // Yuvarlak kenarlar
  border: "2px solid", // Çerçeve kalınlığı
  borderColor: "#10375C", // Çerçeve rengi (primary)
  color: "#10375C",
  fontFamily: 'Poppins, sans-serif',
  fontSize: '1.3rem',
  backgroundColor: 'transparent', // Normal arka plan rengi
  padding: "10px 20px", // İçerik boşluğu
  textTransform: "none", // Yazıyı büyük harf yapmamak için
  transition: "0.3s", // Hover animasyonu
  "&:hover": {
  backgroundColor: "#10375C", // Hover sırasında arka plan rengi
  color: "#EDEFF3", // Yazı rengini beyaz yap
  }
}));

export default function ClassicButton({text, ...props}) {
  return (
      <ColorButton {...props} variant="contained">{text}</ColorButton>
  );
}

ClassicButton.propTypes = {
  text: PropTypes.any,
};
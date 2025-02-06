import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import PropTypes from "prop-types";

const ColorButton = styled(Button)(() => ({
  borderRadius: "50px", 
  border: "2px solid", 
  borderColor: "#10375C", 
  color: "#10375C",
  fontFamily: 'Poppins, sans-serif',
  fontSize: '1.3rem',
  backgroundColor: 'transparent', 
  padding: "10px 20px", 
  textTransform: "none", 
  transition: "0.3s", 
  "&:hover": {
  backgroundColor: "#10375C", 
  color: "#EDEFF3", 
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
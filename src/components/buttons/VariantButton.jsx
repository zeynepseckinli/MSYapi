import { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const ColorButton = styled(Button)(({ selected }) => ({
  width: "350px",
  height: "50px",
  borderRadius: "50px",
  border: "2px solid",
  borderColor: selected ? "#10375C" : "#EDEFF3", 
  color: selected ? "#EDEFF3" : "#10375C",
  fontFamily: "Poppins, sans-serif",
  fontSize: "1rem",
  backgroundColor: selected ? "#10375C" : "transparent",
  padding: "10px 20px",
  textTransform: "none",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  transition: "0.3s",
  "&:hover": {
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
    color: "#EDEFF3",
    backgroundColor: "#10375C",
    borderColor: "#10375C",
  },
}));

export default function VariantButton({ text, ...props }) {
  const [selected, setSelected] = useState(false);

  return (
    <ColorButton
      {...props}
      selected={selected}
      onClick={() => setSelected(!selected)} 
    >
      {text}
    </ColorButton>
  );
}

VariantButton.propTypes = {
  text: PropTypes.any,
};

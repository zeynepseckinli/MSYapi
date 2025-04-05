import React, { useEffect, useState, useRef, useCallback } from "react";
import { Box, Typography, Button, Dialog } from "@mui/material";
import ContactBox from "../../components/contactBox/ContactBox";
import FotografVideo from "../../components/portfolio/FotografVideo";
import WebTasarim from "../../components/portfolio/WebTasarim";
import SosyalMedya from "../../components/portfolio/SosyalMedya";
import VariantButton from "../../components/buttons/VariantButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"; 


const Portfolio = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [selectedTab, setSelectedTab] = useState("fotografVideo");
  const videoRef = useRef(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  useEffect(() => {
      console.log("Ekran genişliği:", window.innerWidth);
  
      const checkMobile = () => {
        const mobile = window.matchMedia("(max-width: 850px)").matches;
        console.log("isMobile değeri güncellendi:", mobile);
        setIsMobile(mobile);
      };
      checkMobile();
      window.addEventListener("resize", checkMobile);

      return () => {
        window.removeEventListener("resize", checkMobile);
      };
    }, []);

  const handleVideoError = () => {
    setVideoFailed(true);
  };

  const renderComponent = () => {
    switch (selectedTab) {
      case "fotografVideo":
        return <FotografVideo />;
      case "webTasarim":
        return <WebTasarim />;
      case "sosyalMedya":
        return <SosyalMedya />;
      default:
        return null;
    }
  };

  useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setShowScroll(true);
        } else {
          setShowScroll(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
      <div style={{ 
        margin: 0, 
        padding: 0, 
        overflowX: "hidden", 
        width: "100%", 
        maxWidth: "100vw" 
      }}>
            
        </div>
      );
    };

export default Portfolio;

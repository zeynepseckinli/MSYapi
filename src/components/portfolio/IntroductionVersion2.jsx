import React, { useState, useEffect } from "react";
import {  useRef } from "react";
import { Box, Typography, Dialog, IconButton  } from "@mui/material";
import ClassicButton from "../buttons/ClasicButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow"; 
import mediaItems from "../../data/mediaData6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"; 
import { useNavigate } from "react-router-dom";



const CustomArrow = ({ onClick, direction }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      [direction === "left" ? "left" : "right"]: "10px",
      color: "white",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1,
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      },
    }}
  >
    {direction === "left" ? <MdArrowBackIos /> : <MdArrowForwardIos />}
  </IconButton>
);

const IntroductionVersion2 = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const videoRefs = useRef([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    return () => {
      videoRefs.current.forEach((video) => {
        if (video) video.pause();
      });
    };
  }, [selectedProject]);

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

  const handleVideoPlay = (index) => {
    const videos = document.querySelectorAll("video");
      videos.forEach((video, i) => {
      if (i !== index) {
        video.pause();
      }
    });
  
    const selectedVideo = videos[index];
    if (selectedVideo) {
      selectedVideo.currentTime = 0; 
      selectedVideo
        .play()
        .then(() => console.log(`Video ${index} oynatılıyor.`))
        .catch((error) => console.error(`Video ${index} oynatılamadı:`, error));
    }
    setIsPlaying(true);
  };

  const handleBeforeChange = (oldIndex) => {
    const videos = document.querySelectorAll("video");
      videos.forEach((video, i) => {
      if (i !== oldIndex) {
        video.pause();
      }
    });
    setIsPlaying(false);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    adaptiveHeight: true,
    afterChange: () => {
      videoRefs.current.forEach((video) => {
        if (video) video.pause();
      });
    },
    beforeChange: handleBeforeChange, 
  };
  
  return (
    <div style={{ margin: 0, padding: 0 }}>      
      <Box id="services"
        sx={{
          width: "100%", 
          height: "100%",
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          backgroundColor: "background.default",
          paddingBottom: "50px",
        }}
      >
        <Box
          sx={{
            display: "flex", 
            width: "100%", 
            maxWidth: "1500px", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center", 
            margin: "0 auto", 
            backgroundColor: "background.default",
            padding: { xs: "0", sm: "0rem" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" }, 
              justifyContent: { xs: "flex-start", sm: "space-between" }, 
              alignItems: { xs: "flex-start", sm: "center" }, 
              gap: "24px",
              width: "100%",
              maxWidth: "1200px",
              paddingLeft: { xs: "24px", sm:"0px" },
              paddingTop: { xs: "24px", sm:"50px" },
              paddingBottom: { xs: "0px", sm:"0px" },
              paddingRight: { xs: "0px", sm:"180px" },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "text.primary",
                fontWeight: 500,
                fontSize: { xs: "2.5rem", sm: "3rem" }, 
              }}
            >
              Neler Yaptık?        
            </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}> 
                <img
                  src="/OK.png" 
                  alt="Separator"
                  style={{ 
                    width: "350px", 
                    height: "60px", 
                    objectFit: "cover", 
                    marginBottom: "40px", 
                  }} 
                />
              </Box>
            <ClassicButton
              sx={{width: "200px", display: { xs: "none", sm: "block" }, }}
              text="Portfolyo"
              onClick={() => navigate("/portfolio")}
            />
          </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center", marginTop: "20px",padding: { xs: "0px 24px", sm: "0px 80px" }}}>
            {mediaItems.map((project) => (
            <Box
              key={project.id}
              sx={{
                position: "relative",
                width: { xs: "100%", sm: "400px" },
                maxWidth: "400px",
                height: "300px",
                borderRadius: "8px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)", 
                },
              }}
              onClick={() => {
                if (isMobile && project.coverType === "video") {
                  window.open(project.to, "_blank"); 
                } else {
                  handleProjectClick(project);
                }
              }}
            >
              {project.coverType === "image" ? (
                <img src={project.cover} alt={project.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              ) : (
                <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
                  {isMobile ? (
                    <img
                      src={project.replace}
                      alt={project.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  ) : (
                    <video
                      src={project.cover}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      muted
                      loop
                    />
                  )}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      backgroundColor: "#10375C99",
                      borderRadius: "50%",
                      width: "60px",
                      height: "60px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      transition: "transform 0.2s",
                      "&:hover": { transform: "translate(-50%, -50%) scale(1.2)" }, 
                    }}
                  >
                    <PlayArrowIcon sx={{ color: "#fff", fontSize: 40 }} />
                  </Box>
                </Box>                
              )}
              <Box
                sx={{
                  position: "absolute",
                  bottom: "0",
                  width: "100%",
                  height: "50px",
                  backgroundColor: "#10375C99",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "text.secondary",
                  fontSize: "16px",
                  fontWeight: "bold",
                  padding: "0 10px",
                  whiteSpace: "nowrap", 
                  overflow: "hidden",
                  textOverflow: "ellipsis", 
                }}
              >
                {project.name}
              </Box>
            </Box>
          ))}
        </Box>

<Dialog open={!!selectedProject} onClose={handleClose} maxWidth="lg" backgroundColor= "transparent">
  <Box
    sx={{ 
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bgcolor: "transparent",
      position: "relative",
    }}
  >
    {selectedProject && (
        selectedProject.media.length > 1 ? (
      <Slider {...sliderSettings} style={{ width: "100%", height: "100%", backgroundColor: "#000000" }}>
        {selectedProject.media.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              overflow: "hidden",
              margin: "auto",
            }}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={selectedProject.name}
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "80vw",
                  maxHeight: "80vh",
                  objectFit: "contain",
                  display: "block",
                  margin: "auto",
                }}
              />
            ) : (
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
              <Box sx={{ position: "relative" }}>
                  <video
                    className="custom-video"
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={item.src}
                    controls
                    playsInline
                    muted
                    onClick={() => handleVideoPlay(index)}
                    style={{ maxWidth: "80vw", maxHeight: "80vh", objectFit: "contain" }}
                  />
                {!isPlaying && <div className="play-icon-overlay" />}
                </Box>
              </Box>
            )}
          </Box>
        ))}
      </Slider>
    ) : (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center",  width: "82vw", height: "82vh", backgroundColor: "#000000"  }}>
        {selectedProject.media.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={selectedProject.name}
                style={{
                  maxWidth: "80vw",
                  maxHeight: "80vh",
                  objectFit: "contain",
                  display: "block",
                  margin: "auto",
                }}
              />
            ) : (
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <video
                    className="custom-video"
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={item.src}
                    controls
                    playsInline
                    muted
                    onClick={() => handleVideoPlay(index)}
                    style={{ maxWidth: "80vw", maxHeight: "80vh", objectFit: "contain" }}
                  />
                {!isPlaying && <div className="play-icon-overlay" />}
                </Box>
              </Box>
              )}
            </Box>
            ))}
          </Box>
          ))}
        </Box>
      </Dialog>
    </Box>
  </Box>
</div>
);
};

export default IntroductionVersion2; 
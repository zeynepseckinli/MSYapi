import React, { useState, useEffect } from "react";
import {  useRef } from "react";
import { Box, Button, Dialog, IconButton  } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow"; 
import mediaItems from "../../data/mediaData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"; 

const categories = [
  "Tümü",
  "Etkİnlİk",
  "Festİval",
  "Konser",
  "Sosyal Medya",
  "Mİmarİ",
  "Ürün",
];

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

const FotografVideo = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [selectedProject, setSelectedProject] = useState(null);
  const videoRefs = useRef([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    return () => {
      videoRefs.current.forEach((video) => {
        if (video) video.pause();
      });
    };
  }, [selectedProject]);

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

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsPlaying(false);
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
  
  const filteredMedia =
    selectedCategory === "Tümü"
      ? mediaItems
      : mediaItems.filter((item) => item.category === selectedCategory);

  return (
    <div style={{ margin: 0,  display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "100%", maxWidth: "1500px",
              paddingBottom: { xs: "24px", sm: "80px" },
              display: "flex", flexDirection: "column", 
              alignItems: "center", 
              justifyContent: "center", textAlign: "center", backgroundColor: "background.default" }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            maxWidth: "1200px",
            justifyContent: { xs: "center", sm: "space-between" },
            flexWrap: "wrap",
            borderBottom: "2px solid #10375C", 
            boxShadow:  "0px 4px 10px rgba(0, 0, 0, 0.2)",
            marginBottom: "40px",
          }}
        >
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "outlined" : "outlined"}
            color="primary"
            onClick={() => handleCategoryChange(category)}
            sx={{
              width: "33%",
              maxWidth: "171px",
              height: "50px",
              borderColor: "#EDEFF3",
              borderRadius: "0px",
              boxShadow: selectedCategory === category ? "0px 4px 10px rgba(0, 0, 0, 0.3)" : "none",
              fontSize: { xs: "0.75rem", sm: "0.875rem" }, 
              "&:hover": {
                boxShadow: selectedCategory === category ? "0px 4px 12px rgba(0, 0, 0, 0.3)" : "none",
                color: "#EDEFF3",
                backgroundColor: "#10375C",
                borderColor: "#10375C",
              },
            }}>{category}
          </Button>
          ))}
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center", marginTop: "20px",
          padding: { xs: "0px 24px", sm: "0px 80px" } }}>
          {filteredMedia.map((project) => (
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
              )
            )}
          </Box>
        </Dialog>
      </Box>
    </div>
  );
};

export default FotografVideo; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import {Box, useTheme} from "@mui/material";

const Gallery = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const theme = useTheme();

    return (
        <Box
            sx={{
                bgcolor: 'background.default', // Встановлення кольору фону з поточної теми
                color: 'text.primary', // Встановлення кольору тексту з поточної теми
                minHeight: '100vh', // Висота контейнера, щоб він заповнював весь екран
                padding: theme.spacing(3) // Використання відступів з поточної теми
            }}
        >
        <div className="slider-container">
            <h1>Gallery</h1>
            <Slider {...settings}>
                <div className={"image"}>
                    <h3>1</h3>
                </div>
                <div className={"image"}>
                    <h3>2</h3>
                </div>
                <div className={"image"}>
                    <h3>3</h3>
                </div>
                <div className={"image"}>
                    <h3>4</h3>
                </div>
                <div className={"image"}>
                    <h3>5</h3>
                </div>
                <div className={"image"}>
                    <h3>6</h3>
                </div>
            </Slider>
        </div>
        </Box>
    );
}

export default Gallery;
import React from 'react';
import Button from '@mui/material/Button';
import HomeIntroImage from "../images/HomeIntroImage.jpg"
import { Typography, Box } from '@mui/material';


function HomePage(props) {
    return (
        <>
            <Box 
                sx={{
                    display: "flex",
                    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HomeIntroImage})`,
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: '30px',
                    height: '430px'
                }}
            >
                <Typography
                    sx={{
                        fontSize: 50,
                        color: 'white',
                        fontWeight: "bold",
                        maxWidth: "80rem",
                        margin: '30px'
                    }}
                >
                    Your one-stop-shop for healthy, easy recipes paired with the perfect song to cook to!
                </Typography>
                <Button variant="contained"> 
                    Take me to your favs!
                </Button>
            </Box>
            <Box
                sx={{
                    backgroundColor: "#14847c",
                    fontSize: 20,
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    padding: '30px',
                    margin: '40px'
                }}
            >
                <Box
                    sx={{
                        fontSize: 50,
                        color: 'white',
                        fontWeight: "bold",
                        maxWidth: "80rem",
                        margin: '20px'
                    }}
                >
                    & now… poetry!
                </Box>
                <Box
                    sx={{
                        color: 'white',
                        maxWidth: "50rem",
                        marginVerticle: '20px'
                    }}
                >
                    Because why not nourish your mind as you do your body? I promise, these poems are short and nothing like the ones assigned to you in high school
                </Box>
                <Button sx={{ bgcolor: "primary.white", color: "primary.black", margin: "20px 0 0 0 !important" }}>PERUSE MY POEMS</Button>
            </Box>
            <Typography variant='h2'>
                Latest Recipes
            </Typography>
            <Box/>
        </>
    );
}


export default HomePage;
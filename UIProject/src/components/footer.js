import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Box } from '@mui/material';


function Footer(props) {
    return (
        <>
            <Box variant="ul">
                <Button component={Link} to="">
                    Home
                </Button>
                <Button component={Link} to="/About/">
                    About
                </Button>
                <Button component={Link} to="/LatestRecipes/">
                    Latest Recipes
                </Button>
                <Button component={Link} to="/LatestPeotry/">
                    Latest Poetry
                </Button>
                <Button component={Link}>
                    By Meal
                </Button>
                <Button component={Link}>
                    Work With Me
                </Button>
            </Box>
        </>
    );
}


export default Footer;
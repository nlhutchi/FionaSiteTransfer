import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchIcon from '@mui/icons-material/Search';
import fionalogowhite from "../images/fionalogowhite.jpg"
import './header.css';
import { Box, Button } from '@mui/material';


function Header(props) {
    const classes = {};

    return (
        <Box 
            sx={{
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "2rem"
            }}
        >
            <div className="col-xs-3">
                <img height="90rem" src={fionalogowhite} alt="fionalogowhite"/>
            </div>
            <Box variant="ul" className={`col-xs-3`}>
                <Button component={Link} className={`hidemobile`} to="">
                    Home
                </Button>
                <Button component={Link} className={`hidemobile`} to="/About/">
                    About
                </Button>
                <Button component={Link} className={`hidemobile`} to="/LatestRecipes/">
                    Latest Recipes
                </Button>
                <Button component={Link} className={`hidemobile`} to="/LatestPoetry/">
                    Latest Poetry
                </Button>
                <Button component={Link}>
                    <MoreHorizIcon />
                </Button>
                <Button component={Link}>
                    <SearchIcon />
                </Button>
            </Box>
        </Box>
    );
}


export default Header;
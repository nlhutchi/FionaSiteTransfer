import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';
import fionalogowhite from "../images/fionalogowhite.jpg"

const useStyles = makeStyles({
    wrapper: {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        marginLeft: "30rem",
        marginRight: "30rem",
        justifyContent: "space-between",
        padding: "2rem",
        
    },
    links: {
        display: "flex",
        flexDirection: "row",
    },
    link: {
        margin: 10
    }
});

function Header(props) {
    const classes = useStyles();

    return (
        <div className={`${classes.wrapper}`}>
            <div className="col-xs-3">
                <img height="90rem" src={fionalogowhite} alt="fionalogowhite"/>
            </div>
            <ul className={`${classes.links} col-xs-3`}>
                <Button component={Link} className={classes.link} to="">
                    Home
                </Button>
                <Button component={Link} className={classes.link} to="/About/">
                    About
                </Button>
                <Button component={Link} className={classes.link} to="/LatestRecipes/">
                    Latest Recipes
                </Button>
                <Button component={Link} className={classes.link} to="/LatestPeotry/">
                    Latest Poetry
                </Button>
                <Button component={Link} className={classes.link}>
                    <MoreHorizIcon />
                </Button>
                <Button component={Link} className={classes.link}>
                    <SearchIcon />
                </Button>
            </ul>
        </div>
    );
}


export default Header;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    wrapper: {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "2rem"
    },
    links: {
        display: "flex",
        flexDirection: "row",
    },
    link: {
        margin: 10
    }
});

function Footer(props) {
    const classes = useStyles();

    return (
        <div className={`${classes.wrapper}`}>
            <ul className={`${classes.links}`}>
                <Button component={Link} className={`${classes.link}`} to="">
                    Home
                </Button>
                <Button component={Link} className={`${classes.link}`} to="/About/">
                    About
                </Button>
                <Button component={Link} className={`${classes.link}`} to="/LatestRecipes/">
                    Latest Recipes
                </Button>
                <Button component={Link} className={`${classes.link}`} to="/LatestPeotry/">
                    Latest Poetry
                </Button>
                <Button component={Link} className={classes.link}>
                    By Meal
                </Button>
                <Button component={Link} className={classes.link}>
                    Work With Me
                </Button>
            </ul>
        </div>
    );
}


export default Footer;
import React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import HomeIntroImage from "../images/HomeIntroImage.jpg"

const useStyles = makeStyles({
    wrapper: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column"
    },
    favs: {
        display: "flex",
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HomeIntroImage})`,
        alignItems: "center",
        flexDirection: "column",
        padding: 30
    },
    favsText: {
        fontSize: 50,
        color: 'white',
        fontWeight: "bold",
        maxWidth: "80rem",
        margin: 20
    },
    text: {
        color: 'white',
        maxWidth: "50rem",
        marginVerticle: 20
    },
    poetry: {
        backgroundColor: "#14847c",
        fontSize: 20,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: 30,
        margin: 40
    },
    poetryButton: {
        margin: "20px 0 0 0 !important"
    }
});

function HomePage(props) {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.favs}>
                <div className={classes.favsText}>
                    Your one-stop-shop for healthy, easy recipes paired with the perfect song to cook to!
                </div>
                <Button variant="contained"> 
                    Take me to your favs!
                </Button>
            </div>
            <div className={classes.poetry}>
                <div className={classes.favsText}>& now… poetry!</div>
                <div className={classes.text}>Because why not nourish your mind as you do your body? I promise, these poems are short and nothing like the ones assigned to you in high school</div>
                <Button sx={{ bgcolor: "primary.white", color: "primary.black" }} className={classes.poetryButton}>PERUSE MY POEMS</Button>
            </div>
        </div>
    );
}


export default HomePage;
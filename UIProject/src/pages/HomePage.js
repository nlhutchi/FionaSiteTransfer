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
        flexDirection: "column"
    },
    favsText: {
        fontSize: 50,
        color: 'white',
        fontWeight: "bold",
        maxWidth: "80rem"
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
                    Take me to your favs
                </Button>
            </div>
        </div>
    );
}


export default HomePage;
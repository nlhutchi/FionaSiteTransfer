import { Grid, Typography, Box } from '@mui/material';
import React from 'react';
import './index.css';


function AboutPage(props) {
    return (
        <>
            <Typography variant="h2" className='pageTitle'>About</Typography>
            <Grid container spacing={{ xs: 4 }} columns={{ xs: 1, sm: 2, md: 12 }} className='nameWrapper'>
                <Box
                    component={Grid}
                    item
                    xs={1}
                    display={{ xs: "none", md: "block" }}
                />
                <Grid item xs={1} sm={1} md={2}>
                    <Typography>THE NAME</Typography>
                </Grid>
                <Grid item xs={1} sm={1} md={9}>
                    <Grid container spacing={{ xs: 4 }} columns={{ xs: 1, sm: 1, md: 9 }}>
                        <Grid item xs={1} sm={1} md={4}>
                            <Typography>Carmel</Typography>
                            <Typography>[kahr-mel]</Typography>
                            <Typography>(n) A quaint, foggy beach town on the California coast</Typography>
                        </Grid>
                        <Grid item xs={1} sm={1} md={4}>
                            <Typography>Kama'aina</Typography>
                            <Typography>[kah-muh–ahy-nuh]</Typography>
                            <Typography>(n) one who was born in Hawaii</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                
                <Box
                    component={Grid}
                    item
                    xs={1}
                    display={{ xs: "none", md: "block" }}
                />
                <Grid item xs={1} sm={1} md={2}>
                    <Typography>THE MISSION</Typography>
                </Grid>
                <Grid item xs={1} sm={1} md={9}>
                    The Carmel Kama'aina is your one stop shop for healthy, fun recipes and music to jam to while you cook. The goal should be no matter what you click, you look at the photo and the recipe and think “I can do that!” And so you do. P.S. I work about 50-60 hours a week, so I promise all these recipes are totally doable for us busy people!
                </Grid>

                <Box
                    component={Grid}
                    item
                    xs={1}
                    display={{ xs: "none", md: "block" }}
                />
                <Grid item xs={1} sm={1} md={2}>
                    <Typography>THE MISSION</Typography>
                </Grid>
                <Grid item xs={1} sm={1} md={9}>
                    <Typography>
                        The Carmel Kama'aina is your one stop shop for healthy, fun recipes and music to jam to while you cook. The goal should be no matter what you click, you look at the photo and the recipe and think “I can do that!” And so you do. P.S. I work about 50-60 hours a week, so I promise all these recipes are totally doable for us busy people!
                    </Typography>
                </Grid>

                <Box
                    component={Grid}
                    item
                    xs={1}
                    display={{ xs: "none", md: "block" }}
                />
                <Grid item xs={1} sm={1} md={2}>
                    <Typography>THE PERSON</Typography>
                </Grid>
                <Grid item xs={1} sm={1} md={9}>
                    <Typography>By day, I'm a Senior Deals Analyst at an international payments company, but by nights and weekends I've always found myself playing around in the kitchen. My Italian heritage and childhood Hawaiian culture instilled in me a reverence for food as a way to connect people and express love. Spending my later childhood in Carmel introduced me to a thriving food scene, and college in LA opened up my eyes to how alluring one can make healthy food. Which, as a former competitive ballerina, I value food that makes your body feel as good as it tastes. I've always had way more fun creating my own recipes, and through The Carmel Kama'aina, I hope you'll have fun re-creating them as well.</Typography>
                </Grid>

                <Box
                    component={Grid}
                    item
                    xs={1}
                    display={{ xs: "none", md: "block" }}
                />
                <Grid item xs={1} sm={1} md={2}>
                    <Typography>THE OPEN INVITE</Typography>
                </Grid>
                <Grid item xs={1} sm={1} md={9}>
                    <Typography>Want to get in touch or work together? I love hearing feedback on my recipes so please tell me what you loved, hated, or adapted. I'm also always open to new products and tips to make healthy cooking easier and happier for my followers: whether ingredients, flatware, cooking tools, or nutrition/lifestyle.</Typography>
                </Grid>
            </Grid>
        </>
    );
}


export default AboutPage;
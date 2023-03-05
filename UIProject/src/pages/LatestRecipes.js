import React from 'react';
import { Typography, Grid } from '@mui/material';
import recipeData from '../data/recipeData';
import RecipePreview from '../components/RecipePreview';


function LatestRecipes(props) {
    return (
        <>
            <Typography 
                variant='h2'
                sx={{
                    margin: 5
                }}
            >
                Latest Recipes
            </Typography>
            <Grid container spacing={{ xs: 4 }} columns={{ xs: 1, sm: 3 }}>
                {recipeData.map((recipe, index) => (
                    <Grid item xs={1} key={index}>
                        <RecipePreview recipe={recipe}/>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}


export default LatestRecipes;
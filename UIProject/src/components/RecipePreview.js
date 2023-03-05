import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import './RecipePreview.css';


function RecipePreview(props) {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    maxHeight: "20rem",
                    width: "100%",
                    overflow: "hidden",
                    alignItems: "center"
                }}
            >
                <img height="auto" width="100%" src={props.recipe.imageUrl} alt="Recipe Preview "/>
            </Box>
            <div className="recipetitle">{props.recipe.recipeTitle}</div>
        </>
    );
}


export default RecipePreview;
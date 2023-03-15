import React, {useEffect} from 'react';
import { Grid, Typography, Box } from '@mui/material';
import APIEndpoints from '../../data/APIEndpoints';
import axios from 'axios';
import useCKContext from '../../context/CKContext';


function LatestPoetry(props) {
    const { poems, setPoems } = useCKContext();
    useEffect(() => {
        if(poems.length === 0) {
            console.log("test")
            axios.get(APIEndpoints.GET_POEMS)
                .then((response) => {
                    console.log(response.data);
                    setPoems(response.data.Items);
                });
        }
    }, []);

    return (
        <>
            <Typography variant="h2" className='pageTitle'>Latest Poetry</Typography>
            <Typography>I know, this has always been a food blog. Your one-stop-shop for healthy, easy recipes. And I promise it will continue to be! But here's the thing- food and poetry aren't so far apart to me. Both are there to nourish us: one for your body and one for your mind. And both come from my heart to yours— hopefully, to make your life a little bit easier: whether that's in figuring out what to do in the kitchen or in reading something that helps you figure out what's going on in your mind.</Typography>
            <Grid>
                {
                    poems.map((poem) => {
                        return
                    })
                }
            </Grid>
            
            <Grid container spacing={{ xs: 4 }} columns={{ xs: 1, md: 2 }}>
                {poems.map((poem, index) => (
                    <Grid item xs={1} key={index}>
                        {
                            poem.poemContent.map((section, i2) => {
                                return <Typography key={`p-${index}-${i2}`} variant='p'>{section.content}</Typography>
                            })
                        }
                    </Grid>
                ))}
            </Grid>
        </>
    );
}


export default LatestPoetry;
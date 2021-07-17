import React from 'react';
import { Container, Grid } from '@material-ui/core';
function Loader() {
    return (
        <Container>
            <Grid container style={{ height: window.innerHeight - 50 }}
                alignContent={"center"}
                justify={"center"}
            >
                <Grid
                    container
                    alignContent="center"
                    justify="center"
                >
                    <div class="lds-hourglass"></div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Loader;
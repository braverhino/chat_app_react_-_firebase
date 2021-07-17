import { Container, Grid, Box, Button } from '@material-ui/core';
import React, { useContext } from 'react';
import firebase from 'firebase';
import { Context } from '../index';

function Login() {
    const { auth } = useContext(Context)


    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        await auth.signInWithPopup(provider)
    }

    return (
        <Container>
            <Grid container style={{ height: window.innerHeight - 50 }}
                alignContent={"center"}
                justify={"center"}
            >
                <Grid style={{ width: 400, background: 'lightgray' }}
                    container
                    alignContent="center"
                    justify="center"
                    direction="column"
                >
                    <Box p={5}>
                        <Button onClick={login} variant={'outlined'}>Sign in with Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Login;
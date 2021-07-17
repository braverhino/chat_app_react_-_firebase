import React, { useContext } from 'react';
import { AppBar, Button, Grid } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../index';
function NavBar() {

    const { auth } = useContext(Context)
    const [user] = useAuthState(auth)

    return (
        <AppBar color={'secondary'} position="static">
            <Toolbar variant={"dense"}>
                <Grid container justify={'flex-end'}>
                    {
                        user ? <Button onClick={() => auth.signOut()} variant={'outlined'}>Log out</Button>
                            :
                            <NavLink to={LOGIN_ROUTE}>
                                <Button variant={'outlined'}>Log in</Button>
                            </NavLink>

                    }


                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
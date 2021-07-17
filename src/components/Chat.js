import { Avatar, Button, Container, Grid, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Context } from '../index';
import Loader from './Loader';
import firebase from 'firebase';

function Chat() {

    const { auth, firestore } = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )


    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoUrl: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()

        })
        setValue('')
    }


    if (loading) {
        return <Loader />
    }
    return (
        <Container>
            <Grid container
                justify="center"
                style={{ height: window.innerHeight - 70, marginTop: 20 }}>

                <div style={{ width: '80%', height: '60vh', border: '1px solid gray', overflowY: 'auto' }}>
                    {
                        messages.map(message =>
                            <div style={{
                                margin: 10,
                                backgroundColor: user.uid === message.uid ? 'green' : 'red',
                                marginLeft: user.uid === message.uid ? 'auto' : '10px',
                                maxWidth: 350,
                                padding: 10,
                                borderRadius: user.uid === message.uid ? '15px 0 15px 15px' : '0 15px 15px 15px',
                                color: '#fff',

                            }}>
                                <Grid container
                                    alignItems="center"
                                    style={{
                                        borderBottom: '1px solid #fff',
                                        marginBottom: 5,
                                    }}
                                    justifyContent='space-between'

                                >
                                    <Avatar style={{ marginRight: 20, marginBottom: 10 }} src={message.photoUrl} />
                                    <div >{user.uid === message.uid ? 'Me' : message.displayName}</div>
                                </Grid>
                                <div style={{ wordBreak: 'break-word', maxWidth: 400 }}>{message.text}</div>
                            </div>

                        )
                    }
                </div>


                <Grid container
                    direction="column"
                    alignItems="flex-end"
                    style={{ width: '80%' }}
                >
                    <TextField
                        fullWidth
                        maxRows={2}
                        variant="outlined"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <Button
                        onClick={sendMessage}
                        variant="outlined"
                    >
                        Send
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Chat;
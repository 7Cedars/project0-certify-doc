/*
This component handles messaging to the user. Either negative, neutral or positive. 
In any component the setMessage function can be called, that ten results in a message on top of the app. 
There are a number of preset messages, but direct parsing of error message is also possible.
It is not entirely bug free yet.. 
*/ 

import { useContext } from "react";
import { UserContext } from "./userContext";
import { Container, Header, Segment } from "semantic-ui-react"; 

const Messages = () => {

    const { message, setMessage } = useContext(UserContext);
    let content = { }
    
    // used to let message disappear by rendering it invisible. 
    if (message === "invisible") {
        content = { color: 'green',
                    primary: '...', 
                    secondary: '...',
                    visible: false
                }
    }

    // default error message 
    // @BUG does NOT work correctly yet! 
    if (message.length > 20) {
        content = { color: 'red',
                    error: message,
                    visible: true
                }
                setTimeout(() => { setMessage('invisible') }, 5000)
    }

    // What follows is a list of preset messages. 
    if (message === "wrongNetwork") {
        content = { color: 'red',
                    primary: 'Change the network to Goerli.',
                    secondary: 'This is a test app that runs on the Goerli test network.',
                    visible: true
                }
                setTimeout(() => { setMessage('invisible') }, 5000)
    }
    if (message === "notConnected") {
        content = { color: 'red',
                    primary: 'Please connect your wallet.',
                    visible: true
                }
                setTimeout(() => { setMessage('invisible') }, 5000)
    }
    if (message === "MetamaskNotInstalled") {
        content = { color: 'red',
                    primary: 'Please install MetaMask.',
                    secondary: 'This is a test app that only runs with MetaMask. It seems your browser does not have MetaMask installed.',
                    visible: true
                }
                setTimeout(() => { setMessage('invisible') }, 5000)
    }   

    if (message === "warningTestApp") {
        content = { color: 'red',
                    primary: 'Warning: this is a test dapp.',
                    secondary: 'It only runs on the Goerli test network.',
                    visible: true
                }
                setTimeout(() => { setMessage('invisible') }, 5000)
    }

    if (message === "errorUpload") {
        content = { color: 'red',
                    primary: 'Unable to upload certificate. Are you connected to an Ethereum wallet?',
                    secondary: 'Uploading certificates is only possible when connected to an Ethereum wallet through MetaMask.',
                    visible: true
                }
    }

    if (message === "uploadInProgress") {
        content = { color: 'blue',
                    primary: 'Currently uploading certificate to the blockchain.',
                    secondary: 'This can take a few minutes.',
                    visible: true
                }
    }

    if (message === "uploadSuccessful") {
        content = { color: 'green',
                    primary: 'Upload succesfull',
                    secondary: 'Your certificate has been succesfully uploaded to the Ethereum blockchain',
                    visible: true
                }
                setTimeout(() => { setMessage('invisible') }, 5000)
    }

    if (message === "revokeInProgress") {
        content = { color: 'blue',
                    primary: 'Currently revoking certificate.',
                    secondary: 'This can take a few minutes.',
                    visible: true
                }
                setTimeout(() => { setMessage('invisible') }, 5000)
    }

    if (message === "revokeSuccessful") {
        content = { color: 'green',
                    primary: 'Revoke succesfull.',
                    secondary: 'Your certificate has been succesfully revoked.',
                    visible: true
                }
                setTimeout(() => { setMessage('invisible') }, 5000)
    }

    if (message === "noUserInput") {
        content = { color: 'red',
                    primary: 'No user input provided', 
                    secondary: 'Please insert an address or document.', 
                    visible: true
                }
                setTimeout(() => { setMessage('invisible') }, 5000)
    }

    if (message === "invalidUserInput") {
        content = { color: 'red',
                    primary: 'Invaled user input provided', 
                    secondary: 'Please insert a valid address or document.', 
                    visible: true
                }
                setTimeout(() => { setMessage('invisible') }, 5000)
    }
    
    // Rendering actual message. 
    return (
        <Container>
            <Segment textAlign="center" 
                color = {content.color} 
                style = {{
                marginTop: '.5em',
                fontSize: 'large', 
                opacity: content.visible? '100%' : '0%'
            }}>
                <Header as='h3' 
                    color = {content.color} 
                    style = {{ 
                    marginBottom: '.5em', }}> 
                    {content.primary}
                </Header>
                {content.secondary} <br /> 
                {content.error ? `Full error message: ${content.error}` : null } 
            </Segment> 
        </Container>
    )
}

export default Messages
/* 
For now, this is a completely static page. 
I seperated it in a left and right side, that are combined at the end. 
Main reaosn to do so is that I might want to implement some more fancy transitions down the line.  
*/

import { useContext } from "react";
import { UserContext } from "./userContext";
import { Container, Header, Button, Segment, Grid, Transition } from "semantic-ui-react"; 

const FrontPage = () => {
    
    const { tab, setTab } = useContext(UserContext);
    const visible = false;
    
    const leftSidePage = (       
        <Container className="userInputBox"  >
            <Segment basic textAlign = 'right' style={{
                marginBottom: '3em',
                marginTop: '.5em',
                fontSize: 'large',
                color: "none"
                }}>
            <Header
                as='h1'
                content='Certify.doc' 
                style={{
                fontSize: '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                color: "white"
                }}
            />
            <Header
                as='h2'
                content='Providing immutable certifications 
                of documents’ authenticity. 
                Built on the Ethereum blockchain.'
                style={{
                fontSize: '1.7em',
                fontWeight: 'normal',
                marginTop: '1.5em',
                color: "white"
                }}
            />
                <Button primary 
                size='huge' 
                onClick={() => setTab('About')}
                style={{ marginTop: '3.1rem' }}>
                Find out more 
                </Button>
            </Segment>
        </Container>
    )

    const rigthSidePage = (
        <Container className="userInputBox"  >
            <Segment basic textAlign = 'left' style={{
                marginBottom: '3em',
                marginTop: '2em',
                fontSize: 'large',
                color: "none"
                }}>
            <Header
                as='h1'
                content='social authority on the blockchain' 
                style={{
                fontWeight: 'normal',
                marginBottom: 0,
                color: "white"
                }}
            />
            <Header
                as='h2'
                style={{
                fontWeight: 'normal',
                marginTop: '1.4em',
                color: "white"
                }}> 
                Certify.doc enables people and organisations to vouch for the authenticity of documents. 
                <br/>
                <br/>
                It issues certificates of authenticity that are immutable, non-tradable and revokable. 
                <br/>
                <br/>
                Checking the authenticy of a document is as easy as submitting a document. 
                </Header>
                <Button primary 
                        size='huge' 
                        onClick={() => setTab('DocHash_Certs')}
                        style={{ marginTop: '.9rem' }}>
                        Check Authenticity
                </Button>
            </Segment>
        </Container>
    )   


    if (tab == 'Home') {
        return (
            <Container> 
                <Grid padded> 
                    <Grid.Column width = '8' >
                        {leftSidePage}
                    </Grid.Column> 
                    <Grid.Column width = '8' > 
                        {/*  <Transition visible = {visible} animation='scale' duration={500}> */}
                            {rigthSidePage}
                        {/*  </Transition> */}
                    </Grid.Column> 
                </Grid>
            </Container>
        ) 
    }
}

export default FrontPage
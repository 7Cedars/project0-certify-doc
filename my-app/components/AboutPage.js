
/* 
This is an entirely static page, that provides background information on the Dapp. 
*/ 

import { useContext } from "react";
import { UserContext } from "./userContext";
import { Container, Header, Segment } from "semantic-ui-react"; 

const AboutPage = () => {
    
    const { tab, setTab, heightComponent } = useContext(UserContext);

    if (tab == "About") {

    return (  
            <Container className="userInputBox" >
                <Segment basic textAlign = "left" style={{
                    fontSize: "large",
                    }}>
                <Header
                    as="h1"
                    content="Certify.doc: social authority on the blockchain" 
                    style={{
                    fontWeight: "normal",
                    marginBottom: 0,
                    color: "white"
                    }}
                />
                <Container 
                    style={{
                        marginTop: "1.5em",
                        color: "white"
                    }}
                > 
                    Certify.doc provides a single utility: It issues a record on the ethereum blockchain that relates two addresses (an issuer and recipient) to an offline document. 
                    These records are immutable, non-tradable and revokable. They are similar to non-fungible tokens (NFTs) but have a a few important differences.
                    <br/>
                    <br/>
                    Certificates of authenticity
                    <li> cannot be traded or exchanged. They can only revoked.</li>
                    <li> are accessed by uploading the original document. They are readily accesible to those that are not familiar with blockchain technology.</li>
                    <br/>
                    {/* It means that */}
                    {/* <li> a person or organisation can issue a certificate to vouch for the authenticity of a document. </li>
                    <li> this document cannot be changed, only revoked. </li>
                    <li> certificates can also be used to give credibility of another person or organisation.</li>
                    <li> certificates are readily accesible to those that are not familiar with blockchain technology.</li> */}
                    {/* <br/> */}
                    Some possible use cases are
                    <li> Educators that certify the authenticity of their degrees.</li> 
                    <li> Employers that certify authenticy of employers statements.</li> 
                    <li> Individuals that authenticate their wills. </li> 
                    <br/>
                    In brief, certify.doc relates the social authority behind an ethereum address to a digital document, 
                    and expresses a relationship between two social actors.
                    <br/>
                    <br/>
                    {/* Still need to include links here. */}
                    Check out the github repository for the react frontend and solidity backend.  

                    </Container>
                </Segment>
            </Container>
        )
    }
}

export default AboutPage
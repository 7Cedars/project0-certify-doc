/*
This file creates the component to check for certificates by document, issuer address or recipient address. 
In each case the object userInput is updated that triggers the relevant calls in index.js to the contract.    
*/

import React, { useContext } from "react";
import { UserContext } from "./userContext";
import { Container, Button, Icon, Segment, Form, Input, Header } from "semantic-ui-react"; 
import { utils } from "ethers"; 

let fileInput; 

 
const CheckCertificates = ({ handleSubmit }) => {

  const { setUserInput, tab, loading } = useContext(UserContext);
  
  // Takes an uploaded document, creates a hash using keccak256 and sets it as userinput. 
  const changeHandler = async (e) => {

    fileInput = e.target.files[0]; 
    let fileReader = false;
    let result; 
  
    fileReader = new FileReader();
    fileReader.readAsDataURL(fileInput);
    fileReader.onload = function () {
    result = fileReader.result; 
    // NB: Hashing algorithm:  
    setUserInput(utils.keccak256( utils.toUtf8Bytes(result) )); 
    }
  }

    // These are input comoponents that take an address - either issuer or recipient according to selected tab.   
    if (tab == 'Issued_Certs' || 
        tab == 'Received_Certs') {

        return (
            <Container >
                <Segment placeholder textAlign = 'center' style={{
                    marginBottom: '3em',
                    marginTop: '.5em',
                    }}>
                        
                        <Header as ="h2"> 
                        { tab == 'Issued_Certs' ? 
                          'What certificates did an Eth address issue?' : 
                          'What certificates did an Eth address receive?'                
                        }
                        </Header>
                        <Container textAlign = 'center'> 
                        { tab == 'Issued_Certs' ? 
                          <Icon name='user outline' 
                                size = 'huge'
                                style={{
                                    marginTop: '.2em', 
                                    marginBottom: '.5em'
                              }} /> : 
                            <Icon name='checkmark' 
                                  size = 'huge' 
                                  style={{
                                    marginTop: '.2em', 
                                    marginBottom: '.5em'
                              }} />   
                        }
                          
                        </Container>
                        <Form onSubmit = { handleSubmit } >                                     
                          <Segment textAlign = 'center' style={{ }}>
                          <Header as ="h4" content = 'Step 1: Provide an Ethereum address' />
                          <input 
                              type='text'
                              placeholder='Ethereum adress: 0x00...' 
                              onChange = {(e) => setUserInput(e.target.value)} 
                              />
                          </Segment>
                          <Segment  textAlign = 'center' style={{ }}>
                          <Header as ="h4" content = 'Step 2: Submit address' />
                            <Button fluid primary loading = { loading == 'loading' }
                            style={{
                              marginBottom: '.5em',
                              marginTop: '1em',
                              textAlign: 'center',
                              fontSize: 'medium',
                            }}>
                            Submit Address
                            </Button> 
                          </Segment>
                          <Segment  textAlign = 'center' style={{ }}>
                            <Header as ="h4" content = 'Step 3: Check the resulting certificate(s).' />
                            <Icon name='arrow circle right' color = 'blue' size = 'big' >
                          </Icon>
                          </Segment>
                        </Form>
                  </Segment>
            </Container>
        ) 
    }

    // These is input comoponent that takes a file - this can be anyfile.    
    if (tab == 'DocHash_Certs') {

        return (
          <Container >
                <Segment placeholder textAlign = 'center' style={{
                    marginBottom: '3em',
                    marginTop: '.5em',
                    }}>
                        <Header as ="h2" content = 'Has a document been certified as authentic?' /> 
                        <Container textAlign = 'center'> 
                          <Icon name='file image outline' size = 'huge' style={{
                                marginTop: '.2em', marginBottom: '-.2em'
                                }}>
                          </Icon>
                        </Container>
                        <Form onSubmit = { handleSubmit }>
                          <Segment textAlign = 'center' style={{ }}>
                          <Header as ="h4" content = 'Step 1: Select a file' />
                            <Container fluid>
                                <input  className="custom-file-input"
                                  type="file"                 
                                  single="true"
                                  // as file cannot be set as userinput directly, a change handler (see above) is called first. 
                                  onChange={ changeHandler } 
                                  style={{marginBottom: '0.5em' }}
                                />
                              The document will not be saved in your browser or uploaded to a server.
                            </Container>
                          </Segment>
                          <Segment  textAlign = 'center' style={{ }}>
                            <Header as ="h4" content = 'Step 2: Submit Document' />
                            <Button primary loading = { loading == 'loading'  }
                              style={{
                                marginBottom: '.5em',
                                marginTop: '.0em',
                                textAlign: 'center',
                                fontSize: 'medium',
                                }}>
                                Submit Document
                            </Button>  
                          </Segment>
                          <Segment  textAlign = 'center' style={{ }}>
                            <Header as ="h4" content = 'Step 3: Check the resulting certificate(s).' />
                            <Icon name='arrow circle right' color = 'blue' size = 'big' >
                          </Icon>
                          </Segment>
                        </Form>
                  </Segment>
            </Container>
        ) 
      }
}

export default CheckCertificates
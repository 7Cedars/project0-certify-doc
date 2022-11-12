/* 
This component handles uploading of a document. 
It takes a document, input of recipient address and description.  
It directly calls the function certify at index.js that is the handler for calling issueCertificate at the blockchain contract. 
*/

// Setup 
import { Container, Header, Button, Icon, Segment, Form, Grid, Input } from "semantic-ui-react"; 
import { UserContext} from "./userContext";
import { useContext } from "react";
import React from "react";
import { utils } from "ethers"; 

let recipientInput = '0x0000000000000000000000000000000000000000'; 
let descriptionInput = ' '; 

const IssueCertificate = ({ certify }) => {

    const { tab, loading, userInput, setUserInput, setMessage } = useContext( UserContext );

    // Change handler to create a hash of the uploaded document. 
    const changeHandler = async (e) => {
        let fileInput = e.target.files[0]; 
        let fileReader = false;

        fileReader = new FileReader();
        fileReader.readAsDataURL(fileInput);
        fileReader.onload = function () {
        let result = fileReader.result; 
        // NB: Here the hashing is done! // 
        setUserInput(utils.keccak256( utils.toUtf8Bytes( result ))); // 0x12, 0x34sha256 // sha256(result).toString()
        }
    }

    // onSubmit handler: Calling the certify function at index.js.  
    const onSubmit = async (e) => {    
        certify([userInput, recipientInput, descriptionInput])
      };
    
    // rendering the certify page. 
    if (tab === 'Certify') {

        return (
            <Container>
            <Grid padded>
                <Grid.Column width = '8'> 
                <Container >
                    <Segment placeholder textAlign = 'center' style={{
                        marginTop: '.5em',
                        }}>            
                            {/* Segment for uploading document to be certified */}        
                            <Header as ="h2" content = 'Issue your own certificate of authenticity' /> 
                            <Container textAlign = 'center'> 
                                <Icon name='file image outline' size = 'huge' style={{
                                        marginTop: '.2em', marginBottom: '-.3em'}}>
                                </Icon>
                            </Container>
                            <Form >
                                <Segment textAlign = 'center' style={{ }}>
                                <Header as ="h4" content = 'Step 1: Select a file' />
                                    <Container fluid>
                                        <input  className="custom-file-input"
                                        type="file"                 
                                        single="true"
                                        // the changeHandler (see above) hashes the uploaded document. 
                                        onChange={ changeHandler } 
                                        style={{marginBottom: '0.5em', fontSize: 'medium' }}
                                        />
                                        The document will not be saved in your browser or uploaded to a server.
                                    </Container>
                                </Segment> 
                            </Form>
                        </Segment>
                </Container>
                </Grid.Column> 
                <Grid.Column width = '8'> 
                    <Container > 
                        <Segment textAlign = 'left' 
                                style={{  
                                fontSize: 'medium',
                                marginTop: '.5em'
                            }}>
                            <Form onSubmit = { onSubmit } 
                                    style={{ fontSize: 'medium' }}>
                                <Segment textAlign = 'center' style={{ }}>
                                {/* The document hash (after it is created) is shown in the app. It is NOT a secret address. Just needs to be unique. */}
                                <Header as ="h4" content = 'Step 2: Create Unique Document Identifier (automatic)' />
                                    { userInput ? 
                                    <Segment color='green' style={{fontSize: 'medium', overflowWrap: 'break-word' }} > 
                                    { userInput } 
                                    </Segment>
                                    :
                                    <Segment color='red' style={{fontSize: 'medium', color: "lightGrey"}} > 
                                    Unique document identifier. 
                                    </Segment>
                                    }
                                </Segment>
                                {/* Input recipient address */}
                                <Segment  textAlign = 'center' style={{ }}>
                                    <Header as ="h4" content = 'Step 3: Add a recipient address (optional)' />         
                                    <Form.Field  style={{ marginTop: '1em', fontSize: 'medium' }}>
                                    <input 
                                        type='text'
                                        placeholder='Ethereum adress: 0x00...'  
                                        onChange= { (e) => recipientInput = e.target.value }
                                        />
                                    </Form.Field>
                                </Segment>
                                {/* Input description */}
                                <Segment  textAlign = 'center' style={{ }}>
                                    <Header as ="h4" content = 'Step 4: Add a brief description (optional)' />
                                    <Form.Field style={{ marginTop: '1em', fontSize: 'medium' }}>
                                    <input 
                                        type='text'
                                        placeholder='Content of document.' 
                                        onChange= { (e) => descriptionInput = e.target.value }
                                        />
                                    </Form.Field>
                                </Segment>
                                {/* Submit button */}
                                <Segment  textAlign = 'center' style={{ }}>
                                    <Header as ="h4" content = 'Step 5: Upload Certificate' />
                                    <Form.Field  style={{ marginTop: '1em' }}>
                                        <Button fluid primary type='submit'
                                                loading = { loading != null } 
                                                disabled = { !userInput } 
                                                style={{     
                                                fontSize: 'medium'
                                                }}> 
                                            Upload certificate to the ethereum blockchain
                                        </Button>
                                    </Form.Field>
                                </Segment>
                                </Form>
                            </Segment>
                        </Container>
                    </Grid.Column> 
                </Grid>
            </Container> 
        )
    }
  }

export default IssueCertificate
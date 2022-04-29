import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import { Container, Card, Row, ListGroup, ListGroupItem } from 'react-bootstrap';

const UseEffectAPI = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const getUsers = async () => {
        try {

            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            
            setUsers(await response.json());
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 3000);

        } catch (error) {
            console.log(loading)
            console.log(error)
        }
    }


    useEffect(() => {
        getUsers();

    }, []);
    

    return (
        <>
            <div className="App">
               
                <div>
                    {loading ? <div className="spinner">
                        <div className="cube1"></div>
                        <div className="cube2"></div>
                    </div> :
                        <div>


                            <Container >

                                <Row className='row'>

                                    {
                                        users.map((curElm) => {
                                            return (
                                                
                                                <Card key={curElm.id} className='card' style={{ padding: 10, margin: 25, width: '18rem' }}>
                                                    <Card.Img
                                                        src={`https://avatars.dicebear.com/v2/avataaars/${curElm.username}.svg?options[mood][]=happy`}
                                                        alt="Avatar"
                                                        style={{ width: 200, height: 200 }} />
                                                    <h4>{curElm.name}</h4>
                                                    <ListGroup className="list-group-flush">
                                                        <ListGroupItem><strong>Email: </strong>{curElm.email} </ListGroupItem>
                                                        <ListGroupItem><strong>Phone: </strong>{curElm.phone}</ListGroupItem>
                                                        <ListGroupItem><strong>Address: </strong>{curElm.address.street}, {curElm.address.suite}, {curElm.address.city}, {curElm.address.zipcode}</ListGroupItem>
                                                        <ListGroupItem><strong>WebSite: </strong>{curElm.website}</ListGroupItem>
                                                        <ListGroupItem><strong>Company Name: </strong>{curElm.company.name}</ListGroupItem>
                                                    </ListGroup>
                                                </Card>
                                                

                                            )
                                        })
                                    }
                                </Row>
                            </Container>
                        </div>
                    }
                </div>
            </div>
        </>
    );

}

export default UseEffectAPI
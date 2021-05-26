import React, { useCallback, useEffect, useState } from 'react';
import api from './api';

import { IoMdSettings } from 'react-icons/io';
import { GrClose } from 'react-icons/gr';

import { Modal, Button } from 'react-bootstrap';
import GlobalStyle from './globals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from './styles';



const App = ()=> {
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState({});

  useEffect(()=>{
    api.get('/users').then(response=>{
      setUsers(response.data);
      console.log('teste');
    });
  },[]);


    const [show, setShow] = useState(false);

    const handleClose = useCallback(()=>setShow(false),[]);
    const handleShow = useCallback((userData)=>{
      setUserSelected(userData);
      setShow(true)
    },[]);

    return (
      <>
        <GlobalStyle/>
        <Container className="py-5">
          <div className="container">
            <div className="row modal-content">
              <div className="col-12 py-3 modal-header">
                <h2 className="modal-title">
                  Users
                </h2>
              </div>
              <div className="modal-body col-12">
                <hr />
                <div className="row">
                  <div className="col-4">
                    <h3 className="font-weight-bold">
                      Actions
                    </h3>
                  </div>
                  <div className="col-4">
                    <h3 className="font-weight-bold">
                      User name
                    </h3>
                  </div>
                  <div className="col-4">
                    <h3 className="font-weight-bold">
                      Email address
                    </h3>
                  </div>
                  <div className="col-12">
                    <hr />
                  </div>
                  <div className="col-12">
                    {users.map(user => (
                      <div className="row" key={user.id}>
                        <div className="col-4">
                          <Button variant="primary" onClick={()=>handleShow(user)}>
                            <IoMdSettings/> Actions
                          </Button>
                        </div>
                        <div className="col-4">
                          <h4>
                            {user.name}
                          </h4>
                        </div>
                        <div className="col-4">
                          <h4>
                            {user.email}
                          </h4>
                        </div>
                        <div className="col-12">
                          <hr />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        {Object.keys(userSelected).length > 0 && (
          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>Modal heading</Modal.Title>
              <button onClick={handleClose}>
                <GrClose/>
              </button>
            </Modal.Header>
            <Modal.Body>
              <div>
                <h2 className="h4">
                  Address
                </h2>
                <p className="mb-0">
                  Street: {userSelected.address.street}
                </p>
                <p className="mb-0">
                  {userSelected.address.suite}
                </p>  
                <p className="mb-0">
                  City: {userSelected.address.city}
                </p>
                <p className="mb-0">
                  Zipcode: {userSelected.address.zipcode}
                </p>
              </div>
              <div>
                <h2 className="h4 mt-4">
                  Company
                </h2>
                <p className="mb-0">
                  Name: {userSelected.company.name}
                </p>
                <p className="mb-0">
                  Catch Phrase: {userSelected.company.catchPhrase}
                </p>  
                <p className="mb-0">
                  bs: {userSelected.company.bs}
                </p>
              </div>
            </Modal.Body>
          </Modal>
        )}
      </>
    );
  };

export default App;

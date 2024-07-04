import React, { useState } from 'react';
import Header from "../Home/Header";
import { FormControl, useFormControlContext } from '@mui/base/FormControl';
import { styled } from '@mui/system';
import clsx from 'clsx';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {  FormGroup, Label, Input,  Card, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';



import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./ProfileForm.css"

function UpdateProfile() {
    const [profilePic, setProfilePic] = useState(null);
    const [preview, setPreview] = useState(null);
    const [formData, setFormData] = useState({
      pinCode: '',
      city: '',
      state: ''
    });
  
    const states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file && file.type.startsWith('image/')) {
        setProfilePic(file);
        setPreview(URL.createObjectURL(file));
      } else {
        setProfilePic(null);
        setPreview(null);
      }
    };
  
    const handlePinCodeChange = async (e) => {
      const pinCode = e.target.value;
      setFormData({ ...formData, pinCode });
  
      if (pinCode.length === 6) {
        try {
          const response = await axios.get(`https://api.postalpincode.in/pincode/${pinCode}`);
          if (response.data[0].Status === 'Success') {
            const city = response.data[0].PostOffice[0].District;
            const state = response.data[0].PostOffice[0].State;
            setFormData({ ...formData, city, state });
          }
        } catch (error) {
          console.error("Error fetching city and state", error);
        }
      }
    };
  
  return (
    <>
    {<Header/>}
    <Form className='profileForm'>
    <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridProfile">
  <Form.Label>Profile Pic</Form.Label>
  <Form.Control
    type="file"
    accept="image/*"
    onChange={handleFileChange}
  />
 
</Form.Group> </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control  placeholder="Enter name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridProfile">
          <Form.Label>Profile</Form.Label>
          <Form.Control  placeholder="Enter Profile" />
        </Form.Group>
        {/* <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group> */}
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label >Zip</Form.Label>
         
          <Form.Control />
        </Form.Group>
         
          
              {/* <Col md={4}>
                <FormGroup>
                <Form.Label >Zip</Form.Label>
                  <Input
                    id="exampleZip"
                    name="zip"
                    value={formData.pinCode}
                    onChange={handlePinCodeChange}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                <Form.Label>City</Form.Label>
                  <Input
                    id="exampleCity"
                    name="city"
                    value={formData.city}
                    readOnly
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="formGridState">State</Label>
                  <Input
                    type="select"
                    name="state"
                    id="formGridState"
                    value={formData.state}
                    readOnly
                  >
                    {states.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </Input>
                </FormGroup>
              </Col> */}
      </Row>

     
      <div className="d-flex justify-content-end">
  <Button variant="secondary" className="me-2" type="button">
    Cancel
  </Button>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</div>

    </Form>
    </>
  );
}


export default UpdateProfile
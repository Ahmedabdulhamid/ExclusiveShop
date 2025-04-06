import React from 'react'
import { Container, Row, Col, Dropdown } from "react-bootstrap";
const HeaderTop = () => {
  return (
    <div className="bg-black text-white py-2 border-top border-dark">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col md={10} className="text-center text-md-center">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <strong>ShopNow</strong>
          </Col>
          <Col md={2} className="text-end">
            <Dropdown>
              <Dropdown.Toggle variant="black" className='text-light'>
                English
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">English</Dropdown.Item>
                <Dropdown.Item href="#">Arabic</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HeaderTop
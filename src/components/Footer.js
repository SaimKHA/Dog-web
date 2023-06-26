import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const footer = './image/footer.png';

function Footer() {
  return (
    <>

        <section className='Footer  mt-5'>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className='footer'>
                            <div className='footer-logo'>
                                <img src={footer} alt=''/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    </>
  )
}

export default Footer;


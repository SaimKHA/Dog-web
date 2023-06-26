import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const card  = './image/card.png';
const point  = './image/point.svg';
const review  = './image/review.svg';
const white  = './image/white.svg';
const Nevena =  './image/Nevena.png';
const hannah = './image/hannah.png';
const oceane = './image/oceane.png';
const krsitin = './image/krsitin.png';
const cairn  =  './image/cairn.png';
const sarah  =   './image/sarah.png';
const piedmont =  './image/piedmont.png';

function Cards() {
  return (
    <>

            <section className='cards'>
                <Container>
                    <Row>
                        <h2 className='font-size-22 pt-5 pb-3'>Looking for boarding</h2>
                        <Col md={3}>
                            <div className='card-box'>
                                <img className="w-100" src={card} alt='' />
                                <Row className='pt-3 pb-3'>
                                    <Col md={6}>
                                        <h3 className='font-size-18 m-0'>Emily</h3>
                                        <p className='font-size-14 m-0'>Richmond, CA</p>
                                    </Col>
                                    <Col md={6}>
                                    <div className="d-flex flex-row justify-content-end">
                                        <div className="p-0"> <img src={point} alt='' /></div>
                                        <div className="padd-size font-size-13"> <p className='m-0'>20 <span className='points'>Points</span> </p></div>
                                    </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <h3 className='font-size-10 m-0'>Dates need help</h3>
                                        <p className='font-size-12 m-0'>Apr 7th’23 - Apr 8th’23</p>
                                    </Col>
                                    <Col md={6}>
                                        <div className="d-flex flex-row justify-content-end m-0">
                                            <img className='ml-3' src={review} alt='' />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='card-box'>
                                <img className="w-100" src={Nevena} alt='' />
                                <Row className='pt-3 pb-3'>
                                    <Col md={6}>
                                        <h3 className='font-size-18 m-0'>Nevena</h3>
                                        <p className='font-size-14 m-0'>Walnut Creek, CA</p>
                                    </Col>
                                    <Col md={6}>
                                    <div className="d-flex flex-row justify-content-end">
                                        <div className="p-0"> <img src={point} alt='' /></div>
                                        <div className="padd-size font-size-13"> <p className='m-0'>20 <span className='points'>Points</span> </p></div>
                                    </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <h3 className='font-size-10 m-0'>Dates need help</h3>
                                        <p className='font-size-12 m-0'>Apr 9th’23</p>
                                    </Col>
                                    <Col md={6}>
                                        <div className="d-flex flex-row justify-content-end m-0">
                                            <img className='ml-3' src={review} alt='' />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='card-box'>
                                <img className="w-100" src={hannah} alt='' />
                                <Row className='pt-3 pb-3'>
                                    <Col md={6}>
                                        <h3 className='font-size-18 m-0'>Hannah</h3>
                                        <p className='font-size-14 m-0'>San Francisco, CA</p>
                                    </Col>
                                    <Col md={6}>
                                    <div className="d-flex flex-row justify-content-end">
                                        <div className="p-0"> <img src={point} alt='' /></div>
                                        <div className="padd-size font-size-13"> <p className='m-0'>--</p></div>
                                    </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <h3 className='font-size-10 m-0'>Dates need help</h3>
                                        <p className='font-size-12 m-0'>Apr 10th’23</p>
                                    </Col>
                                    <Col md={6}>
                                        <div className="d-flex flex-row justify-content-end m-0">
                                            <img className='ml-3' src={white} alt='' />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='card-box'>
                                <img className="w-100" src={oceane} alt='' />
                                <Row className='pt-3 pb-3'>
                                    <Col md={6}>
                                        <h3 className='font-size-18 m-0'>Oceane</h3>
                                        <p className='font-size-14 m-0'>San Francisco, CA</p>
                                    </Col>
                                    <Col md={6}>
                                    <div className="d-flex flex-row justify-content-end">
                                        <div className="p-0"> <img src={point} alt='' /></div>
                                        <div className="padd-size font-size-13"> <p className='m-0'>20 <span className='points'>Points</span> </p></div>
                                    </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}></Col>
                                    <Col md={6}>
                                        <div className="d-flex flex-row justify-content-end m-0">
                                            <img className='ml-3' src={review} alt='' />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <h2 className='font-size-22 pt-4 pb-3'>All members</h2>
                        <Col md={3}>
                            <div className='card-box'>
                                <img className="w-100" src={krsitin} alt='' />
                                <Row className='pt-3 pb-3'>
                                    <Col md={6}>
                                        <h3 className='font-size-18 m-0'>Kristin</h3>
                                        <p className='font-size-14 m-0'>Piedmont, CA</p>
                                    </Col>
                                    <Col md={6}>
                                    <div className="d-flex flex-row justify-content-end">
                                        <div className="p-0"> <img src={point} alt='' /></div>
                                        <div className="padd-size font-size-13"> <p className='m-0'>20 <span className='points'>Points</span> </p></div>
                                    </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}></Col>
                                    <Col md={6}>
                                        <div className="d-flex flex-row justify-content-end m-0">
                                            <img className='ml-3' src={review} alt='' />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='card-box'>
                                <img className="w-100" src={cairn} alt='' />
                                <Row className='pt-3 pb-3'>
                                    <Col md={6}>
                                        <h3 className='font-size-18 m-0'>Cairn</h3>
                                        <p className='font-size-14 m-0'>Berkeley, CA</p>
                                    </Col>
                                    <Col md={6}>
                                    <div className="d-flex flex-row justify-content-end">
                                        <div className="p-0"> <img src={point} alt='' /></div>
                                        <div className="padd-size font-size-13"> <p className='m-0'>20 <span className='points'>Points</span> </p></div>
                                    </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}></Col>
                                    <Col md={6}>
                                        <div className="d-flex flex-row justify-content-end m-0">
                                            <img className='ml-3' src={review} alt='' />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='card-box'>
                                <img className="w-100" src={sarah} alt='' />
                                <Row className='pt-3 pb-3'>
                                    <Col md={6}>
                                        <h3 className='font-size-18 m-0'>Sarah</h3>
                                        <p className='font-size-14 m-0'>Concord, CA</p>
                                    </Col>
                                    <Col md={6}>
                                    <div className="d-flex flex-row justify-content-end">
                                        <div className="p-0"> <img src={point} alt='' /></div>
                                        <div className="padd-size font-size-13"> <p className='m-0'>--</p></div>
                                    </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}></Col>
                                    <Col md={6}>
                                        <div className="d-flex flex-row justify-content-end m-0">
                                            <img className='ml-3' src={white} alt='' />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='card-box'>
                                <img className="w-100" src={piedmont} alt='' />
                                <Row className='pt-3 pb-3'>
                                    <Col md={6}>
                                        <h3 className='font-size-18 m-0'>LG</h3>
                                        <p className='font-size-14 m-0'>Piedmont, CA</p>
                                    </Col>
                                    <Col md={6}>
                                    <div className="d-flex flex-row justify-content-end">
                                        <div className="p-0"> <img src={point} alt='' /></div>
                                        <div className="padd-size font-size-13"> <p className='m-0'>20 <span className='points'>Points</span> </p></div>
                                    </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}></Col>
                                    <Col md={6}>
                                        <div className="d-flex flex-row justify-content-end m-0">
                                            <img className='ml-3' src={review} alt='' />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
    
    </>
  )
}

export default Cards;

import React from 'react'
import { Col,  Container, Row } from 'react-bootstrap';

const Search  = './image/Search.svg';

 function Text() {
   return (
     <>
 
           <section className='banner pt-5 text-center'>
                 <Container>
                     <Row>
                         <Col md='12'>
                             <div className='banner-text'>
                                 <h1>Dog-Sitting Made Easy</h1>
                                 <p>Browse and connect with other dog moms who need help. Each day of dog sitting earns 10 points.</p>
                             </div>
                         </Col>
                         <Col md='12'>
                             <div className='banner-input mt-4'>
                                <span><input type='text' 
                                 placeholder='Enter your zipcode | How far are you willing to travel? | Search a time period | Dog preference'/>
                                 <button className='search'><img src={Search} alt='' />Search</button></span>
                             </div>
                         </Col>
                     </Row>
                 </Container>
           </section>
 
     </>
   )
 }
 
 export default Text;
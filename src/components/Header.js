import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const image1  = './image/logo.png';
const ring    = './image/ring.svg';
const message = './image/message.svg';
const user    = './image/user.svg';

function Header() {
  return (
    <Navbar expand="lg" className="bg-light">
      <Container>
            <div className='logo'>
                <img src={image1} alt='' />
            </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0"></Nav>
          <Form className="d-flex">
                <div className='logo text-end'>
                    <button className='post m-3'>post</button>
                    <span className='m-3'><img src={ring} alt='' /></span>
                    <span className='m-3'><img src={message} alt=''/></span>
                    <span className='m-2'><img src={user} className='user-img' alt=''></img>Bao</span>
                </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
import logo from './../../logo.png';
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/esm/Button';
import Image from 'react-bootstrap/Image';
import { Search } from 'react-bootstrap-icons';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <>
            <Navbar sticky='top' bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image className='me-3' rounded src={logo} alt='Página Inicial' />
                        Bookshelf
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Item>
                            <InputGroup>
                                <InputGroup.Text id="searchBox">
                                    <Search color='orange' />
                                </InputGroup.Text>
                                <Form.Control
                                    placeholder="Pesquisar"
                                    aria-label="search"
                                    aria-describedby="search-box"
                                />
                            </InputGroup>
                        </Nav.Item>
                        <Nav.Item>
                            <Dropdown data-bs-theme="dark">
                                <Dropdown.Toggle variant="dark">Categorias</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/acao">Ação</Dropdown.Item>
                                    <Dropdown.Item href="#/romance">Romance</Dropdown.Item>
                                    <Dropdown.Item href="#/sifi">Si-Fi</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#/mais">Mais</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Item>
                        <Nav.Item className='ml-1'>
                            <Button variant='dark'>Login</Button>
                        </Nav.Item>
                        <Nav.Item>
                            <CartWidget />
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
import logo from './../../logo.png';
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Search } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/esm/Button';
import Image from 'react-bootstrap/Image'

function NavBar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image className='me-3' rounded src={logo} alt='Página Inicial' />
                        Bookshelf
                    </Navbar.Brand>
                    <Nav>
                        <InputGroup className="me-3 mb-auto ml-auto">
                            <InputGroup.Text id="searchBox">
                                <Search color='orange' />
                            </InputGroup.Text>
                            <Form.Control
                                placeholder="Pesquisar"
                                aria-label="search"
                                aria-describedby="search-box"
                            />
                        </InputGroup>

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
                    </Nav>
                    <Button variant='dark'>Login</Button>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
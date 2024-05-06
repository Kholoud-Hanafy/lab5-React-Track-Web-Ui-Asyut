import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css'
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../../Contexst/languageContext'
function NavigationBar() {

  const { toggleLanguage } = useLanguage();
  return (
    <Navbar expand="lg" className="bg-body-tertiary  bgColor">
      <Container>
        <Navbar.Brand href="#home">MOVISE</Navbar.Brand>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <NavLink className='nav-a'  style={({isActive})=>{

              return {
                'color':(isActive)?'#e432ae !important ':''
              }

            }} to="/">
              Movise</NavLink>


            <NavLink  className='nav-a'  style={({isActive})=>{

                  return {
                    'color':(isActive)?'#e432ae   !important ':''
                  }

                  }} 
                to="/BestMovie"> Favorites</NavLink>



            <NavLink  className='nav-a' style={({isActive})=>{

                return {
                  'color':(isActive)?'#e432ae !important ':''
                }

                }}  to="/Login"> 
            Login
            
            </NavLink>

            <NavLink  className='nav-a' style={({isActive})=>{

                    return {
                      'color':(isActive)?'#e432ae !important ':''
                    }

                    }}  to="/counter"> 
                    Counter

                    </NavLink>
                     
            
            
          </Nav>

          <button  className='btn2' onClick={toggleLanguage}>Choose Language</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
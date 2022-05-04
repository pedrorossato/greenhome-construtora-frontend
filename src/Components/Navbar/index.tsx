import React, { useState } from 'react';
import { Li, Logo, MenuIcon, Nav, StyledLink, Ul } from './styles';
import LogoColorida from '../../Assets/Images/Logo.png'
import { FaBars,FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Colors } from '../../Styles/colors';
// import { Container } from './styles';
export interface INavBarProps {
  active?: string;
}
const Navbar: React.FC<INavBarProps> = ({ active }) => {
  const [clicked,setClicked] = useState(false);
  const handleClickMenuIcon = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <Nav>
        <Link style={{ height: '100%' }} to="/">
          <Logo src={LogoColorida}></Logo>
        </Link>
        {/* <MenuIcon onClick={handleClickMenuIcon}>
          {clicked ? (
            <FaTimes style={{ color:`${Colors.common.black}` }} />
          ) : (
            <FaBars style={{ color: `${Colors.common.black}` }} />
          )}
        </MenuIcon> */}
        {/* <Ul className={clicked ? 'active' : ''}>
          <Li>
          <StyledLink aria-checked={active === 'Construcoes'} to="/Construcoes">
              Construções
            </StyledLink>
          </Li>
          <Li>
          <StyledLink aria-checked={active === 'Contato'} to="/Contato">
          Contato
            </StyledLink>
            </Li>
        </Ul> */}
      </Nav>
      <div style={{height: '100px'}}></div>
    </>    
  );
}

export default Navbar;
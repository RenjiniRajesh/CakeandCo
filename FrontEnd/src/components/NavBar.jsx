import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // cart symbol importing

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; // This ensures it takes the color of your List or Heading
`;
const NavBar = styled.div`
     background-color: rgb(228 122 188 / 77%);
    backdrop-filter: blur(1px);
    /* position: fixed; */
    /* width: 98vw; */
    padding: 1vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 9vh;
`;
const Heading = styled.h1`
    color: #ffffff;
    font-size: 3rem;
    margin: 0;
    font-family:Playfair Display;
    text-decoration: none;
`;
const NavLinks = styled.ul`
    list-style: none;
    display: flex;
    gap: 1rem;
    margin: 0;
    padding: 0;
    width: 40%;
    font-family: Montserrat;
    // font-weight: 200;
    justify-content: space-around;
`;
const List = styled.li`
    color: #812763;
    font-size: 1.4rem;
    font-weight:30px;
    text-decoration: none;
    cursor: pointer;
    &:hover  {
      transform: scale(1.1);
      font-weight: 500;
      transition: all 0.3s ease;
      text-shadow: 0px 0px 4px #e600ff;
    }
/* Nammal react-icons upayogikkumbo backend-il athu oru svg element aayittane render aavuka. */
    /* & svg {
    color: #890370;
    font-size: 1.6rem;  
    transition: color 0.3s ease;
  } */
`;

const Login = styled.button`
    background-color: #e6d2e5;
    color: #9e4d99;
    font-family: Montserrat;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 17px;

    &:hover {
      background-color: #a04a83;
      color:white;
      transform: scale(1.1);
      box-shadow: 0 0px 4px rgba(255, 255, 255, 0.2);
      font-weight: 500;
      transition: all 0.3s ease;
    }
`;

const Signup = styled.button`
    background-color: #e6d2e5;
    color: #9e4d99;
    font-family: Montserrat;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 17px;


    &:hover {
      background-color: #a04a83;
      transform: scale(1.1);
      box-shadow: 0 0px 4px rgba(255, 255, 255, 0.2);
      transition: all 0.3s ease;
      color:white;
    }
`;

/*  Cart-inte mukhalil kaanunna aa cheriya round Number Badge */

const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -10px;
  background-color: #890370; /* Deep pink/purple badge background */
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 50%;
  padding: 2px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
    display: flex;
    gap: 1rem;
`;

const NavBarComponent = () => {
  // 4. Added a test state. Change '1' to '0' or any number to test it out!
  const [cartCount, setCartCount] = useState(0);

  return (
    <NavBar>
      <StyledLink to="/"><Heading>Cake & Co.</Heading></StyledLink>
      <NavLinks>
        <StyledLink to="/"><List>Home</List></StyledLink>
        <StyledLink to="/viewcakes"><List>Menu</List></StyledLink>
        {/* View All Cakes */}
        <StyledLink to="/viewcart"><List><FaShoppingCart/>{cartCount > 0 && <CartBadge>{cartCount}</CartBadge>}</List>
        </StyledLink>
        {/* View Cart */}
      </NavLinks>
      <Container>
        <Link to="/login"> <Login >Login</Login></Link>

      </Container>
    </NavBar>
  );
};

export default NavBarComponent;
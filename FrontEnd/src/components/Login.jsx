import styled from "styled-components";
import img from '../images/LoginBG1.jpg';

const BGimg = styled.div`
    background-image: url(${img});
    background-position: center bottom;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    min-height: 100vh; 
    display: flex;
    align-items: end;
    justify-content: center;
    padding: 1em;
    box-sizing: border-box;
`;

const Container = styled.div`
    width: 100%;
    max-width: 450px; 
    margin: auto;
    margin-top: 30vh;
    border: 2px solid #ffffff;
    border-radius: 12px;
    box-shadow: 0 0 12px rgba(219, 32, 229, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(4px);
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2em;
    width: 90%;
    margin: 2em auto;
`;

const FormDiv = styled.div`
    display: flex;
    flex-direction: column; /* Stack on mobile */
    font-family: 'Montserrat', sans-serif;
    gap: 0.5em;
    font-size: 1.2em;
    width: 100%;
    color: #ffffff;
    font-weight: 500;

    @media (min-width: 600px) {
        flex-direction: row; /* Side-by-side on desktop */
        align-items: center;
        justify-content: space-between;
        gap: 1em;
    }

    & label {
        @media (min-width: 600px) {
            width: 30%;
            text-align: right;
            text-shadow: 0px 0px 2px #e600ff;
        }
    }
`;

const Input = styled.input`
    padding: 0.5em;
    font-size: 1.1rem;
    width: 100%; /* Full width for the container/stack */
    background-color: transparent;
    border: none;
    border-bottom: 3px solid #e600ff;
    color: #000;
    box-sizing: border-box;

    @media (min-width: 600px) {
        width: 65%;
    }

    &:focus {
        outline: none;
        border-bottom: 3px solid #0091ff;
        transition: all 0.3s ease;
        color: black;
    }
         &::placeholder {
    color: #888;
    font-family: 'Montserrat', sans-serif;
    opacity: 0.7;
  }
`;

const LoginBtn = styled.button`
    margin: 1em auto;
    padding: 0.5em;
    font-size: 1.2em;
    background-color: #e600ff;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    width: 80%;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.05);
        background-color: #0091ff;
        box-shadow: 0 4px 12px rgba(0, 145, 255, 0.4);
    }
`;

function Login() {
    return (
        <BGimg>
            <Container>

                <h1 style={{ color: 'white', textShadow: '0px 0px 6px #e600ff', fontSize: '3em', paddingBottom: '5px', fontFamily: 'Montserrat', fontWeight: '700' }}>Login</h1>

                <Form>
                    <FormDiv>
                        <label htmlFor="username">Username:</label>
                        <Input type="text" id="username" placeholder="Username" />
                    </FormDiv>
                    <FormDiv>
                        <label htmlFor="password">Password:</label>
                        <Input type="password" id="password" placeholder="Password" />
                    </FormDiv>
                    <LoginBtn type="submit">Login</LoginBtn>
                </Form>
            </Container>
        </BGimg>
    );
}

export default Login;
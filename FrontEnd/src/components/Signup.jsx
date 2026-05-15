import styled from "styled-components";
import img from '../images/signupBG1.jpg';


const BGimg = styled.div`
    background-image: url(/src/images/signupBG1.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 3em 6em;
    box-sizing: border-box;
    width: 100%;
    flex-wrap: wrap;

`;

const Container = styled.div`
    width: 100%;
    max-width: 500px;
    /* margin: auto; */
    border: 2px solid #ffffff;
    border-radius: 12px;
    box-shadow: 0 0 12px rgb(59 36 36 / 50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
    background-color: rgb(233 233 233 / 46%);
    backdrop-filter: blur(3px);
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    width: 100%; /* Take full width of Container */
    margin-top: 2em;

`;

const FormDiv = styled.div`
    display: flex;
    flex-direction: column; /* Stack vertically for better mobile scaling */
    gap: 0.5em;
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    color: #ae4d8e;
    
    @media (min-width: 600px) {
        flex-direction: row; /* Side-by-side on larger screens */
        align-items: center;
        justify-content: space-between;
    }

    & label {
        font-size: 1rem;
        @media (min-width: 600px) {
            width: 35%;
        }
    }
`;

const Input = styled.input`
    padding: 0.5em;
    font-size: 1rem;
    // width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #d0acc5;
    color: #ffffff;
    box-sizing: border-box;

    @media (min-width: 600px) {
        width: 65%;
    }

    &:focus {
        outline: none;
        border-bottom: 3px solid #0091ff;
        transition: all 0.3s ease;
    }
`;

const SignupBtn = styled.button`
    margin: 1em auto 0;
    padding: 0.8em;
    font-size: 1.1em;
    background-color: #a04a83;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.05);
        background-color: #df64b5;
        box-shadow: #a04a83;
    }
`;

function Signup() {
    return (
        <BGimg>
            <Container>
                <u style={{ color: '#e26ca7' }}>
                    <h1 style={{ color: '#9f7b95', fontSize: '3em', paddingBottom: '5px', fontFamily: 'Montserrat', fontWeight: '700' }}>
                        Signup
                    </h1>
                </u>
                <Form>
                    <FormDiv>
                        <label htmlFor="name">Name : </label>
                        <Input type="text" id="name" placeholder="Name" />
                    </FormDiv>
                    <FormDiv>
                        <label htmlFor="username">Username : </label>
                        <Input type="text" id="username" placeholder="Username" />
                    </FormDiv>
                    <FormDiv>
                        <label htmlFor="email">Email :  </label>
                        <Input type="email" id="email" placeholder="Email" />
                    </FormDiv>
                    <FormDiv>
                        <label htmlFor="phone">Phone : </label>
                        <Input type="tel" id="phone" placeholder="Phone" />
                    </FormDiv>
                    <FormDiv>
                        <label htmlFor="password">Password : </label>
                        <Input type="password" id="password" placeholder="Password" />
                    </FormDiv>
                    <FormDiv>
                        <label htmlFor="confirmPassword">Confirm Password :</label>
                        <Input type="password" id="confirmPassword" placeholder="Confirm Password" />
                    </FormDiv>
                    <SignupBtn type="submit">Sign Up</SignupBtn>
                </Form>
            </Container>
        </BGimg>
    );
}

export default Signup;
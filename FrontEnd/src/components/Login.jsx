import styled from "styled-components";
import img from '../images/LoginBG1.jpg';
import { useState } from "react";
import { Loginuser } from "../Api/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


// login style

const BGimg = styled.div`
    background-image: url(${img});
    background-position: center bottom;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    min-height: 87vh;
    position: fixed;
    z-index: -1;
    display: flex;
    align-items: start;
    justify-content: right;
    padding: 1em 5em;
    box-sizing: border-box;
`;

const Container = styled.div`
    width: 100%;
    max-width: 450px;
    border: 2px solid #ffffff;
    border-radius: 12px;
    margin-top: 15vh;
    box-shadow: 0 0 12px rgb(59 36 36 / 50%);
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
    color: #a04a83;
    box-sizing: border-box;

    @media (min-width: 600px) {
        width: 65%;
    }

    &:focus {
        outline: none;
        border-bottom: 3px solid #890370;
        transition: all 0.3s ease;
    }
    &::placeholder{
        font-family: Montserrat;
    }
`;

const LoginBtn = styled.button`
    margin: 1em auto;
    padding: 0.5em;
    font-size: 1.2em;
    background-color: #a04a83;
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
        background-color: #df64b5;
        box-shadow: #a04a83;
    }
`;

const NewReg = styled.ul`
    color: #c325c3;
    list-style: none;
    padding: 0;
    text-align: center;

    /* React Link custom html tags rendering standard nested standard text */
    & a {
        text-decoration: none; 
        color: #780578;
        font-weight: bold;

        &:hover {
            color: #df64b5;
        }
    }
`;
// ###############################################################

// Login function section


const Login = () => {
    const navigate = useNavigate()
    const [form, setform] = useState({
        email: "",
        password: ""
    });

    const handlechange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    // backend connection

    const handlesubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await Loginuser(form);
            if (res.success) {
                // data from backend data:Finduser.role
                console.log(res.data);


                console.log("login successfully");
                alert("Login Successfull")


                setTimeout(() => {
                    if (res.data === "admin") {
                        navigate('/adminhome')
                    } else {
                        navigate('/')
                    }

                    setform({ email: "", password: "" });
                }, 1000)
            } else {
                console.log("login not successfull,Please try again");
                alert("Login Not Successfull")
            };
        } catch (error) {
            console.log(error);

        }
    };
    // ########################################################################
    return (
        <BGimg>
            <Container>

                <h1 style={{ color: '#9f7b95', fontSize: '3em', paddingBottom: '5px', fontFamily: 'Montserrat', fontWeight: '700' }}>
                    Login
                </h1>

                <Form action="" onSubmit={handlesubmit}>
                    <FormDiv>
                        <label htmlFor="username">Username:</label>
                        <Input type="email" id="username" name="email" placeholder="Email" value={form.email} onChange={handlechange} />
                    </FormDiv>
                    <FormDiv>
                        <label htmlFor="password">Password:</label>
                        <Input type="password" id="password" placeholder="Password" name="password" value={form.password} onChange={handlechange} />
                    </FormDiv>
                    <LoginBtn type="submit">Login</LoginBtn>

                </Form>
               <NewReg>
                    <h3>Not a member?</h3>   <Link to="/signup">Sign up now </Link>
                </NewReg>
            </Container>
        </BGimg>
    );
}

export default Login;
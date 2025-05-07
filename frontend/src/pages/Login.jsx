import { Link } from 'react-router-dom';
import { useId } from 'react';
import LoginSignup from '../components/LoginSignup/LoginSignup';
import styled from 'styled-components';

// Create background for the page
const PageBackground = styled.div`
  background-image: url("https://images.unsplash.com/photo-1730780883153-b3c046b001c1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: rgba(255, 255, 255, 0.8); /* Optional: To make the content stand out from the background */
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
`;

function Login() {
    return (
        <PageBackground>
            <Container>
                <LoginSignup />
                {/* <form>
                    <h2>Please Enter Company Username and Password</h2>
                    <label>
                        Your Username:
                        <input name="userName" />
                    </label>
                    <br />
                    <label>
                        Your Password: 
                        <input name="userPassword" />
                    </label>
                    <br />
                    <button>
                        <Link to="/home">Log In</Link>
                    </button>
                </form> */}
            </Container>
        </PageBackground>
    );
}

export default Login;

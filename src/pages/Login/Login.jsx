import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import potsImg from "../../assests/images/jocelyn-morales-85u5oGSBJ1s-unsplash.jpg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url(${potsImg});
  background-size: cover;
  background-position: bottom;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  width: 100%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border: 1px solid lightgrey;
`;
const Text = styled.p`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: 1px solid lightgrey;
  padding: 15px 20px;
  background-color: white;
  color: grey;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    color: white;
    background-color: lightgrey;
  }
`;

export default function Login() {
  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Form>
          <Input placeholder="username"></Input>
          <Input placeholder="password"></Input>
          <Text>
            No account? Create one <Link to={"/register"}>here</Link>
          </Text>
          <Button>LOGIN</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

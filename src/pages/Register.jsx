import styled from "styled-components"
import { mobile } from "../responsive"

import bgImg from "../assets/AthenaChic/bathingsuit_2.png"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${bgImg});
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: #fff;
  ${mobile({
    width: "75%",
  })}
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 10px 0 0;
  padding: 10px;
`
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input type="text" placeholder="name" />
          <Input type="text" placeholder="last name" />
          <Input type="text" placeholder="username" />
          <Input type="text" placeholder="email" />
          <Input type="text" placeholder="password" />
          <Input type="text" placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register

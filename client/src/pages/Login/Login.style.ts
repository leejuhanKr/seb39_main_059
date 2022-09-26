import Input from '@Atoms/Input'
import Button from '@Atoms/Button'
import styled from 'styled-components'

export const LoginLayout = styled.div`
  align-items: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  position: relative;
  top: 100px;
`

export const Logo = styled.div`
  width: 208px;
  height: 86px;
  background-color: ${({ theme }) => theme.color.softGray};
  text-align: center;
  margin-bottom: 20px;
`

export const Description = styled.span`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.black};
`

export const InputForm = styled.form`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const LoginInput = styled(Input)`
  width: 304px;
  height: 58px;
  background: #ffffff;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  ::placeholder {
    color: ${({ theme }) => theme.color.softGray};
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`

export const Checkbox = styled.div`
  align-items: center;
  margin: 0.7rem 0;
  display: flex;
  label {
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.color.softGray};
  }

  input {
  }
`

export const LoginButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  width: 304px;
  height: 40px;
  border-radius: 42px;
`

export const ButtonBox = styled.div`
  width: 304px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
`

export const SignupButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.black};
`

export const FindButton = styled(SignupButton)`
  color: ${({ theme }) => theme.color.softGray};
`

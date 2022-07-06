import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  min-width: 80px;
  padding: 5px 50px;
  font-weight: 600;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: #fafafa;
  border: 1px solid #89d68d;
  color: black;
  &:hover {
    background: #e3fce4;
  }
  cursor: pointer;
  &:hover {
    background-position: right center;
  }
`

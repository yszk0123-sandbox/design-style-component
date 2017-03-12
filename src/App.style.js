// @flow
import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
`;

export const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Logo = styled.img`
  animation: ${logoSpin} infinite 20s linear;
  height: 80px;
`;

export const Intro = styled.p`
  font-size: large;
`;
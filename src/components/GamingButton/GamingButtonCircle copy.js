import React from "react";
import styled, { keyframes } from "styled-components";

// Animación para mover el borde alrededor del botón
const borderAnimation = keyframes`
  0% { 
    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
    border-bottom: 2px solid transparent;
    border-left: 2px solid #ff007f;
  }
  25% {
    border-top: 2px solid #ff007f;
    border-right: 2px solid transparent;
    border-bottom: 2px solid transparent;
    border-left: 2px solid transparent;
  }
  50% {
    border-top: 2px solid #ff007f;
    border-right: 2px solid #ff007f;
    border-bottom: 2px solid transparent;
    border-left: 2px solid transparent;
  }
  75% {
    border-top: 2px solid #ff007f;
    border-right: 2px solid #ff007f;
    border-bottom: 2px solid #ff007f;
    border-left: 2px solid transparent;
  }
  100% {
    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
    border-bottom: 2px solid transparent;
    border-left: 2px solid transparent;
  }
`;

const GamingButtonStyled = styled.button`
  position: relative;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  overflow: hidden;
  text-transform: uppercase;
  transition: transform 0.3s ease-in-out;
  display: inline-block;
  z-index: 1;
  background-clip: padding-box;
  background: linear-gradient(
    90deg,
    #f0f7ff,
    #c2e0ff,
    #cf99f3d0,
    #ea61fc,
    #bb44ff,
    #8f0094,
    #870099,
    #690064
  );
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-size: 200% auto;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    background: black;
    z-index: -1;
    transition: top 0.3s ease-in-out;
  }

  &:hover {
    transform: scale(1.1);

    &::before {
      opacity: 1;
    }

    animation: ${borderAnimation} 1s linear forwards;
  }
`;

const GamingButtonCircle = ({ children }) => {
  return <GamingButtonStyled>{children}</GamingButtonStyled>;
};

export default GamingButtonCircle;

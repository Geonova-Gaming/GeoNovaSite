import React from "react";
import styled, { keyframes } from "styled-components";

// Animación para mover el borde alrededor
// const borderAnimation = keyframes`
//   0% { clip-path: inset(100% 100% 100% 0%); }
//   25% { clip-path: inset(0% 100% 100% 100%); }
//   50% { clip-path: inset(100% 0% 100% 100%); }
//   75% { clip-path: inset(100% 100% 0% 100%); }
//   100% { clip-path: inset(100% 100% 100% 100%); }
// `;
const borderAnimation = keyframes`
  0% { clip-path: inset(30% 30% 2% 0%); }  /* Inicio: solo abajo */
  25% { clip-path: inset(0% 0% 10% 0%); }   /* Subiendo por la izquierda */
  50% { clip-path: inset(2% 2% 0% 0%); }    /* Línea arriba */
  75% { clip-path: inset(0% 0% 0% 0%); }     /* Bajando por la derecha */
  // 100% { clip-path: inset(0% 0% 0% 0%); }     /* Cuadro completo */
`;

const GamingButtonStyled = styled.button`
  position: relative;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background: black;
  border: none;
  cursor: pointer;
  overflow: hidden;
  text-transform: uppercase;
  transition: transform 0.3s ease-in-out;
  display: inline-block;
  z-index: 1;
  height: 100px;

  &::before {
    content: "";
    position: absolute;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    top: -2px;
    left: -2px;
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
    background-size: 200% auto;
    z-index: -1;
    opacity: 0;
    clip-path: inset(50% 50% 50% 50%);
    transition: opacity 0.3s ease-in-out;
      //     opacity: 1;
      // animation: ${borderAnimation} 5s linear infinite;
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
    box-shadow: 0px 0px 76px -22px #ff00ffb8;
    &::before {
      opacity: 1;
      animation: ${borderAnimation} 1.5s linear infinite;
    }
  }
`;

const GamingButtonCircle = ({ children }) => {
  return <GamingButtonStyled>{children}</GamingButtonStyled>;
};

export default GamingButtonCircle;

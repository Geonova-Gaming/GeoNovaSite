import React from "react";
import styled, { keyframes } from "styled-components";

// Animación para mover el borde alrededor
const moveBorder = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

// Componente de estilo GamingButton
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
  transition: 0.3s;
  display: inline-block;
  z-index: 1;

  // Borde animado (oculto por defecto)
  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
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
    opacity: 0; /* Oculto por defecto */
    transition: opacity 0.3s ease-in-out;
    z-index: -1;
  }

  // Fondo negro del botón
  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    background: black;
    z-index: -1;
  }

  // Activar animación solo en hover
  &:hover {
    transform: scale(1.1);

    &::before {
      opacity: 1; /* Se hace visible solo en hover */
      animation: ${moveBorder} 0.65s linear forwards;
    }
  }
`;

// const purple = {
//  50: '#F0F7FF',
//  100: '#C2E0FF',
//  200: '#cf99f3d0',
//  400: '#ea61fc',
//  500: '#bb44ff',
//  600: '#8f0094',
//  800: '#870099',
//  900: '#690064'
// };

const GamingButtonComponent = ({ children }) => {
  return <GamingButtonStyled>{children}</GamingButtonStyled>;
};

export default GamingButtonComponent;

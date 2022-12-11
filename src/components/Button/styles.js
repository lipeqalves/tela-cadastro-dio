import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`

    background-color: #565656;
    border-radius: 22px;
    position: relative;

    color: #FFFFFF;
    padding: 2px 12px;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;

    &:hover{
      opacity: 0.6;
      cursor: pointer;
    }

  ${({ variant }) =>
    variant !== "primary" &&
    css`
    min-width: 167px;
    height: 33px;

    background: #E4105D;

    &::after {
        content: '';
        position: absolute;
        border: 1px solid #E4105D;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
    }

  `}
`
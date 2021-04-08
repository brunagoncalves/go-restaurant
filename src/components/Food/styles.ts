import styled, { css } from 'styled-components';
import { darken } from 'polished';

interface FoodStatus {
  available: boolean;
}

export const FoodContainer = styled.div<FoodStatus>`
  background: var(--card-body);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    background-color: var(--card-image);
    border-radius: 0.5rem 0.5rem 0 0;
    text-align: center;
    transition: 0.3s opacity;

    ${props =>
      !props.available &&
      css`
        opacity: 0.3;
      `};

    img {
      pointer-events: none;
      user-select: none;
      width: 100%;
      height: 198px;
      display: block;
      object-fit: cover;
      border-radius: 0.5rem 0.5rem 0 0;
    }
  }

  section.body {
    padding: 30px;

    h2 {
      color: var(--titles);
    }

    p {
      color: var(--texts);
      margin-top: 16px;
    }

    .price {
      color: #39b100;
      font-size: 1.5rem;
      line-height: 2rem;

      b {
        font-weight: 600;
      }
    }
  }

  section.footer {
    background: var(--card-footer);
    padding: 20px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0 0 0.5rem 0.5rem;

    .icon-container {
      display: flex;

      button {
        border: 0;
        border-radius: 0.5rem;
        padding: 10px;
        background: #ffffff;
        display: flex;

        svg {
          color: #3d3d4d;
        }

        & + button {
          margin-left: 6px;
        }

        &:hover {
          background: ${darken(0.05, '#FFFFFF')};
        }
      }
    }

    .availability-container {
      display: flex;
      align-items: center;

      p {
        color: #3d3d4d;
        font-weight: 500;

        ${props =>
          !props.available &&
          css`
            color: var(--negative);
          `};

        ${props =>
          props.available &&
          css`
            color: var(--positive);
          `};
      }

      .switch {
        position: relative;
        display: inline-block;
        width: 68px;
        height: 28px;
        margin-left: 12px;

        & input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--negative);
          border-radius: 16px;
          -webkit-transition: 0.4s;
          transition: 0.4s;

          &:before {
            position: absolute;
            content: '';
            height: 18px;
            width: 28px;
            left: 5px;
            bottom: 5px;
            background-color: #ffffff;
            border-radius: 10px;
            -webkit-transition: 0.4s;
            transition: 0.4s;
          }
        }

        input:checked + .slider {
          background: var(--positive);
        }

        input:checked + .slider:before {
          -webkit-transform: translateX(30px);
          -ms-transform: translateX(30px);
          transform: translateX(30px);
        }
      }
    }
  }
`;

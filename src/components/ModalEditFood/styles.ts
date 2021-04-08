import { Form as Unform } from '@unform/web';
import styled from 'styled-components';

export const Form = styled(Unform)`
  padding: 48px 40px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2.25rem;
    line-height: 2.25rem;
    margin-bottom: 40px;
    text-align: center;
  }

  button {
    background: var(--background-btn);
    color: var(--text-btn);
    border: 0;
    border-radius: 0.5rem;
    margin-top: 40px;
    display: flex;
    align-items: center;
    align-self: flex-end;

    .text {
      padding: 0 1.5rem;
    }

    .icon {
      display: flex;
      padding: 1rem;
      background: #41c900;
      border-radius: 0.5rem 0 0 0.5rem;
    }
  }
`;

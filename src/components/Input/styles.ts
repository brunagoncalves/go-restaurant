import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  padding: 18px 24px;
  background: var(--background-input);
  border-radius: 0.5rem;

  & + div {
    margin-top: 24px;
  }

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: var(--text-input);

    &::placeholder {
      color: #b7b7cc;
    }
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

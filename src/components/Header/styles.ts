import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background: var(--background-header);
  padding: 30px 0;

  header {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 20px 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      @media (max-width: 580px) {
        width: 70%;
      }
    }

    nav {
      button {
        border: 0;
        border-radius: 0.5rem;
        background: var(--background-btn);
        color: var(--text-btn);
        font-weight: 600;
        display: flex;
        align-items: center;

        .text {
          padding: 0 1.5rem;

          @media (max-width: 580px) {
            display: none;
          }
        }

        .icon {
          display: flex;
          padding: 1rem;
          background: #41c900;
          border-radius: 0 0.5rem 0.5rem 0;

          @media (max-width: 580px) {
            border-radius: 0.5rem;
          }
        }
      }
    }
  }
`;

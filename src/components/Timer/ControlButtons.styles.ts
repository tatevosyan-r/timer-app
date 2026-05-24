import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
`;

export const StyledButton = styled.button<{ $primary?: boolean }>`
  padding: 0.8rem 1.8rem;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${(props) => (props.$primary ? '#27ae60' : '#e74c3c')};
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;
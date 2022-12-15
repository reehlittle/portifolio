import styled from 'styled-components';

export const Container = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: fit-content;
  color: #fff;
  font-weight: 400;
  text-decoration: none;
  padding: 0 16px;
  cursor: pointer;

  background: ${({ type }) => (type === 'github' ? '#000000' : type === 'play_store' ? ' #4469b6' : '#fb4dae')};

  &:hover {
    background: ${({ type }) => (type === 'github' ? '#101010' : type === 'play_store' ? ' #325db7' : '#f9279c')};
  }

  svg {
    margin-right: 5px;
  }
`;

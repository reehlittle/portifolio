import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  width: 80%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;

export const Pages = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;
  font-size: 18px;

  div:first-child {
    padding-right: 20px;
  }
  .selected {
    padding-bottom: 5px;
    border-bottom: 3px solid #fb4dae;
  }
`;

export const ListItem = styled(Link)`
  display: flex;
  text-decoration: none;
  color: white;
  margin-right: 20px;

  &:visited {
    color: white;
  }

  :hover {
    color: #fb4dae;
    cursor: pointer;
  }
`;

export const Avatar = styled.div`
  display: flex;

  width: 100px;
  height: 100px;
  background: #fff;
  border-radius: 50%;
  img {
    width: 98px;
    height: 92px;
    margin-top: 5px;
  }
`;

import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 20px 0;
`;

export const Pages = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;
  font-size: 18px;

  .selected {
    p {
      padding-bottom: 5px;
      border-bottom: 3px solid #FB4DAE;
    }
  }
`;

export const ListItem = styled.div`
  margin: 0 25px;

  :hover {
    color: #FB4DAE;
    cursor: pointer;
  }
`;

export const Avatar = styled.div`
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
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 20px 0;
  /* background: rgba(23,17,39,0.4); */
  /* background: linear-gradient(135deg, rgba(23,17,39,0.5) 0%, rgba(40,25,55,1) 48%, rgba(48,23,52,1) 100%); */
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
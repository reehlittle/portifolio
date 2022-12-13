import styled from 'styled-components';

export const Description = styled.div`
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 1.8;
  background: transparent;
  overflow-x: hidden;
  margin: auto;
  -webkit-font-smoothing: subpixel-antialiased;
  margin-bottom: 20px;
  color: white;
  text-align: justify;
  white-space: pre-wrap;
  @media screen and (min-width: 650px) {
    margin: 20px 20px;
  }

  p {
    margin: 20px 0;
  }
`;

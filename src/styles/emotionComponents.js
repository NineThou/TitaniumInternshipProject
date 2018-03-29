import styled, { css } from 'react-emotion';
import { blue, lightBlue } from './colors';

export const NiceForm = styled('div')`
  width: 500px;
  padding: 0 30px;
  background: #FFFFFF;
  margin: 50px auto;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
  -webkit-box-shadow:  0px 0px 15px rgba(0, 0, 0, 0.22);
`;

export const Title = styled('h2')`
  cursor: pointer;
  background: #4D4D4D;
  text-transform: uppercase;
  color: #797979;
  font-size: 18px;
  font-weight: 100;
  padding: 20px;
  margin: 60px -30px;
`;

export const Submit = styled('button')`
  background-color: ${blue};
  border: 1px solid ${blue};
  display: inline-block;
  cursor: pointer;
  color: #FFFFFF;
  font-size: 14px;
  padding: 8px 18px;
  text-decoration: none;
  text-transform: uppercase;
  transition: .4s;
  margin-top: 10px;
  :hover {
    background-color:${lightBlue};
  }
`;

export const formField = css`
  position: relative;
  bottom: 30px;
`;

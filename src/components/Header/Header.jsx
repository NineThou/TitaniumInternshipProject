import React from 'react';
import styled, {css} from 'react-emotion';
import { lavender } from '../../styles/colors';


// clock
import Clock from './Clock';

const Head = styled('div')` 
  z-index: 999;
  position: relative;
  background-color: ${lavender};
  height: 70px;
  width: 100%;
  overflow: hidden;
  display: grid;
  grid-template-areas: "name clock";
  grid-template-columns: 1fr 1fr;
  -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
  font-weight: 700;
  font-size: 30px;
  @media (max-width: 800px) {
    font-size: 20px;
  }
  margin: 0;
`;

const Title = styled('div')`
  grid-area: title;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClockArea = styled('div')`
  grid-area: clock;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 30px;
`;

const Name = styled('div')`
  grid-area: name;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => (
  <Head>
    <Name>
      Hi, John Smith
    </Name>
    <ClockArea>
      <Clock />
    </ClockArea>
  </Head>
);

export default Header;

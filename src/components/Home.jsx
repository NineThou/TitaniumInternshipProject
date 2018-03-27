import React from 'react';
import styled from 'react-emotion';
import background from '../utils/images/home.jpg';

import { black, translucent } from '../styles/colors';

const Image = styled('div')`
  background-image: url(${background});
  background-size: cover;
  height: 944px;
  width: 100%;
`;

const Title = styled('h1')`
  padding-top: 20px;
  font-size: 100px;
  border: 8px double white;
  width: 400px;
  position: absolute;
  left: 59%;
  top: 55%;
  @media (max-width:1100px) {
    width: 250px;
  }
  @media (max-width:800px) {
    left: 20%;
    top: 50%;
    width: 250px;
    color: ${black};
    border-color: ${black};
    background-color: ${translucent};
  }
`;

const Home = () => (
  <div>
    <Image>
      <Title> Food Blog </Title>
    </Image>
  </div>
);

export default Home;

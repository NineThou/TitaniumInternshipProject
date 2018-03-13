import React from 'react';
import styled from 'react-emotion';
import background from '../images/home.jpeg';

const Image = styled('div')`
  background-image: url(${background});
  background-size: cover;
  height: 945px;
`;

const Title = styled('h1')`
  padding-top: 20px;
  padding-right: 30px;
  font-size: 100px;
  border: 8px double white;
  width: 22%;
  position: relative;
  left: 59%;
  top: 55%;
`;

const Home = () => (
  <div>
    <Image>
      <Title> Food Blog </Title>
    </Image>
  </div>
);

export default Home;

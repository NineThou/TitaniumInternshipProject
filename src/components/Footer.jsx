// modules
import React from 'react';
import styled, { css } from 'react-emotion';
import { Icon } from 'semantic-ui-react';

// image
import donut from '../utils/images/DonutLogo.png';

// colors
import { black, grey } from '../styles/colors';

const Wrap = styled('div')`
  position: relative;
  z-index: 999;
  background-color: ${black};
  color: ${grey};
  display: grid;
  height: 170px;
  width: 100%;
  grid-template-areas: "logo donut contactUs" 
                       "social donut text";
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
`;

const logo = css`
  grid-area: logo;
  weight: 700;
  margin: 0 auto;
  font-size: 50px;
  padding-top: 15px;
`;

const contactUs = css`
  grid-area: contactUs;
  margin: 0 auto;
`;

const social = css`
  grid-area: social;
  margin: 0 auto;
  padding-top: 50px;
`;

const text = css`
  position: relative;
  bottom: 10px;
  grid-area: text;
  line-height: 1px;
  margin: 0 auto;
`;

const anchorColor = css`
  color: ${grey};
  :hover {
    color: white;
  }
`;

const donutStyle = css`
  grid-area: donut;
  margin: 0 auto;
  color: white;
`;

const donutSize = css`
  height: 150px;
  color: white;
`;
const Footer = () => (
  <Wrap>
    <div className={logo}>
      <h2>
        Food Blog
      </h2>
    </div>
    <div className={social}>
      <h3>
        <a className={anchorColor} href="https://www.instagram.com/titanium.codes/"><Icon name="instagram" size="large" /></a>
        <a className={anchorColor} href="https://ru.pinterest.com/"><Icon name="pinterest" size="large" /></a>
        <a className={anchorColor} href="https://www.facebook.com/titanium.codesmd/"><Icon name="facebook" size="large" /></a>
        <a className={anchorColor} href="https://vk.com"><Icon name="vk" size="large" /></a>
      </h3>
    </div>
    <div className={donutStyle}>
      <img className={donutSize} src={donut} alt="donut" />
    </div>
    <div className={contactUs}>
      <h2 className={contactUs}>Contact Us</h2>
    </div>
    <div className={text}>
      <h3>Chisinau, Moldova</h3>
      <p>Spartacus 11/1</p>
      <p>Email: info@titanium-soft.com</p>
      <p>Tel.: +373 60095959</p>
    </div>
  </Wrap>
);

export default Footer;


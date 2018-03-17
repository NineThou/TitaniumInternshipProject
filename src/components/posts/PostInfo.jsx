// modules
import React from 'react';
import { Message, Button, Image } from 'semantic-ui-react';
import styled, { css } from 'react-emotion';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

// json
import postSamples from '../../posts.json';

// colors
import { grey } from '../../styles/colors';

const InfoWrap = styled('div')`
  display: flex;
  color: white;
  background-color: ${grey};
  margin: 0 auto !important;
  margin-top: 30px !important;
  width: 80%;
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
`;

const colors = css`
  color: white !important;
  background-color: ${grey} !important;
`;

const btn = css`
  margin-top: 5px !important;
`;

class PostInfo extends React.Component {
  state = {
    likes: 0,
    disabled: false,
  }

  render() {
    const handleLikes = (e) => {
      e.preventDefault(e);
      this.setState({ likes: this.state.likes + 1, disabled: true });
    };

    const data = postSamples[this.props.match.params.postId - 1];
    const {
      title,
      text,
      likes,
    } = data;
    return (
      <InfoWrap>
        <Message className={colors}>
          <Message.Header>
            {title}
          </Message.Header>
          <p>
            {text}
          </p>
          <Image src="https://picsum.photos/1400/200/?random" />
          <span>
            <Button className={btn}>
              <FormattedMessage id="posts.delete" />
            </Button>
            <Button
              className="btn"
              disabled={this.state.disabled}
              onClick={e => handleLikes(e)}
              color="red"
              content="Like"
              icon="heart"
              label={{
                basic: true,
                color: 'red',
                pointing: 'left',
                content: this.state.likes + likes,
              }}
            />
          </span>
        </Message>
      </InfoWrap>
    );
  }
}

PostInfo.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      postId: PropTypes.string,
    }),
  }).isRequired,
};

export default withRouter(PostInfo);


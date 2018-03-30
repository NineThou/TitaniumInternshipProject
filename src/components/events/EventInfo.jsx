// modules
import React from 'react';
import { List, Button } from 'semantic-ui-react';
import styled, { css } from 'react-emotion';
import { withRouter } from 'react-router';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { isLoggedIn } from '../../utils/AuthService';

// colors
import { grey } from '../../styles/colors';

// action
import { getEventsRequest } from '../../actions/events-api';


const Wrapper = styled('div')`
    z-index: 1;
    min-height: calc(100vh - 230px);
`;

const InfoWrap = styled('div')`
  display: flex;
  position: relative;
  top: 150px;
  display: flex;
  align-items: center;
  color: white;
  background-color: ${grey};
  margin: 0 auto !important;
  margin-bottom: 60px !important;
  width: 80%;
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
  border: 0 !important;
  @media (max-width: 1614px) {
    top: 120px;
    flex-direction: column;
  }
   @media (max-width: 690px) {
    top: 85px;
   }
   @media (max-width: 423px) {
    top: 75px;
   }
`;

const ContentWrap = styled('div')`
  margin: 20px;
`;

const colors = css`
  color: white !important;
  background-color: ${grey} !important;
`;

const ImageDiv = styled('div')`
  height: 600px;
  min-width: 600px;
  background-size: cover;
  overflow: hidden;
  @media (max-width: 1613px) {
    max-height: 350px;
    width: 100%;
  }
  @media (max-width: 952px) {
    min-width: 230px;
  }
`;

const EventInfo = ({ match, eventsInfo }) => {
  const data = eventsInfo[match.params.eventId];
  return (
    <Wrapper>
      <InfoWrap>
        <ImageDiv style={{ backgroundImage: `url(${data && data.image})` }} />
        <ContentWrap className={colors}>
          <h1>
            {data && data.title}
          </h1>
          <p>
            {data && data.body}
          </p>
          <p>
            {data && data.more}
          </p>
          <List>
            {data && data.tags
              .filter(tag => tag !== '')
              .map(tag => <a key={tag}><List.Content>#{tag}</List.Content></a>)} {/*eslint-disable-line*/}
          </List>
          <Link to={`/events/edit/${match.params.eventId}`}>
            {isLoggedIn() ? 
              <Button floated="left">
                <FormattedMessage id="events.edit" />
              </Button> : null}
          </Link>
        </ContentWrap>
      </InfoWrap>
    </Wrapper>
  );
};

EventInfo.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      eventId: PropTypes.string,
    }),
  }).isRequired,
  eventsInfo: PropTypes.shape({
    body: PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.string,
    more: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  eventsInfo: state.eventsInfo && state.eventsInfo.events,
});

const mapDispatchToProps = dispatch => ({
  getEventsData: bindActionCreators(getEventsRequest, dispatch),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.getEventsData();
    },
  }),
)(EventInfo);


// modules
import React from 'react';
import { List } from 'semantic-ui-react';
import styled, { css } from 'react-emotion';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

// colors
import { grey } from '../../styles/colors';

// action
import { getEventsRequest } from '../../actions/events-api';


const Wrapper = styled('div')`
    width: 100;
    min-height: calc(100vh - 300px);
`;

const InfoWrap = styled('div')`
  display: flex;
  position: relative;
  top: 30px;
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
    flex-direction: column;
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
    max-height: 100%;
    width: 100%;
  }
  @media (max-width: 952px) {
    min-width: 270px;
  }
`;

const EventInfo = ({ match, eventsInfo }) => {
  const data = eventsInfo[match.params.eventId - 1];
  return (
    <Wrapper>
      <InfoWrap>
        {console.log(data && data.image)}
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
  eventsInfo: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    more: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
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


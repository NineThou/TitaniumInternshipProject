import React from 'react';
import { Search } from 'semantic-ui-react';
import _ from 'lodash';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const Wrapper = styled('div')`
  margin: 0 auto;
  padding-bottom: 30px;
`;

class SearchFilter extends React.Component {
  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () => this.setState({
    isLoading: false,
    results: [],
    value: '',
  })

  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.title });
    window.location.href = `${this.props.url}/${result.id}`;
  };

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = result => re.test(result.title);
      console.log(this.props.details);
      return this.setState({
        isLoading: false,
        results: _.filter(this.props.details, isMatch),
      });
    }, 300);
  }


  render() {
    const { isLoading, value, results } = this.state;
    return (
      <Wrapper>
        <Search
          loading={isLoading}
          onResultSelect={this.handleResultSelect}
          onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
          results={results}
          value={value}
          size="big"
          {...this.props.details}
        />
      </Wrapper>
    );
  }
}

SearchFilter.propTypes = {
  url: PropTypes.string.isRequired,
  details: PropTypes.shape({
    date: PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.string,
    likes: PropTypes.objectOf(PropTypes.any),
    more: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string,
    user: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    body: PropTypes.string,
  }),
};

SearchFilter.defaultProps = {
  details: {},
};

export default SearchFilter;

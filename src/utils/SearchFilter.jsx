import React from 'react';
import { Search } from 'semantic-ui-react';
import _ from 'lodash';
import styled from 'react-emotion';

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

      this.setState({
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


export default SearchFilter;

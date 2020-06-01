// modules
import React from 'react';
import ReactTable from 'react-table';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, lifecycle } from 'recompose';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

// css
import 'react-table/react-table.css';

// action creators
import { getUsersRequest } from '../actions/users-api';

const Wrapper = styled('div')`
    padding-top: 80px;
    min-height: calc(100vh - 190px);
`;

const columns = [
  {
    id: 'userName',
    Header: 'Username',
    accessor: ({ name }) => name || 'No username',
  },
  {
    id: 'loginsCount',
    Header: 'Logins Count',
    accessor: ({ loginsCount }) => loginsCount || 'No wallet address',
  },
  {
    id: 'email',
    Header: 'Email',
    accessor: ({ email }) => email || 'No bonus',
  },
  {
    id: 'emailVerification',
    Header: 'Email Status',
    accessor: ({ emailVerified }) => (emailVerified ? 'email IS verified' : 'email IS NOT verified'),
  },
  {
    expander: true,
    Header: () => <strong>More</strong>,
    width: 65,
    Expander: ({ isExpanded, ...rest}) => ( // eslint-disable-line
      <div>
        {isExpanded ? <span>&#x2299;</span> : <span>&#x2295;</span>}
      </div>
    ),
    style: {
      cursor: 'pointer',
      fontSize: 25,
      padding: '0',
      textAlign: 'center',
      userSelect: 'none',
    },
  },
];

const TableWrap = styled('div')`
  margin-bottom: 19px;
`;

const Users = ({ usersInfo, loading }) => {
  const { data } = usersInfo;
  return (
    <Wrapper>
      <TableWrap>
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={19}
          showPageSizeOptions={false}
          className="-striped -highlight"
          SubComponent={({ original }) => (
            <div style={{ padding: '10px' }}>
              {
                Object.keys(original)
                  .filter(key => key === 'last_login' || key === 'last_ip')
                  .map(key => <p key={key}>{`${key}: ${original[key]}`}</p>)
              }
            </div>
          )}
          filterable
          loading={loading}
        />
      </TableWrap>
    </Wrapper>
  );
};


const mapStateToProps = state => ({
  usersInfo: state.usersInfo && state.usersInfo.users,
  loading: state.usersInfo.loading,
});

const mapDispatchToProps = dispatch => ({
  getUsersData: bindActionCreators(getUsersRequest, dispatch),
});


Users.propTypes = {
  usersInfo: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.getUsersData();
    },
  }),
)(Users);

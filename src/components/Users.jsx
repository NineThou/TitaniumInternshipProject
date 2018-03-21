// modules
import React from 'react';
import ReactTable from 'react-table';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, lifecycle, setPropTypes } from 'recompose';
import PropTypes from 'prop-types';

// css
import 'react-table/react-table.css';

// action creators
import { getUsersRequest } from '../actions/users-api';

const columns = [
  {
    id: 'userName',
    Header: 'Username',
    accessor: row => row.local.username || 'No username',
  },
  {
    id: 'walletAddress',
    Header: 'Wallet Address',
    accessor: ({ walletAddress }) => walletAddress || 'No wallet address',
  },
  {
    id: 'referralBonus',
    Header: 'Referral Bonus',
    accessor: ({ referralBonus }) => referralBonus || 'No bonus',
  },
  {
    id: 'role',
    Header: 'User Role',
    accessor: ({ role }) => (role === '1' ? 'user' : 'admin'),
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

const Users = ({ usersInfo, loading }) => (// eslint-disable-line
  <ReactTable
    data={usersInfo}
    columns={columns}
    defaultPageSize={10}
    showPageSizeOptions={false}
    className="-striped -highlight"
    SubComponent={({ original }) => (
      <div style={{ padding: '10px' }}>
        {
          Object.keys(original)
            .filter(key => key === 'role' || key === 'status')
            .map(key => <p key={key}>{`${key}: ${original[key]}`}</p>)
        }
      </div>
    )}
    filterable
    loading={loading}
  />
);


const mapStateToProps = state => ({
  usersInfo: state.usersInfo && state.usersInfo.users,
  loading: state.usersInfo.loading,
});

const mapDispatchToProps = dispatch => ({
  getUsersData: bindActionCreators(getUsersRequest, dispatch),
});


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.getUsersData();
    },
  }),
  setPropTypes({
    usersInfo: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
  }),
)(Users);

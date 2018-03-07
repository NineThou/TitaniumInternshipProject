// modules
import React from 'react';
import ReactTable from 'react-table';

// css
import 'react-table/react-table.css';

// json
import users from '../utils/users.json';

const columns = [
  {
    id: 'userName',
    Header: 'Username',
    accessor: ({ username }) => username || 'username',
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
    accessor: ({ role }) => {
      return role === '1' ? 'user' : 'admin';
    },
  },
];

const Users = () => (
  <ReactTable
    data={users}
    columns={columns}
    defaultPageSize={10}
    showPageSizeOptions={false}
    filterable
  />
);

export default Users;

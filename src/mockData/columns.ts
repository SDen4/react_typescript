export const COLUMNS: Array<any> = [
  { Header: 'Id', Footer: 'Id', accessor: 'id' },
  { Header: 'First name', Footer: 'First name', accessor: 'first_name' },
  { Header: 'Last name', Footer: 'Last name', accessor: 'last_name' },
  {
    Header: 'Date of birth',
    Footer: 'Date of birth',
    accessor: 'date_of_birth',
  },
  { Header: 'Country', Footer: 'Country', accessor: 'country' },
  { Header: 'Phone', Footer: 'Phone', accessor: 'phone' },
];

export const GROUP_COLUMNS: Array<any> = [
  { Header: 'Id', Footer: 'Id', accessor: 'id' },
  {
    Header: 'Name',
    Footer: 'Name',
    columns: [
      { Header: 'First name', Footer: 'First name', accessor: 'first_name' },
      { Header: 'Last name', Footer: 'Last name', accessor: 'last_name' },
    ],
  },
  {
    Header: 'Info',
    Footer: 'Info',
    columns: [
      {
        Header: 'Date of birth',
        Footer: 'Date of birth',
        accessor: 'date_of_birth',
      },
      { Header: 'Country', Footer: 'Country', accessor: 'country' },
      { Header: 'Phone', Footer: 'Phone', accessor: 'phone' },
    ],
  },
];

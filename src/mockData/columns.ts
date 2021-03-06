import { format } from 'date-fns';
import { ColumnFilter } from '../components/ColumnFilterTable/ColumnFilter';

export const COLUMNS: Array<any> = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: 'First name',
    Footer: 'First name',
    accessor: 'first_name',
    Filter: ColumnFilter,
  },
  {
    Header: 'Last name',
    Footer: 'Last name',
    accessor: 'last_name',
    Filter: ColumnFilter,
  },
  {
    Header: 'Date of birth',
    Footer: 'Date of birth',
    accessor: 'date_of_birth',
    Cell: ({ value }: any) => {
      return format(new Date(value), 'dd/MM/yyyy');
    },
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: 'Country',
    Footer: 'Country',
    accessor: 'country',
    Filter: ColumnFilter,
  },
  { Header: 'Phone', Footer: 'Phone', accessor: 'phone', Filter: ColumnFilter },
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
        Cell: ({ value }: any) => {
          return format(new Date(value), 'dd/MM/yyyy');
        },
      },
      { Header: 'Country', Footer: 'Country', accessor: 'country' },
      { Header: 'Phone', Footer: 'Phone', accessor: 'phone' },
    ],
  },
];

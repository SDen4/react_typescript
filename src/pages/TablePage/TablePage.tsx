import React from 'react';
import BasicTable from '../../components/BasicTable/BasicTable';
import FilteringTable from '../../components/FilteringTable/FilteringTable';
import SortingTable from '../../components/SortingTable/SortingTable';

// import styles from './TablePage.module.css';

const TablePage: React.FC = (): React.ReactElement => {
  return (
    <>
      <h1>Table page</h1>
      <BasicTable />
      <hr></hr>
      <SortingTable />
      <hr></hr>
      <FilteringTable />
    </>
  );
};

export default TablePage;

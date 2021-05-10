import React from 'react';
import BasicTable from '../../components/BasicTable/BasicTable';
import ColumnFilterTable from '../../components/ColumnFilterTable/ColumnFilterTable';
import FilteringTable from '../../components/FilteringTable/FilteringTable';
import SortingTable from '../../components/SortingTable/SortingTable';

// import styles from './TablePage.module.css';

const TablePage: React.FC = (): React.ReactElement => {
  return (
    <>
      <h1>Table page</h1>
      <hr></hr>
      <h2>BasicTable</h2>
      <BasicTable />
      <hr></hr>
      <h2>SortingTable</h2>
      <SortingTable />
      <hr></hr>
      <h2>FilteringTable</h2>
      <FilteringTable />
      <hr></hr>
      <h2>ColumnFilterTable</h2>
      <ColumnFilterTable />
    </>
  );
};

export default TablePage;

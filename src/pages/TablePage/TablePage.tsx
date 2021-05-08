import React from 'react';
import BasicTable from '../../components/BasicTable/BasicTable';
import SortingTable from '../../components/SortingTable/SortingTable';

// import styles from './TablePage.module.css';

const TablePage: React.FC = (): React.ReactElement => {
  return (
    <>
      <h1>Table page</h1>
      <BasicTable />
      <hr></hr>
      <SortingTable />
    </>
  );
};

export default TablePage;

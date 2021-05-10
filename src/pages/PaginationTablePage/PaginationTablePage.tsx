import React from 'react';
import PaginationTable from '../../components/PaginationTable/PaginationTable';

// import styles from './TablePage.module.css';

const PaginationTablePage: React.FC = (): React.ReactElement => {
  return (
    <>
      <h1>Pagination Table Page</h1>
      <PaginationTable />
    </>
  );
};

export default PaginationTablePage;

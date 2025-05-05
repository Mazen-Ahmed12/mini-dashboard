import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useTenants } from '../hooks/useTenants';

export const TenantsCard = () => {
  const { id } = useParams();
  const { tenants, loading, error } = useTenants(id);

  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement>| null, newPage: number) => {
    setPage(newPage);
  };

  if (loading) return <div>Loading tenants...</div>;
  if (error) return <div>{error}</div>;

  return (
    <TableContainer component={Paper} sx={{ bgcolor: '#f2f2f2', p: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Lease Start</TableCell>
            <TableCell>End Date</TableCell>
            <TableCell>Rent</TableCell>
            <TableCell>Payment Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tenants.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((tenant: any) => (
            <TableRow key={tenant.id}>
              <TableCell>{tenant.name}</TableCell>
              <TableCell>{tenant.leaseStart}</TableCell>
              <TableCell>{tenant.EndDate}</TableCell>
              <TableCell>${tenant.rent}</TableCell>
              <TableCell>
                <span className={`font-semibold pl-8 ${tenant.paymentStatus === 'Paid' ? 'text-green-500' : 'text-red-500'}`}>
                  {tenant.paymentStatus}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={tenants.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[rowsPerPage]} 
      />
    </TableContainer>
  );
};

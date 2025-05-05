import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useTenants } from '../hooks/useTenants';

export const TenantsCard = () => {
  const { id } = useParams();
  const tenants = useTenants(id);

  return (
    <TableContainer component={Paper} sx={{ bgcolor: '#f2f2f2', p: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Lease Start</TableCell>
            <TableCell>Lease End</TableCell>
            <TableCell>Rent</TableCell>
            <TableCell>Payment Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tenants.map((tenant) => (
            <TableRow key={tenant.id}>
              <TableCell>{tenant.name}</TableCell>
              <TableCell>{tenant.leaseStart}</TableCell>
              <TableCell>{tenant.EndDate}</TableCell>
              <TableCell>${tenant.rent}</TableCell>
              <TableCell>
                <span className={`${tenant.paymentStatus === 'Paid' ? 'text-green-500' : 'text-red-500'}`}>
                {tenant.paymentStatus}
                </span>
                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Chip,
} from '@mui/material';

interface Tenant {
  id: string;
  name: string;
  leaseStart: string;
  leaseEnd: string;
  rent: number;
  paymentStatus: 'Paid' | 'Unpaid';
}

const tenants: Tenant[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    leaseStart: '2024-01-01',
    leaseEnd: '2024-12-31',
    rent: 1200,
    paymentStatus: 'Paid',
  },
  {
    id: '2',
    name: 'Bob Smith',
    leaseStart: '2024-03-15',
    leaseEnd: '2025-03-14',
    rent: 1500,
    paymentStatus: 'Unpaid',
  },
  {
    id: '3',
    name: 'Charlie Brown',
    leaseStart: '2023-08-01',
    leaseEnd: '2024-07-31',
    rent: 1100,
    paymentStatus: 'Paid',
  },
];

export const Tenants = () => {
  return (
      <TableContainer component={Paper} sx={{ bgcolor: '#f9f9f9', p: 3 }}>
        <Table className='bg-white'>
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
                <TableCell>{tenant.leaseEnd}</TableCell>
                <TableCell>${tenant.rent}</TableCell>
                <TableCell>
                  <Chip
                    label={tenant.paymentStatus}
                    color={tenant.paymentStatus === 'Paid' ? 'success' : 'error'}
                    variant="outlined"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
};

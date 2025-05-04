import React from 'react';
import { Link } from 'react-router-dom';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  Typography,
  Link as MuiLink,
  Box,
} from '@mui/material';

interface PropertyCardProps {
  id: string;
  Name: string;
  Address: string;
  Tenants: number;
  Rent: number;
}

export const PropertyCard = () => {
  const properties: PropertyCardProps[] = [
    {
      id: '1',
      Name: 'Sunset Villa',
      Address: '123 Palm St',
      Tenants: 4,
      Rent: 1200,
    },
    {
      id: '2',
      Name: 'Ocean Breeze',
      Address: '456 Coast Rd',
      Tenants: 2,
      Rent: 1500,
    },
    {
      id: '3',
      Name: 'City Heights',
      Address: '789 Urban Ave',
      Tenants: 6,
      Rent: 2000,
    },
  ];

  return (
      <TableContainer component={Paper} sx={{ bgcolor: '#f9f9f9',p: 3 }}>
        <Table className='bg-white'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Tenants</TableCell>
              <TableCell>Rent</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {properties.map((property) => (
              <TableRow key={property.id}>
                <TableCell>{property.Name}</TableCell>
                <TableCell>{property.Address}</TableCell>
                <TableCell>{property.Tenants}</TableCell>
                <TableCell>${property.Rent}</TableCell>
                <TableCell>
                  <MuiLink
                    component={Link}
                    to={`/property/${property.id}`}
                    color="primary"
                    underline="hover"
                  >
                    View tenants
                  </MuiLink>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
};

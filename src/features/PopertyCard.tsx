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
  Link as MuiLink,
} from '@mui/material';
import { useProperties } from '../hooks/useProperties';

export const PropertyCard = () => {
  const { properties } = useProperties();

  return (
    <TableContainer component={Paper} sx={{ bgcolor: '#f2f2f2', p: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Property</TableCell>
            <TableCell>tenants</TableCell>
            <TableCell>Rent</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {properties.map((property) => (
            <TableRow key={property.id}>
              <TableCell>
                <div className="flex flex-col">
                  <p>{property.name}</p>
                  <small>{property.address}</small>
                </div>
              </TableCell>
              <TableCell>{property.tenantCount}</TableCell>
              <TableCell>${property.rent}</TableCell>
              <TableCell>
                <MuiLink
                  component={Link}
                  to={`/dashboard/property/${property.id}`}
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

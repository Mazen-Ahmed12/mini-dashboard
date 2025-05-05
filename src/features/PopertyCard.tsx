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
  CircularProgress, 
  Typography,       
} from '@mui/material';
import { useProperties } from '../hooks/useProperties';

export const PropertyCard = () => {
  const { properties, loading, error } = useProperties();

  if (loading) {
    return (
      <TableContainer component={Paper} sx={{ bgcolor: '#000', p: 3 }}>
        <CircularProgress sx={{ display: 'block', margin: 'auto' }} />
      </TableContainer>
    );
  }

  if (error) {
    return (
      <TableContainer component={Paper} sx={{ bgcolor: '#f2f2f2', p: 3 }}>
        <Typography color="error" align="center">
          {error}
        </Typography>
      </TableContainer>
    );
  }

  return (
    <TableContainer component={Paper} sx={{ bgcolor: '#f2f2f2', p: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Property</TableCell>
            <TableCell>Tenants</TableCell>
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

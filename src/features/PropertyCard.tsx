import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  TablePagination,
  Link as MuiLink,
} from '@mui/material';
import { useProperties } from '../hooks/useProperties';

export const PropertyCard = () => {
  const { properties, loading, error } = useProperties();

  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

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
          {properties
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((property) => (
              <TableRow key={property.id}>
                <TableCell>
                  <div className="flex flex-col">
                    <p className="font-semibold">{property.name}</p>
                    <p>{property.address}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="pl-5">{property.tenantCount}</div>
                </TableCell>
                <TableCell>${property.rent}</TableCell>
                <TableCell>
                  <MuiLink
                    component={Link}
                    className="!font-semibold !text-[#0088cc] hover:!text-[#33b5e5] !no-underline txt"
                    to={`/dashboard/property/${property.id}`}
                    color="primary"
                  >
                    View tenants
                  </MuiLink>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={properties.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[rowsPerPage]} 
      />
    </TableContainer>
  );
};

import { useEffect, useState } from 'react';
import { fetchTenantsByProperty } from '../services/api';

export interface Tenant {
  id: string;
  name: string;
  leaseStart: string;
  EndDate: string;
  rent: number;
  paymentStatus: 'Paid' | 'Unpaid';
  propertyId: string;
}

export const useTenants = (propertyId: string | undefined) => {
  const [tenants, setTenants] = useState<Tenant[]>([]);

  useEffect(() => {
    if (!propertyId) {
        // If there's no propertyId, fetch all tenants
        fetchTenantsByProperty("").then(setTenants);
      } else {
        // Otherwise, fetch tenants by property
        fetchTenantsByProperty(propertyId).then(setTenants);
      }
    }, [propertyId]);

  return tenants;
};

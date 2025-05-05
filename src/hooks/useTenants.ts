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
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); 
      try {
        const data = await fetchTenantsByProperty(propertyId || "");
        setTenants(data);
      } catch (err) {
        setError('Failed to fetch tenants'); 
        console.error('Error fetching tenants:', err);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, [propertyId]);

  return { tenants, loading, error }; 
};

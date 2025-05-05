import { useEffect, useState } from 'react';
import { fetchProperties, fetchTenantsByProperty } from '../services/api';

export const useProperties = () => {
  const [properties, setProperties] = useState<any[]>([]);
  const [tenants, setTenants] = useState<any[]>([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); 
      try {
        const fetchedProperties = await fetchProperties();
        setProperties(fetchedProperties);
        
        const tenantsData = await Promise.all(fetchedProperties.map((property: any) => 
          fetchTenantsByProperty(property.id)
        ));

        setTenants(tenantsData.flat());
      } catch (err) {
        setError('Failed to fetch data'); 
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  const propertiesWithTenantCount = properties.map((property: any) => {
    const tenantCount = tenants.filter((tenant: any) => tenant.propertyId === property.id).length;
    return { ...property, tenantCount };
  });

  return { properties: propertiesWithTenantCount, loading, error };
};

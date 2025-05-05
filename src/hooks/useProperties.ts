// src/hooks/useProperties.ts

import { useEffect, useState } from 'react';
import { fetchProperties } from '../services/api';
import { fetchTenantsByProperty } from '../services/api';

export const useProperties = () => {
  const [properties, setProperties] = useState([]);
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    fetchProperties().then(setProperties);
    fetchTenantsByProperty("").then(setTenants);
  }, []);

  // Calculate number of tenants per property
  const propertiesWithTenantCount = properties.map((property: any) => {
    const tenantCount = tenants.filter((tenant: any) => tenant.propertyId === property.id).length;
    return { ...property, tenantCount };
  });

  return { properties: propertiesWithTenantCount };
};

// export const fetchProperties = async () => {
//     const res = await fetch('http://localhost:5000/properties');
//     return res.json();
//   };
  
//   export const fetchTenantsByProperty = async (propertyId: string) => {
//     const res = await fetch(`http://localhost:5000/tenants?propertyId=${propertyId}`);
//     return res.json();
//   };

export const fetchProperties = async () => {
  const res = await fetch('http://localhost:5000/properties');
  if (!res.ok) throw new Error('Failed to fetch properties');
  return res.json();
};

export const fetchTenantsByProperty = async (propertyId: string) => {
  const res = await fetch(`http://localhost:5000/tenants?propertyId=${propertyId}`);  
  if (!res.ok) throw new Error('Failed to fetch tenants');
  return res.json();
};

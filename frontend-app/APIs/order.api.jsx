const API_BASE_URL = 'http://localhost:5000/api';

export const api = {
  // Get all orders
  getAllOrders: async () => {
    const response = await fetch(`${API_BASE_URL}/orders`);
    if (!response.ok) throw new Error('Failed to fetch orders');
    return response.json();
  },

  // Get order by UUID
  getOrderById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/orders/${id}`);
    if (!response.ok) throw new Error('Order not found');
    return response.json();
  },

  // Get all orders for a specific customer
  getOrdersByCustomerId: async (customerId) => {
    const response = await fetch(`${API_BASE_URL}/orders/customer/${customerId}`);
    if (!response.ok) throw new Error('Failed to fetch customer orders');
    return response.json();
  }
};
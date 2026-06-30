import { useState } from 'react';

export default function AddOrder() {
  const [formData, setFormData] = useState({
    customerName: '',
    phoneNumber: '',
    productName: '',
    amount: '',
    paymentStatus: 'Pending',
    orderStatus: 'Pending'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Order Payload:', formData);
    // Add API integration logic here
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Create New Order</h1>
        <p className="text-sm text-gray-500">Add a new record to the central ledger.</p>
      </header>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 rounded-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Customer Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase text-gray-500 mb-1">Customer Name</label>
              <input type="text" required className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 p-2 text-sm" onChange={(e) => setFormData({...formData, customerName: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-gray-500 mb-1">Phone Number</label>
              <input type="tel" required className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 p-2 text-sm" onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})} />
            </div>
          </div>

          {/* Order Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase text-gray-500 mb-1">Product Name</label>
              <input type="text" required className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 p-2 text-sm" onChange={(e) => setFormData({...formData, productName: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-gray-500 mb-1">Amount</label>
              <input type="number" required className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 p-2 text-sm" onChange={(e) => setFormData({...formData, amount: e.target.value})} />
            </div>
          </div>
        </div>

        {/* Dropdowns */}
        <div className="grid grid-cols-2 gap-6 mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
          <div>
            <label className="block text-xs font-mono uppercase text-gray-500 mb-1">Payment Status</label>
            <select className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 p-2 text-sm" onChange={(e) => setFormData({...formData, paymentStatus: e.target.value})}>
              <option>Pending</option>
              <option>Paid</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-mono uppercase text-gray-500 mb-1">Order Status</label>
            <select className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 p-2 text-sm" onChange={(e) => setFormData({...formData, orderStatus: e.target.value})}>
              <option>Pending</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>
          </div>
        </div>

        <button type="submit" className="mt-8 w-full bg-blue-600 text-white py-2 text-sm font-medium uppercase tracking-widest hover:bg-blue-700">
          Commit Order Record
        </button>
      </form>
    </div>
  );
}
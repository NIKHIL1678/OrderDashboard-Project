import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import OrderDashboard from './components/Pages/orderDashboard';

// Simple Home Page Component
const HomePage = () => (
  <div className="p-8 flex flex-col items-center justify-center min-h-[60vh] text-center">
    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Welcome to ZipZy HR</h1>
    <p className="text-gray-500 dark:text-gray-400 max-w-lg">
      Enterprise-grade management system. Navigate to the dashboard to view recent orders and activities.
    </p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* The MainLayout wraps these routes with the Navbar on top */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<OrderDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
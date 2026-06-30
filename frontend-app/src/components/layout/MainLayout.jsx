import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
      <Navbar />
      
      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
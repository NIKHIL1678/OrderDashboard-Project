import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Dashboard', path: '/dashboard' },
  ];

  return (
    <header className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4 md:px-8 sticky top-0 z-50">
      
      {/* Brand / Logo */}
      <div className="flex items-center gap-8">
        <span className="text-xl font-bold font-mono tracking-tighter text-blue-600 dark:text-blue-400">
          ZipZy HR
        </span>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) => `
                px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${isActive 
                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }
              `}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Right Actions & Profile */}
      <div className="flex items-center gap-4 ml-auto">
        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs">
          NT
        </div>
      </div>
    </header>
  );
}
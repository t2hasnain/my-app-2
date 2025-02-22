export default function Header() {
    return (
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold">My Website</h1>
  
          {/* Navigation Links */}
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="hover:text-gray-300 transition">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition">About</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  
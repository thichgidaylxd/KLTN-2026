export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <p className="text-gray-400">KLTN Project</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p className="text-gray-400">Email: info@kltn.com</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow</h3>
            <p className="text-gray-400">Social Links</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 KLTN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

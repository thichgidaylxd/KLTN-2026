/**
 * About Page
 * Trang về ứng dụng
 */
export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-semibold text-gray-900">KLTN</h1>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Về ứng dụng này
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Đây là một ứng dụng web được phát triển bằng React + TypeScript.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Công nghệ sử dụng
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>React 18</li>
            <li>TypeScript</li>
            <li>Redux Toolkit</li>
            <li>React Router v6</li>
            <li>Tailwind CSS</li>
            <li>Axios</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Tính năng chính
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Xác thực người dùng với OTP</li>
            <li>Quản lý trạng thái với Redux</li>
            <li>Định tuyến với React Router</li>
            <li>Giao diện responsive với Tailwind CSS</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

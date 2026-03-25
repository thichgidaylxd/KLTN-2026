import { Link } from "react-router-dom";

/**
 * NotFound Component (404 Page)
 * Hiển thị khi user truy cập route không tồn tại
 */
export const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-4">Page not found</p>
      <p className="text-gray-500 mb-8">
        Trang bạn tìm kiếm không tồn tại hoặc đã bị xóa.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Quay lại trang chủ
      </Link>
    </div>
  </div>
);

export default NotFound;

/**
 * LoadingFallback Component
 * Hiển thị loading spinner khi component đang load
 * Dùng cho Suspense fallback trong Router
 */
export const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
      <p className="mt-4 text-gray-600">Loading...</p>
    </div>
  </div>
);

export default LoadingFallback;

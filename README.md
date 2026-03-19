# KLTN Project


## 📋 Cấu trúc Dự án

```
├── public/              # Static files
├── src/
│   ├── assets/          # Ảnh, font, icons, CSS...
│   ├── components/      # React components
│   │   ├── hooks/       # Custom hooks
│   │   ├── layout/      # Layout components (Navbar, Sidebar, Footer)
│   │   ├── ui/          # UI components (Button, Modal, Input)
│   │   └── utils/       # Utility functions
│   ├── config/          # Configuration files (axios, env, theme)
│   ├── pages/           # Page components
│   │   ├── Home/
│   │   ├── About/
│   │   └── Dashboard/
│   ├── routes/          # Route definitions
│   ├── services/        # API services (authService, userService)
│   ├── store/           # Redux store
│   │   └── slices/      # Redux slices
│   ├── types/           # TypeScript type definitions
│   ├── App.tsx          # Main App component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── .env                 # Environment variables
├── .gitignore           # Git ignore rules
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
├── vite.config.ts       # Vite config
├── tailwind.config.js   # Tailwind CSS config
└── README.md            # Project documentation
```

## 🚀 Bắt Đầu

### Yêu Cầu
- Node.js (v14 hoặc cao hơn)
- npm hoặc yarn

### Cài Đặt Dependencies
```bash
npm install
```

### Chạy Development Server
```bash
npm run dev
```

Server sẽ chạy tại `http://localhost:5173`

### Build cho Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📦 Stack Công Nghệ

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router v6** - Routing
- **Redux Toolkit** - State management
- **Axios** - HTTP client
- **Tailwind CSS** - Styling
- **Tailwind Autoprefixer** - CSS vendor prefixes

## 📂 Hướng Dẫn Thêm File

### Thêm Page Mới
1. Tạo thư mục trong `src/pages/[PageName]`
2. Tạo file `[PageName].tsx`
3. Thêm route trong `src/routes/index.tsx`

### Thêm Component Mới
1. Tạo file trong `src/components/[category]/[ComponentName].tsx`
2. Export component
3. Import và sử dụng

### Thêm Service API
1. Tạo file trong `src/services/[serviceName].ts`
2. Sử dụng `axiosInstance` từ `src/config/axios.ts`
3. Define return types từ `src/types/`

### Thêm Redux Slice
1. Tạo file trong `src/store/slices/[sliceName].ts`
2. Import vào `src/store/index.ts`

## 🔄 Environment Variables

Tạo file `.env` tại root project:

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_APP_NAME=KLTN
```

## 🎨 Tailwind CSS

Tailwind CSS đã được cấu hình. Bạn có thể sử dụng các utility classes:

```tsx
<div className="flex justify-center items-center bg-blue-500 text-white p-4 rounded-lg">
  Button
</div>
```

## 📝 Coding Style

- Sử dụng TypeScript để type-checking
- Sử dụng functional components với hooks
- Sử dụng Redux cho state management
- Sử dụng Tailwind CSS classes cho styling

## 🤝 Đóng Góp

Hãy tạo branch mới cho mỗi feature:

```bash
git checkout -b feature/feature-name
```

## 📄 License

MIT

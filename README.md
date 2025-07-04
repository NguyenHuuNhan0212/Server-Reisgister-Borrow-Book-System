# NienLuanNganh

# 📚 HỆ THỐNG QUẢN LÝ THƯ VIỆN - BACKEND

## 📌 Giới thiệu

Đây là **dự án backend** của hệ thống quản lý thư viện, được xây dựng bằng **Node.js** kết hợp với **MongoDB**. Hệ thống cho phép quản lý các thực thể như:

- Độc giả
- Nhân viên
- Sách
- Nhà xuất bản
- Vị trí sách
- Loại sách
- Trạng thái mượn
- Theo dõi mượn trả sách

## 🛠 Công nghệ sử dụng

- **Node.js + Express.js** – Server backend
- **MongoDB + Mongoose** – Quản lý dữ liệu
- **dotenv** – Quản lý biến môi trường
- **nodemon** – Tự động reload server khi thay đổi
- **bcryptjs** – Mã hóa mật khẩu
- **jsonwebtoken** – Xác thực người dùng (nếu cần)
- **Cấu trúc chuẩn MVC** – Tách biệt rõ: controller, model, routes, services

## 📁 Cấu trúc thư mục
```bash
src/
│
├── config/                # Cấu hình MongoDB
│   └── mongoose.js
│
├── controllers/           # Các controller xử lý logic request
│   ├── sach.controller.js
│   ├── docgia.controller.js
│   └── ...
│
├── models/                # Các schema mongoose
│   ├── sach.model.js
│   ├── nhanvien.model.js
│   └── ...
│
├── routes/                # Khai báo các route API
│   └── ...
│
├── services/              # Xử lý logic nghiệp vụ, lỗi
│   └── ApiError.js
│
├── .env                   # Biến môi trường
├── server.js              # Điểm khởi chạy ứng dụng
└── README.md              # File hướng dẫn (file hiện tại)

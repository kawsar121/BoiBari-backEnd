# 📚 Student Book Library & Marketplace

A full-stack, production-ready web application where students can buy and sell new or used books.  
The platform also includes an admin-managed store, secure payment systems, and powerful dashboards.

---

## 🚀 Features

### 👤 User Features
- User authentication (JWT-based)
- User dashboard
- Sell old books & new books
- Browse books by category
- Advanced product search & filters
- Add to cart & checkout
- Order history
- Secure payments (SSLCommerz & Stripe)

### 🛠️ Admin Features
- Admin dashboard
- Manage users (block / delete users)
- Manage books (add, update, delete)
- Manage categories
- Order management
- Admin store (sell books directly)
- Sales & order overview

---

## 🧱 Tech Stack

### 🔙 Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- MVC Architecture
- JWT Authentication
- RESTful APIs

### 🔜 Frontend
- Next.js (App Router)
- Tailwind CSS
- Animation Library (Framer Motion)
- Server-Side Rendering (SSR)
- Static Site Generation (SSG)

### 💳 Payment Integration
- SSLCommerz
- Stripe

---

## 📂 Project Structure

```txt
student-book-library-marketplace/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── middlewares/
│   │   ├── utils/
│   │   └── app.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── login/page.js
│   ├── register/page.js
│   ├── dashboard/page.js
│   ├── admin/page.js
│   ├── books/[id]/page.js
│   ├── reset-password/[token]/page.js
│
├── components/
│   ├── Navbar.jsx
│   ├── BookCard.jsx
│   ├── Carousel.jsx
│   ├── SearchBar.jsx
│
├── lib/
│   └── api.js
│
├── middleware.js
│
└── README.md
⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/student-book-library-marketplace.git
2️⃣ Backend Setup
cd backend
npm install
npm run dev

Create a .env file:

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
SSL_STORE_ID=your_sslcommerz_id
SSL_STORE_PASSWORD=your_sslcommerz_password
STRIPE_SECRET_KEY=your_stripe_secret
3️⃣ Frontend Setup
cd frontend
npm install
npm run dev
🔐 Security

JWT-based authentication

Protected admin routes

Secure payment handling

Environment variable protection

🌍 Deployment Ready

Frontend: Vercel / Netlify

Backend: VPS / Render / Railway

Database: MongoDB Atlas

🛣️ Future Improvements

Review & rating system

Wishlist

Chat between buyers & sellers

Email notifications

Invoice generation (PDF)

👨‍💻 Author

Tohidul Islam Kawsar Bhuiyan
Frontend & MERN Stack Developer
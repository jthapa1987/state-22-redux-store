# Shop-Shop 🛒

E-commerce platform refactored from Context API to Redux for global state management.

## 🚀 Live Demo

[View Deployment](#)

## 📦 Tech Stack

- React 18
- Redux Toolkit
- React-Redux
- Redux Persist

## ✨ Features

- Product browsing by category
- Add/remove items from cart
- User authentication (signup/login)
- Order history tracking
- Persistent cart state

## 🏃‍♂️ Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build


📁 Project Structure

src/
├── app/store.js          # Redux store config
├── features/              # Redux slices
│   ├── cart/             # Cart state & actions
│   ├── products/         # Products state
│   ├── categories/       # Categories state
│   └── user/             # User & auth state
└── components/           # React components



🔑 Key Changes from Context API

    ❌ Removed Context Providers

    ✅ Added Redux Provider

    ✅ Replaced useContext with useSelector/useDispatch

    ✅ Centralized reducers in Redux store

📝 License

MIT

👨‍💻 Author

Jeevan Thapa
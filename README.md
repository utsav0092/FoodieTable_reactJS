# FoodieTable - Food Ordering Application

A modern, fully responsive React-based food ordering web application that allows users to browse food items, filter by category, search for specific foods, manage a shopping cart, and proceed to checkout.

## 🌟 Features

### Core Functionality
- **Category Filtering** - Browse food items across multiple categories (Breakfast, Lunch, Dinner, etc.)
- **Search** - Real-time search functionality to find specific food items
- **Shopping Cart** - Add/remove items, adjust quantities, and view real-time price calculations
- **Checkout Process** - Secure order management with order summary and success confirmation
- **Protected Routes** - Checkout flow is protected to ensure valid cart state

### Design & UX
- **Fully Responsive** - Optimized for mobile (320px+), tablet (640px-1024px), and desktop (1024px+)
- **Toast Notifications** - User feedback on cart actions
- **Smooth Animations** - Loading spinners and interactive elements
- **Modern UI** - Built with Tailwind CSS for clean, professional styling

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 18** | UI library and component framework |
| **Vite** | Lightning-fast build tool and dev server |
| **Redux Toolkit** | State management (cart, categories, search) |
| **Tailwind CSS** | Utility-first CSS framework |
| **React Router v6** | Client-side routing |
| **React Hot Toast** | Toast notifications |
| **React Icons** | Icon library |
| **React Spinners** | Loading animations |

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Steps

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview the production build**
   ```bash
   npm run preview
   ```

5. **Lint code**
   ```bash
   npm run lint
   ```

## 📂 Project Structure

```
src/
├── Components/
│   ├── Navbar.jsx            # Top navigation with search and cart icon
│   ├── CategoryMenu.jsx      # Category filter buttons
│   ├── CenterImg.jsx         # Hero banner component
│   ├── FoodItems.jsx         # Food grid with filtering logic
│   ├── FoodCard.jsx          # Individual food item card
│   ├── Cart.jsx              # Shopping cart display
│   ├── ItemCard.jsx          # Cart item component
│   └── ProtectedRoute.jsx    # Route protection wrapper
├── Pages/
│   ├── Home.jsx              # Main landing page
│   ├── Success.jsx           # Order confirmation page
│   └── Error.jsx             # 404 error page
├── data/
│   └── FoodData.js           # Food items database
├── redux/
│   ├── Store.js              # Redux store configuration
│   └── slices/
│       ├── CartSlice.jsx     # Cart state management
│       ├── CategorySlice.jsx # Category state management
│       └── SearchSlice.jsx   # Search state management
├── App.jsx                   # Main app component
├── main.jsx                  # React entry point
└── index.css                 # Global styles
```

## 🚀 How to Use

1. **Browse Food Items** - The home page displays all available food items
2. **Filter by Category** - Click category buttons to filter items
3. **Search Foods** - Use the search bar in the navbar to find specific items
4. **Add to Cart** - Click "Add to Cart" on any food card
5. **View Cart** - Click the cart icon to see your selected items
6. **Adjust Quantities** - Increase or decrease item quantities in the cart
7. **Checkout** - Proceed to checkout to complete your order
8. **Order Confirmation** - View your order success page

## 🎨 Responsive Design

The application is fully responsive with optimized layouts for:
- **Mobile**: Single column, compact spacing
- **Tablet**: Two-column layout with optimized touch interactions
- **Desktop**: Multi-column grid with full feature display

## 📝 Redux State Management

The app uses Redux Toolkit for state management with three main slices:
- **CartSlice** - Manages shopping cart items and totals
- **CategorySlice** - Tracks the currently selected food category
- **SearchSlice** - Handles search query state

## 🔒 Route Protection

The `/success` route is protected and can only be accessed after completing checkout with items in the cart.

## 📄 Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create optimized production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 💡 Key Components

- **Navbar** - Search and navigation with responsive design
- **CategoryMenu** - Dynamic category filtering
- **FoodItems** - Grid display with filtering and search integration
- **Cart** - Full cart management interface
- **ProtectedRoute** - Prevents unauthorized access to checkout

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ using React + Vite**
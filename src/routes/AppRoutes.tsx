import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BookDetails from "../pages/BookDetails";
import { CartProvider } from "../context/CartContext";
import Header from "../components/Header";
import CartSidebar from "../components/CartSidebar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";

import { useState } from "react";
import Categories from "../pages/Categories";
import Orders from "../pages/Orders";

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
  genre: string;
  description: string;
}

interface AppRoutesProps {
  books: Book[];
}

const AppRoutes = ({ books }: AppRoutesProps) => {
  const [searchText, setSearchText] = useState("");

  const genres = Array.from(
    new Set(books.map((book) => book.genre.toLowerCase()))
  );
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Header
            books={books}
            searchText={searchText}
            setSearchText={setSearchText}
          />
          <div className="flex-1">
            <CartSidebar setSearchText={setSearchText} />
            <Routes>
              <Route path="/" element={<Home books={books} />} />
              <Route path="/book/:id" element={<BookDetails books={books} />} />
              <Route
                path="/books"
                element={<Categories books={books} genres={genres} searchText={searchText}
            setSearchText={setSearchText}/>}
              />
              <Route
                path="/orders"
                element={<Orders />}
              />
            </Routes>
            <ToastContainer position="top-right" autoClose={3000} />
          </div>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;

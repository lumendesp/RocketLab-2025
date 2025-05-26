import { useContext } from "react";
import { BsCart3 } from "react-icons/bs";
import { CartContext } from "../context/CartContext";
import { Link, useLocation } from "react-router-dom";

import { useState } from "react";
import { FiMenu } from "react-icons/fi";

import SearchBar from "./SearchBar";

import logo from "../assets/logo.png";

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
  genre: string;
  description: string;
}

interface HomeProps {
  books: Book[];
  searchText: string;
  setSearchText: (text: string) => void;
}

const Header = ({ books, searchText, setSearchText }: HomeProps) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const cart = useContext(CartContext);

  const totalQuantity = cart?.cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const handleClose = () => {
    setSearchText(""); // limpa o texto da busca
    cart?.toggleCart();
  };

  const location = useLocation();
  const isBookDetails = location.pathname.startsWith("/books");

  return (
    <header className="bg-blue-950 text-white px-6 py-4 flex items-center justify-between w-full">
      <div className="flex items-center gap-2">
        <Link
          to="/"
          onClick={() => setSearchText("")}
          className="flex items-center gap-2"
        >
          <img src={logo} alt="" className="invert w-12" />
          <span className="text-xl font-semibold">RocketLib</span>
        </Link>
      </div>
      {!isBookDetails && (
        <div className="hidden lg:block w-[450px]">
          <SearchBar
            books={books}
            searchText={searchText}
            setSearchText={setSearchText}
          />
        </div>
      )}

      <div className="hidden md:flex gap-5">
        <Link to="/books">
          <div className="cursor-pointer" onClick={() => setSearchText("")}>
            Explorar
          </div>
        </Link>
        <Link to="/orders">
          <div className="cursor-pointer" onClick={() => setSearchText("")}>
            Meus Pedidos
          </div>
        </Link>
        <div className="flex items-center gap-1">
          <div className="cursor-pointer" onClick={handleClose}>
            <BsCart3 size={18} />
          </div>
          <p
            className="cursor-pointer text-sm font-semibold"
            onClick={cart?.toggleCart}
          >
            {totalQuantity}
          </p>
        </div>
      </div>

      {/* responsividade pro mobile: mostrar apenas o ícone do menu e do carrinho */}
      <div className="md:hidden flex items-center gap-3 relative">
        <button onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <FiMenu size={22} />
        </button>

        <div className="flex items-center gap-1">
          <div className="cursor-pointer" onClick={handleClose}>
            <BsCart3 size={18} />
          </div>
          <p
            className="cursor-pointer text-sm font-semibold"
            onClick={cart?.toggleCart}
          >
            {totalQuantity}
          </p>
        </div>

        {/* backdrop para fechar o menu ao clicar fora */}
        {showMobileMenu && (
          <div
            className="fixed inset-0 z-30"
            onClick={() => setShowMobileMenu(false)}
          />
        )}

        {/* menu dropdown */}
        {showMobileMenu && (
          <div className="absolute top-10 right-0 bg-white text-black rounded-md shadow-lg w-40 z-40 py-2">
            <Link to="/books">
              <div
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSearchText("");
                  setShowMobileMenu(false);
                }}
              >
                Explorar
              </div>
            </Link>
            <Link to="/orders">
              <div
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSearchText("");
                  setShowMobileMenu(false);
                }}
              >
                Meus Pedidos
              </div>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

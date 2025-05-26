import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
  genre: string;
  description: string;
}

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const cart = useContext(CartContext);

  const handleAddToCart = () => {
    if (cart) {
      cart.addToCart({
        id: book.id,
        title: book.title,
        price: book.price,
        image: book.image,
        quantity: 1,
      });
      toast.success("Adicionado ao carrinho!", {
        autoClose: 2000,
      });
    }
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/book/${book.id}`);
  };

  return (
    <div
      className="rounded-lg p-4 flex flex-col items-center w-60 group hover:bg-blue-950 transition-all duration-200 cursor-pointer"
      style={{ boxShadow: "0 0 10px 1px #00000015" }}
    >
      <img
        src={book.image}
        alt={book.title}
        className="h-[240px] object-cover rounded-lg -mt-20 group-hover:scale-105 transition-all duration-300"
        onClick={handleNavigate}
      />

      <h3
        className="text-lg font-semibold mt-3 group-hover:text-white transition-all line-clamp-2 text-center"
        onClick={handleNavigate}
      >
        {book.title}
      </h3>

      <p
        className="text-sm text-gray-600 group-hover:text-gray-400 transition-all mb-5"
        onClick={handleNavigate}
      >
        {book.author}
      </p>

      <div className="flex flex-col items-center mt-auto gap-1">
        <p
        className="font-bold group-hover:text-white transition-all"
        onClick={handleNavigate}
      >
        R$ {book.price.toFixed(2)}
      </p>

      <button
        className="bg-blue-950 text-white py-2 px-4 rounded group-hover:bg-white group-hover:text-blue-950"
        onClick={handleAddToCart}
      >
        Adicionar ao carrinho
      </button>
      </div>
    </div>
  );
};

export default BookCard;

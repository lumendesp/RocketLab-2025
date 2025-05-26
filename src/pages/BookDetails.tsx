import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";

import loadingGif from "../assets/loading.gif";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { generateBookReview } from "../services/openai";
import ReviewCard from "../components/ReviewCard";

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
  genre: string;
}

interface BookDetailsProps {
  books: Book[];
}

interface ReviewProps {
  name: string;
  text: string;
  score: number;
}

const BookDetails = ({ books }: BookDetailsProps) => {
  const [reviews, setReviews] = useState<Array<ReviewProps>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { id } = useParams();
  const book = books.find((b) => b.id === Number(id));

  const cart = useContext(CartContext);

  const handleAddToCart = () => {
    if (!book) return;
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

  useEffect(() => {
    if (!book) return;

    const fetchReviews = async () => {
      setLoading(true);
      const reviews = await generateBookReview(book.title);
      setReviews(reviews);
      setLoading(false);
    };

    fetchReviews();
  }, [book]);

  if (!book) {
    return <div className="p-8">Livro não encontrado.</div>;
  }

  return (
    <>
      <div className="p-6  mt-6 flex flex-col md:flex-row gap-8 md:gap-24 justify-center items-center">
        <img
          src={book.image}
          alt={book.title}
          className="w-48 md:w-64 rounded-lg"
        />
        <div className="max-w-full md:max-w-[400px] text-center md:text-left">
          <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">Autor:</span> {book.author}
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">Preço:</span> R${" "}
            {book.price.toFixed(2)}
          </p>
          <h2 className="text-lg font-semibold mt-6 mb-2">Sinopse</h2>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio minus
            labore ad aperiam quae exercitationem culpa perspiciatis animi
            fugiat possimus, quas rerum deleniti officia molestias maxime
            molestiae eaque nesciunt corrupti!
          </p>
          <button
            className="bg-blue-950 text-white py-2 px-6 rounded mt-6 hover:bg-blue-900"
            onClick={handleAddToCart}
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center w-full py-8">
          <img src={loadingGif} alt="Carregando..." className="w-16 h-16" />
        </div>
      ) : (
        <div className="sm:flex-row flex-wrap lg:flex-nowrap flex p-8 gap-4">
          {reviews.map((item: ReviewProps) => (
            <ReviewCard
              key={item.name}
              name={item.name}
              text={item.text}
              score={item.score}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default BookDetails;

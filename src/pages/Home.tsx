import BookCard from "../components/BookCard";

import { Link } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";

import booksImage from "../assets/books.png";

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
  genre: string;
}

interface HomeProps {
  books: Book[];
}

const Home = ({ books }: HomeProps) => {
  const featuredBooks = books.slice(0, 5);
  return (
    <>
      <div className="w-full lg:max-h-[600px] flex flex-col  bg-blue-100 p-8 lg:justify-center items-center lg:gap-32 lg:flex-row">
        <div>
          <h2 className="text-[28px] font-bold text-blue-900">
            Bem-vindo ao seu
          </h2>
          <span className="text-[36px] font-bold text-blue-900">
            MUNDO de HISTÓRIAS
          </span>
          <p className="text-blue-800 mt-2">
            Descubra livros incríveis que vão te inspirar, emocionar e
            transformar.
          </p>
          <p className="text-blue-800 mb-4">
            Explore novas narrativas e encontre a próxima leitura que vai
            conquistar você.
          </p>
          <Link to="/books">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-800 transition font-medium flex items-center gap-1">
              Comece a explorar
              <IoIosArrowForward size={20} />
            </button>
          </Link>
        </div>
        <img className="hidden lg:block w-full max-w-[477px]" src={booksImage} />
      </div>

      <div className="p-8">
        {/* livros em destaque */}
        <p className="text-3xl font-bold text-blue-900 text-center mt-8 drop-shadow-md">
          Destaques da Semana
        </p>
        <div className="flex flex-wrap gap-x-12 gap-y-24 justify-center mb-16 mt-28">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

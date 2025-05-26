import { useState } from "react";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
  genre: string;
}

interface CategoriesProps {
  books: Book[];
  genres: string[];
  searchText: string;
  setSearchText: (text: string) => void;
}

const Categories = ({
  books,
  genres,
  searchText,
  setSearchText,
}: CategoriesProps) => {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  // filtra os livros pelo gênero selecionado
  const filteredBooks = selectedGenre
    ? books.filter(
        (book) => book.genre.toLowerCase() === selectedGenre.toLowerCase()
      )
    : books;

  return (
    <>
      <div className="hidden sm:block">
        <SearchBar
        books={books}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      </div>

      {/* botões de filtro de gênero */}
      <div className="flex gap-4 p-4 flex-wrap justify-center mb-20 mt-8">
        <button
          onClick={() => setSelectedGenre(null)}
          className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200 ${
            selectedGenre === null
              ? "bg-blue-950 text-white"
              : "bg-gray-200 text-blue-950 hover:bg-gray-300"
          }`}
        >
          Todos
        </button>

        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            className={`px-4 py-2 rounded-full font-semibold capitalize transition-colors duration-200 ${
              selectedGenre?.toLowerCase() === genre.toLowerCase()
                ? "bg-blue-950 text-white"
                : "bg-gray-200 text-blue-950 hover:bg-gray-300"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* a lista dos livros filtrados */}
      <div className="flex flex-wrap gap-x-12 gap-y-24 justify-center p-8 mb-16">
        {filteredBooks.length === 0 ? (
          <p className="text-gray-500">Nenhum livro encontrado.</p>
        ) : (
          filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
        )}
      </div>
    </>
  );
};

export default Categories;

import { useLocation } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
  genre: string;
}

interface SearchBarProps {
  books: Book[];
  searchText: string;
  setSearchText: (text: string) => void;
}

const SearchBar = ({ books, searchText, setSearchText }: SearchBarProps) => {
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const location = useLocation();

  // verifica se está na página /books, pq se estiver, vou estilizar de forma diferente
  const isBooksPage = location.pathname === "/books";

  return (
    <div className={`relative w-full max-w-md mr-auto ml-auto ${isBooksPage ? "mt-8" : ""}`}>
      <input
        type="text"
        placeholder="Buscar livros..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className={`w-full pr-10 pl-4 py-2 rounded-xl text-sm focus:outline-none ${
        isBooksPage ? "bg-blue-950 text-white placeholder-gray-300" : " text-blue-950"
      }`}
      />
      <IoSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" />

      {/* aqui ficam os resultados da busca */}
      {searchText && (
        <ul className="absolute top-full left-0 right-0 bg-white text-blue-950 mt-1 rounded shadow max-h-80 overflow-y-auto z-50">
          {filteredBooks.length === 0 ? (
            <li className="px-4 py-2 text-sm text-gray-500">
              Nenhum livro encontrado.
            </li>
          ) : (
            filteredBooks.map((book) => (
              <li key={book.id}>
                <Link
                  to={`/book/${book.id}`}
                  className="flex items-center gap-3 px-4 py-2 hover:bg-blue-100"
                  onClick={() => setSearchText("")}
                >
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-fit h-24 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium">{book.title}</p>
                    <p className="text-sm text-gray-600">{book.author}</p>
                    <p className="text-sm text-blue-700 font-semibold">
                      R$ {book.price.toFixed(2)}
                    </p>
                  </div>
                </Link>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;

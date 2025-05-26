import AppRoutes from "./routes/AppRoutes";

import nineteenEightyFourImage from "./assets/1984.png";
import cityOfBonesImage from "./assets/city-of-bones.png";
import goneGirlImage from "./assets/gone-girl.png";
import harryPotterImage from "./assets/harry-potter.png";
import hollyImage from "./assets/holly.png";
import maybeYouShouldTTalkImage from "./assets/maybe-you-should-talk-to-someone.png";
import itEndsWithUsImage from "./assets/it-ends-with-us.png";
import lePetitPrinceImage from "./assets/le-petit-prince.png";
import lesMiserablesImage from "./assets/les-miserables.png";
import lordOfTheRingsImage from "./assets/lord-of-the-rings.png";
import normalPeopleImage from "./assets/normal-people.png";
import prideAndPrejudiceImage from "./assets/pride-and-prejudice.png";
import theFaultInOurStarsImage from "./assets/the-fault-in-our-stars.png";
import theHousemaidImage from "./assets/the-housemaid.png";
import theSilenceOfTheLambsImage from "./assets/the-silence-of-the-lambs.png";
import theSubtleArtImage from "./assets/the-subtle-art-of-not-giving-a-fuck.png";
import theThingsImage from "./assets/the-things-you-can-see-only-when-you-slow-down.png";
import verityImage from "./assets/verity.png";


const books = [
  {
    id: 1,
    title: "O Senhor dos Anéis",
    author: "J.R.R. Tolkien",
    price: 59.9,
    image: lordOfTheRingsImage,
    genre: "Fantasia"
  },
  {
    id: 2,
    title: "Harry Potter e o Prisioneiro de Azkaban",
    author: "J.K. Rowling",
    price: 69.9,
    image: harryPotterImage,
    genre: "Fantasia"
  },
  {
    id: 3,
    title: "Cidade dos Ossos",
    author: "Cassandra Clare",
    price: 54.9,
    image: cityOfBonesImage,
    genre: "Fantasia"
  },
  {
    id: 4,
    title: "Verity",
    author: "Colleen Hoover",
    price: 49.9,
    image: verityImage,
    genre: "Suspense"
  },
  {
    id: 5,
    title: "Garota Exemplar",
    author: "Gillian Flynn",
    price: 46.9,
    image: goneGirlImage,
    genre: "Suspense"
  },
  {
    id: 6,
    title: "A Empregada",
    author: "Freida McFadden",
    price: 59.9,
    image: theHousemaidImage,
    genre: "Suspense"
  },
  {
    id: 7,
    title: "O Silêncio dos Inocentes",
    author: "Thomas Harris",
    price: 52.9,
    image: theSilenceOfTheLambsImage,
    genre: "Suspense"
  },
  {
    id: 8,
    title: "1984",
    author: "George Orwell",
    price: 52.5,
    image: nineteenEightyFourImage,
    genre: "Ficção distópica"
  },
  {
    id: 9,
    title: "É Assim que Acaba",
    author: "Colleen Hoover",
    price: 42.9,
    image: itEndsWithUsImage,
    genre: "Drama"
  },
  {
    id: 10,
    title: "Normal People",
    author: "Sally Rooney",
    price: 38.5,
    image: normalPeopleImage,
    genre: "Drama"
  },
  {
    id: 11,
    title: "O Pequeno Príncipe",
    author: "Antoine de Saint-Exupéry",
    price: 29.9,
    image: lePetitPrinceImage,
    genre: "Fábula / Fantasia"
  },
  {
    id: 12,
    title: "Les Misérables",
    author: "Victor Hugo",
    price: 58.0,
    image: lesMiserablesImage,
    genre: "Drama"
  },
  {
    id: 13,
    title: "Orgulho e Preconceito",
    author: "Jane Austen",
    price: 45.9,
    image: prideAndPrejudiceImage,
    genre: "Romance"
  },
  {
    id: 14,
    title: "A Culpa é das Estrelas",
    author: "John Green",
    price: 39.9,
    image: theFaultInOurStarsImage,
    genre: "Drama"
  },
  {
    id: 15,
    title: "Holly",
    author: "Stephen King",
    price: 44.9,
    image: hollyImage,
    genre: "Suspense"
  },
  {
    id: 16,
    title: "Talvez Você Deva Conversar com Alguém",
    author: "Lori Gottlieb",
    price: 34.9,
    image: maybeYouShouldTTalkImage,
    genre: "Autoajuda"
  },
  {
    id: 17,
    title: "A Sutil Arte de Ligar o F*da-se",
    author: "Mark Manson",
    price: 36.0,
    image: theSubtleArtImage,
    genre: "Autoajuda"
  },
  {
    id: 18,
    title: "As Coisas que Você Só Vê Quando Desacelera",
    author: "Haemin Sunim",
    price: 32.0,
    image: theThingsImage,
    genre: "Autoajuda"
  },
];



function App() {
  return (
    <>
      <AppRoutes books={books}/>
    </>
  );
}

export default App;

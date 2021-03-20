import "./styles.css";
import Form from "./Form";

const movies = [
  {
    name: "Avenger",
    available: 5
  },
  {
    name: "Terminator",
    available: 4
  }
];

export default function App() {
  return (
    <div>
      <h2>Peliculas</h2>
      {movies.map((movie) => (
        <Form movie={movie} />
      ))}
    </div>
  );
}

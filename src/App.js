import PaginatedItems from "./components/PaginatedItems";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PaginatedItems itemsPerPage={4} />,
    </div>
  );
}

export default App;

import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4">
        <Home />
      </main>
    </div>
  );
};

export default App;

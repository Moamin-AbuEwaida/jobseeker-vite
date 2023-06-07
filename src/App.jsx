import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Job from "./components/Job";
import Value from "./components/Value";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-[85%] m-auto bg-white">
      <Navbar />
      <Search />
      <Job />
      <Value />
      <Footer />
    </div>
  );
}

export default App;

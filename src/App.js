import BackgroundCircle from "./components/BackgroundCircle";
import Details from "./components/Details";
import MainImage from "./components/MainImage";
import Navbar from "./components/Navbar";
import NewFeature from "./components/NewFeature";

function App() {
  return (
    <>
      <Navbar />
      <div className="absolute w-full h-full">
        <BackgroundCircle />
        <NewFeature />
        <MainImage />
        <Details />
      </div>
    </>
  );
}

export default App;

//import components
import NikeProducts from "./components/NikeProducts";
import LouisVuittonProducts from "./components/LouisVuittonProducts";
import HM from "./components/HM";
import NikeProductDescriptions from "./descriptions/NikeProductDescriptions";

function App() {
  return (
    <div className="scrollbar-hide">
      <NikeProducts />
      {/* <LouisVuittonProducts /> */}
      {/* <HM/> */}
      <NikeProductDescriptions />
    </div>
  );
}

export default App;

//import components
import NikeProducts from "./components/NikeProducts";
import LouisVuittonProducts from "./components/LouisVuittonProducts";
import HM from "./components/HM";
import NikeProductDescriptions from "./descriptions/NikeProductDescriptions";
import HMProductDescriptions from "./descriptions/HMProductDescriptions";

function App() {
  return (
    <div className="scrollbar-hide">
      {/* <NikeProducts /> */}
      {/* <LouisVuittonProducts /> */}
      {/* <HM/> */}
      {/* <NikeProductDescriptions /> */}
      <HMProductDescriptions/>
    </div>
  );
}

export default App;

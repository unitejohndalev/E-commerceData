//import components
import NikeProducts from "./components/NikeProducts";
import HMProducts from "./components/HMProducts";
import HerschelProducts from "./components/HerschelProducts";
import NikeProductDescriptions from "./descriptions/NikeProductDescriptions";
import HMProductDescriptions from "./descriptions/HMProductDescriptions";
import HerschelProductDescriptions from "./descriptions/HerschelProductDescriptions";


function App() {
  return (
    <div className="scrollbar-hide">
      <NikeProducts />
      <HMProducts/>
      <HerschelProducts/>
      <NikeProductDescriptions />
      <HMProductDescriptions/>
      <HerschelProductDescriptions/>
    </div>
  );
}
  
export default App;

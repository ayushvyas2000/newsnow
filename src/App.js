import Header from "./components/header/header";
import NewsList from "./components/newslist/newslist";
import { useGlobalContext } from "./context";
import CategorySearch from "./components/categorysearch/categorysearch";
import Pagination from "./components/pagination/pagination";
function App() {

  

  return (
    <>
    <CategorySearch/>
    <Header/>
    <NewsList/>
    <Pagination/>
    </>
  );
}

export default App;

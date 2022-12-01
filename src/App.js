import { Header } from "./Components/Header/Header";
import ApiProvider from "./helper/context/ApiProvider";


function App() {
  return (
    <>
      <ApiProvider>
        <Header />
      </ApiProvider>
    </>
  );
}

export default App;

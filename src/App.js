import { BrowserRouter } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import ApiProvider from "./helper/context/ApiProvider";
import AppRouter from "./routes/AppRouter";
import {Provider} from "react-redux"
import {redux} from "./redux"

function App() {


  return (
    <>
      <Provider redux={redux}>
        <BrowserRouter >
          <ApiProvider>
            <Header />
            <AppRouter />
          </ApiProvider>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

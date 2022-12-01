import { BrowserRouter } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import AppRouter from "./routes/AppRouter";
import ApiProvider from "./helpers/Contexts/Api/ApiProvider";

// Redux
// import { Provider } from 'react-redux';
// import store from './redux/store';

function App() {

  return (
    <>
      <Provider>
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

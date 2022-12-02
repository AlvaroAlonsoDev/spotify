import { BrowserRouter } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import AppRouter from "./routes/AppRouter";

// Redux
//import { Provider } from 'react-redux';
//import store from './redux/store';
import { Helper } from "./Components/Helper/Helper";

function App() {

  return (
    <>
      <BrowserRouter >

        <Helper />

        <Header />
        <AppRouter />


      </BrowserRouter>
    </>
  );
}

export default App;

import { Header } from "./Components/Header/Header";
import AppRouter from "./routes/AppRouter";
import { Helper } from "./Components/Helper/Helper";
import { Player } from "./Components/Player/Player";

function App() {

  return (
    <>

      <Helper />
      <Header />
      <AppRouter />
      <Player />

    </>
  );
}

export default App;

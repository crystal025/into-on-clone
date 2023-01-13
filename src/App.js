import  Router  from './router/Router';
import Header from './util/Header';
import {GlobalStyle} from "./util/global-styled"

function App() {
  return (
  <>
  <GlobalStyle/>
  <Header/>
  <Router/>
  </>

  );
}

export default App;

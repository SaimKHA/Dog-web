import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Text from './components/Text';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
         <Header/>
         <Text/>
         <Cards/>
         <Footer/>
    </div>
  );
}

export default App;

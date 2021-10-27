// == Import
import './style.scss';
import Header from 'src/components/Header';
import Homepage from 'src/components/Homepage';
import Footer from 'src/components/Footer';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Homepage />
    <Footer />
  </div>
);

// == Export
export default App;

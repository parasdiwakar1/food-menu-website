import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import Footer from './Footer/Footer';
import Get from './ExpolreFood/Get';
import Explore from './ExpolreFood/Explore';
import Faq from './ExpolreFood/Faq';
import ExploreTwo from './ExpolreFood/ExploreTwo';
import About from './About/About';
import Banner from './Banner/Banner';

import Header from './Header/Header';
import MealCardsPage from './SearchData/Card';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<>
          <Banner />
          <About />
          <ExploreTwo />
          <Faq />
          <Explore />
          <Get />
        </>} />
        <Route path="/recipes" element={<MealCardsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

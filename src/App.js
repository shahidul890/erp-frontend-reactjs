import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './pages/auth/signup';
import Login from './pages/auth/login';
import Home from './pages/home';
import { Routes, Route } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
import AccuisitionOne from './pages/accuisition/one';
import AccuisitionTwo from './pages/accuisition/two';
import AccuisitionThree from './pages/accuisition/three';
import CategoryDetails from './pages/CategoryDetails.';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Dashboard from './pages/dashboard/Home';
import PageNotFound from './pages/PageNotFound';


function App() {
  // const { t, i18n } = useTranslation();

  return <>
      {/* Define Route */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/step-1' element={<AccuisitionOne />} />
        <Route path='/step-2' element={<AccuisitionTwo />} />
        <Route path='/step-3' element={<AccuisitionThree />} />
        <Route path='/details' element={<CategoryDetails />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
  </>
}

export default App;

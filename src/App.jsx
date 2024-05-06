import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import BestMovie from './pages/favourats/index';
import Movie from './pages/Movies';
import MovieDetails from './pages/Details';
import LogInForm from './pages/Login';
import NOtFoundComponant from './pages/NotFound';
import NavigationBar from './componant/NavBar/index';
import Footer from './componant/footer/index';
import Counter from './componant/counter/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import { LanguageProvider, useLanguage } from './Contexst/languageContext'; // Import LanguageProvider and useLanguage

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoggedIn(true);
    navigate('/BestMovie');
  };

  const { language } = useLanguage();
   
  return (
    
      <>
        <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <NavigationBar />

        <Routes>
          <Route path='/' element={<Movie />} />
          <Route path='/Login' element={<LogInForm onLogin={handleLogin} />} />
          <Route path='/BestMovie' element={loggedIn ? <BestMovie /> : <LogInForm onLogin={handleLogin} />} />
          <Route path='/Details/:id' element={<MovieDetails />} />
          <Route path='/Counter' element={<Counter/>}/>
          <Route path='*' element={<NOtFoundComponant />} />
        </Routes>
        </div>
      
<Footer />
    </>
  );
}

export default App;

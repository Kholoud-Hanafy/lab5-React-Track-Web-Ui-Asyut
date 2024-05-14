// // fetch the data by custom hook 

// import React, { useState, useMemo } from 'react';
// import { useParams } from 'react-router-dom';
// import { useLanguage } from '../../Contexst/languageContext';
// import Spinner from 'react-bootstrap/Spinner'; 
// import useFetch from '../../hooks/useFetch';
// import './style.css';




// const currencies = [
//   { code: 'USD', value: 1 },
//   { code: 'EUR', value: 0.85 },
//   { code: 'EGP', value: 16.33 },
//   { code: 'GBP', value: 0.74 },
  
// ];

// function MovieDetails() {
//   const { language } = useLanguage(); 
//   const { id } = useParams();
//   const { data: movie, isLoading, isError } = useFetch(`/${id}`);
//   const [selectedCurrency, setSelectedCurrency] = useState('USD');

//   // Calculate movie price based on selected currency and add fees
//   const calculatePrice = (moviePrice) => {
//     const currencyValue = currencies.find(curr => curr.code === selectedCurrency).value;
//     const priceInSelectedCurrency = moviePrice * currencyValue;
//     const priceWithFees = priceInSelectedCurrency * 1.14; 
//     return priceWithFees.toFixed(2); 
//   };

//   // add currency symbol to price
//   const formatPrice = (price) => {
//     const currencySymbol = currencies.find(curr => curr.code === selectedCurrency).code;
//     return `${currencySymbol} ${price}`;
//   };

  
//   const memoizedPrice = useMemo(() => calculatePrice(10), [selectedCurrency]);

//   if (isLoading) {
//     return (
//       <div className="loading-container">
//         Loading...
//         <Spinner animation="border" role="status"  className="loading-spinner">
//           <span className="visually-hidden">Loading...</span>
//         </Spinner>
//       </div>
//     ); 
//   }

//   if (isError) {
//     return <div>Error occurred while fetching data.</div>;
//   }

//   return (
//     <div className="movie-details-container">
//       <div className="movie-details">
//         <div className="movie-poster">
//           <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
//         </div>
//         <div className="movie-info">
//           <h2 className="movie-title">{language === 'ar' ? movie.title_ar : movie.title}</h2>
//           <p className="movie-overview">{language === 'ar' ? movie.overview_ar : movie.overview}</p>
//           <p className="movie-info-item"><strong>{language === 'ar' ? 'تاريخ الإصدار:' : 'Release Date:'}</strong> {movie.release_date}</p>
//           <p className="movie-info-item"><strong>{language === 'ar' ? 'المدة الزمنية:' : 'Runtime:'}</strong> {movie.runtime} {language === 'ar' ? 'دقائق' : 'minutes'}</p>
//           <p className="movie-info-item"><strong>{language === 'ar' ? 'الأنواع:' : 'Genres:'}</strong> {movie.genres && movie.genres.map(genre => genre.name).join(', ')}</p>
//           <p className="movie-info-item"><strong>{language === 'ar' ? 'متوسط التصويت:' : 'Vote Average:'}</strong> {movie.vote_average}</p>
//           <p className="movie-info-item"><strong>{language === 'ar' ? 'السعر:' : 'Price:'}</strong> {formatPrice(memoizedPrice)}</p>
          
        
//           <select value={selectedCurrency} onChange={(e) => setSelectedCurrency(e.target.value)}>
//             {currencies.map(currency => (
//               <option key={currency.code} value={currency.code}>{currency.code}</option>
//             ))}
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MovieDetails;

import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../../Contexst/languageContext';
import Spinner from 'react-bootstrap/Spinner';
import useFetch from '../../hooks/useFetch';
import './style.css';

const currencies = [
  { code: 'USD', value: 1 },
  { code: 'EUR', value: 0.85 },
  { code: 'EGP', value: 16.33 },
  { code: 'GBP', value: 0.74 },
];

function MovieDetails() {
  const { language } = useLanguage();
  const { id } = useParams();
  const { data: movie, isLoading, isError } = useFetch(`/${id}`);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const calculatePrice = (moviePrice) => {
    const currencyValue = currencies.find(curr => curr.code === selectedCurrency).value;
    const priceInSelectedCurrency = moviePrice * currencyValue;
    const priceWithFees = priceInSelectedCurrency * 1.14;
    return priceWithFees.toFixed(2);
  };

  const formatPrice = (price) => {
    const currencySymbol = currencies.find(curr => curr.code === selectedCurrency).code;
    return `${currencySymbol} ${price}`;
  };

  const memoizedPrice = useMemo(() => calculatePrice(10), [selectedCurrency]);

  if (isLoading) {
    return (
      <div className="loading-container">
        Loading...
        <Spinner animation="border" role="status" className="loading-spinner">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <div className="movie-details-container">
      <div className="movie-details">
        <div className="movie-poster">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className="movie-info">
          <h2 className="movie-title">{language === 'ar' ? movie.title_ar : movie.title}</h2>
          <div className="movie-info-content">
            <p className="movie-overview">{language === 'ar' ? movie.overview_ar : movie.overview}</p>
            <p className="movie-info-item"><strong>{language === 'ar' ? 'تاريخ الإصدار:' : 'Release Date:'}</strong> {movie.release_date}</p>
            <p className="movie-info-item"><strong>{language === 'ar' ? 'المدة الزمنية:' : 'Runtime:'}</strong> {movie.runtime} {language === 'ar' ? 'دقائق' : 'minutes'}</p>
            <p className="movie-info-item"><strong>{language === 'ar' ? 'الأنواع:' : 'Genres:'}</strong> {movie.genres && movie.genres.map(genre => genre.name).join(', ')}</p>
            <p className="movie-info-item"><strong>{language === 'ar' ? 'متوسط التصويت:' : 'Vote Average:'}</strong> {movie.vote_average}</p>
            <p className="movie-info-item"><strong>{language === 'ar' ? 'السعر:' : 'Price:'}</strong> {formatPrice(memoizedPrice)}</p>
            <select value={selectedCurrency} onChange={(e) => setSelectedCurrency(e.target.value)}>
              {currencies.map(currency => (
                <option key={currency.code} value={currency.code}>{currency.code}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;


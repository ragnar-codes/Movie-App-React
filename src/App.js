import './App.css';
import {useEffect, useState} from 'react';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';
function App() {
  const API_URL = ' http://www.omdbapi.com/?apikey=7750e24f'
  
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  
  const searchMovies =  async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search);
      console.log(movies)
  }
  useEffect(() => {
      searchMovies()
  }, [])
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value)}}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {searchMovies(searchTerm)}}
        />
      </div>
      {movies?.length > 0 ? (
        <div className='container'>
          {movies.map((movie) => (
          <MovieCard movie={movie} />
          ))}
        </div>
      ) :(
        <div className='empty'>
          <h2>No movie found!</h2>
        </div>
        )
      }
      
      
      
    </div>
  );
}

export default App;

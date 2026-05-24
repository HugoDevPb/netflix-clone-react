import './App.css'
import MovieCard from './components/MovieCard'

const movies = [
  {
    title: 'Breaking Bad',
    image: 'https://image.tmdb.org/t/p/w500/eSzpy96DwBujGFj0xMbXBcGcfxX.jpg'
  },
  {
    title: 'Stranger Things',
    image: 'https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg'
  }
]

function App() {
  return (
    <div>
      <header>
        <h1>DevMovies</h1>
      </header>

      <div className="movies">
        {movies.map(movie => (
          <MovieCard
            key={movie.title}
            title={movie.title}
            image={movie.image}
          />
        ))}
      </div>
    </div>
  )
}

export default App

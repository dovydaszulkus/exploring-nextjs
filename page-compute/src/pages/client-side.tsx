import type { NextPage } from "next"
import { useEffect, useState } from "react"

interface Movie {
  genres: string[]
  id: number
  original_language: string
  overview: string
  poster_path: string
  release_date: string
  tagline: string
  title: string
}

const ClientSide: NextPage = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      const res = await fetch('/api/movies')
      const data = await res.json()
      console.log('data', data)
      setMovies(data)
    }

    getMovies()
  }, [])

  if (movies.length < 1) return <p>Loading...</p>

  return (
    <ul>
      {movies.map((movie: Movie) => (
        <li key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </li>
      ))}
    </ul>
  )
}

export default ClientSide
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

const StaticSite: NextPage<{ movies: Movie[] }> = ({ movies }) => {

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

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/movies')
  const data = await res.json()

  return {
    props: {
      movies: data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}

export default StaticSite
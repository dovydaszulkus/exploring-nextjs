// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as movies from '../../data/movies.json'

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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Movie[]>
) {
  const moviesData: Movie[] = Object.values(movies).map((movie) => {
    const { genres, id, original_language, overview, poster_path, release_date, tagline, title } = movie
  
    return {
      genres,
      id,
      original_language,
      overview,
      poster_path,
      release_date,
      tagline,
      title
    }
  })
  
  res.status(200).json(moviesData.slice(0, 10))
}

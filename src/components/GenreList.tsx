import useGenres from '@/Hooks/useGenres'
import { li } from 'framer-motion/client';
import React from 'react'

const GenreList = () => {
  const {genres , error , loading} = useGenres();
  return (
    <ul>
      {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default GenreList
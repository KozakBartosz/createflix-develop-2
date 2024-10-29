import { useEffect } from 'react'
import { useMovieListStore } from './movieListStore'

export const useMovieList = () => {
    const store = useMovieListStore()

    useEffect(() => {
        if (!store.movieList.length) store.fetchMovie()
    }, [store])

    return store
}

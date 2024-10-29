import { useMemo } from 'react'
import { useFavoriteStore } from './favoriteStore'
import { useMovieList } from './useMovieList'

export const useFavoriteList = () => {
    const { movieList, ...rest } = useMovieList()
    const { favoriteList } = useFavoriteStore()

    const favorites = useMemo(() => {
        return movieList.filter((movie) => favoriteList.includes(movie.id))
    }, [movieList, favoriteList])

    return { favorites, ...rest }
}

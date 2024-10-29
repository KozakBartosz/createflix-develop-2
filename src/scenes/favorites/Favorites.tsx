import { useEffect } from 'react'
import MovieListItem from '../../elements/components/movie-list-item/MovieListItem'
import { Title } from '../../elements/components/title/Title'
import { useMovieListState } from '../../store/movieListState'
import { Loading } from '../../elements/components/loading/Loading'
import { useFavoriteStore } from '../../store/favoriteState'

export default function MovieList() {
    const { fetchMove, loading, error, moveList } = useMovieListState()
    const { favoriteList } = useFavoriteStore()

    useEffect(() => {
        if (!moveList) fetchMove()
    }, [])

    return (
        <div className="container mx-auto p-4">
            <Title>Favorites</Title>
            <div className="mb-12 mt-6 flex flex-col gap-12">
                {(loading && <Loading />) ||
                    (error && <div className="bg-red-500">Error: {error}</div>) ||
                    (favoriteList.length === 0 && <div>No favorites</div>) ||
                    (moveList &&
                        moveList
                            .filter((movie) => favoriteList.includes(movie.id))
                            .map((movie) => (
                                <MovieListItem
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.title}
                                    posterImage={movie.posterImage}
                                    description={movie.description}
                                />
                            )))}
            </div>
        </div>
    )
}

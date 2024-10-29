import { useEffect } from 'react'
import MovieListItem from '../../elements/components/movie-list-item/MovieListItem'
import { Title } from '../../elements/components/title/Title'
import { useMovieListState } from '../../store/movieListState'
import { Loading } from '../../elements/components/loading/Loading'

export default function MovieList() {
    const { fetchMove, loading, error, moveList } = useMovieListState()

    useEffect(() => {
        if (!moveList) fetchMove()
    }, [])

    return (
        <div className="container mx-auto p-4">
            <Title>Movie List</Title>
            <div className="mb-12 mt-6 flex flex-col gap-12">
                {(loading && <Loading />) ||
                    (error && <div>Error: {error}</div>) ||
                    (moveList &&
                        moveList.map((movie) => (
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

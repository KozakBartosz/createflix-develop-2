import { Movie } from '../../../store/movieListStore'
import { Loading } from '../loading/Loading'
import MovieListItem from './MovieListItem'

type MovieListProps = {
    movies: Movie[]
    loading: boolean
    error: string | null
    favoriteList: string[]
    onAddFavorite: (id: string) => void
    onRemoveFavorite: (id: string) => void
}

export default function MovieList({
    movies,
    loading,
    error,
    favoriteList,
    onAddFavorite,
    onRemoveFavorite,
}: MovieListProps) {
    return (
        <div className="mb-12 mt-6 flex flex-col gap-12">
            {loading && <Loading />}
            {error && <div className="text-red-500">Error: {error}</div>}
            {movies.map((movie) => (
                <MovieListItem
                    key={movie.id}
                    movie={movie}
                    onAddFavorite={() => onAddFavorite(movie.id)}
                    onRemoveFavorite={() => onRemoveFavorite(movie.id)}
                    isFavorite={favoriteList.includes(movie.id)}
                />
            ))}
        </div>
    )
}

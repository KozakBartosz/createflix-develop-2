import MovieList from '../../elements/components/movie-list/MovieList'
import { Title } from '../../elements/components/title/Title'
import { useFavoriteStore } from '../../store/favoriteStore'
import { useMovieList } from '../../store/useMovieList'

export const MovieListScene = () => {
    const { movieList, loading, error } = useMovieList()
    const { favoriteList, addFavorite, removeFavorite } = useFavoriteStore()

    return (
        <div className="container mx-auto p-4">
            <Title>Movie List</Title>
            <MovieList
                movies={movieList}
                loading={loading}
                error={error}
                onAddFavorite={addFavorite}
                onRemoveFavorite={removeFavorite}
                favoriteList={favoriteList}
            />
        </div>
    )
}

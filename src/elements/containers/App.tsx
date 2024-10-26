import './App.css';
import AppHeader from '../components/app-header/AppHeader';
import AppFooter from '../components/app-footer/AppFooter';
import Instructions from '../../scenes/instructions/Instructions';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieList from '../../scenes/movie-list/MovieList';
import Favorites from '../../scenes/favorites/Favorites';

function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col App bg-white dark:bg-[#0d1117] dark:text-white min-h-screen">
                <AppHeader />
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<Instructions />} />
                        <Route path="movie-list" element={<MovieList />} />
                        <Route path="favorites" element={<Favorites />} />
                    </Routes>
                </main>
                <AppFooter />
            </div>
        </BrowserRouter>
    );
}

export default App;

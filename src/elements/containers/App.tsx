import './App.css';
import AppHeader from '../components/app-header/AppHeader';
import AppFooter from '../components/app-footer/AppFooter';
import Instructions from '../../scenes/instructions/Instructions';

function App() {
    return (
        <div className="App bg-white dark:bg-[#0d1117] dark:text-white min-h-screen">
            <AppHeader />
            <main>
                <Instructions />
            </main>
            <AppFooter />
        </div>
    );
}

export default App;

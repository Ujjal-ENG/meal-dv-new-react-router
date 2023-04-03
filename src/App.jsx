import { Link, Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';

function App() {
    return (
        <div className="app">
            <Navbar />
            <h1 className="text-4xl font-bold text-center py-3">WelCome to Meal DB</h1>
            <Outlet />
        </div>
    );
}

export default App;

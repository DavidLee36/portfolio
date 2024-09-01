import { HexGrid } from './pages/grid.tsx';
import { Home } from './pages/home.tsx';
import { Footer } from './pages/footer.tsx';
import { Technologies } from './assets/technologies.tsx';
import './index.css';

function App() {

    return (
            <HexGrid>
                <Home/>
                <Technologies/>
                <Footer/>
            </HexGrid>
    )
}

export default App

import { HexGrid } from './components/grid.tsx';
import { Header } from './components/header.tsx';
import { Footer } from './components/footer.tsx';
import { Technologies } from './assets/technologies.tsx';
import { Projects } from './components/projects.tsx';
import './styles/index.css';

function App() {

    return (
            <HexGrid>
                <Header/>
                <Technologies/>
                <Projects/>
                <Footer/>
            </HexGrid>
    )
}

export default App

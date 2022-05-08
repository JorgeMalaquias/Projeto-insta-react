import ReactDOM from 'react-dom';
import Navbar from './navbar';
import Corpo from './corpo';
import FundoMobile from './fundo-mobile';



function App() {
    return (
        <div>
            <Navbar />
            <Corpo />
            <FundoMobile />
        </div>

    );
}

ReactDOM.render(<App />, document.querySelector(".root"));
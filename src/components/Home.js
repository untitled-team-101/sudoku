import {Link} from "react-router-dom";
import './styles/Home.scss'

const Home = () => {
    return(
        <div className={'home'}>
            <div className={'homeContent'}>
                <div className={'homeTitle'}>Untitled Sudoku</div>
                <Link to={'/step1'}><div className={'homePlayBtn'}>Play</div></Link>
            </div>
            <div className={'homeFooter'}>Made with &#10084; by @untitledTeam</div>
        </div>

    )
}

export default Home;
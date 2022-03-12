import { ReactComponent as GithIcon } from 'assets/img/github.svg';
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/sanmcosta">
                        <div className="dsmovie-contact-container">
                            <GithIcon />
                            <p className="dsmovie-contact-link">/sanmcosta</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
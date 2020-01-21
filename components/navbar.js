import Link from 'next/link';


const navbar = () => (
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
        <div className="container">
            <a className="navbar-brand" href="#">BTC Kur Uygulaması</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href="/"><a className="nav-link">Ana Sayfa</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about"><a className="nav-link">Hakkında</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

);

export default navbar;
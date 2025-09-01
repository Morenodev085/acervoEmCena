import trama from '../../assets/tramaNiteroiEmCena.jpeg';
import logo from '../../assets/logoSite.png'

import {Logo} from './styled'
import { ContainerSite } from '../../styled';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <ContainerSite
            className="fixed top-4 left-0 right-0 z-50 flex justify-center h-20 bg-cover "
            style={{ backgroundImage: `url(${trama})`, borderRadius: 12 }}>
            <div className="px-6 py-2 rounded-md shadow-md">
                <span className="text-xl font-bold select-none">
                    <Link to={"/"}><Logo src={logo} alt="" /></Link>
                </span>
            </div>
        </ContainerSite>
    );
}

export default Header;

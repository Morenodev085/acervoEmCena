import trama from '../../assets/tramaNiteroiEmCena.jpeg';
import logo from '../../assets/logoSite.jpeg'

import {Logo} from './styled'
import { ContainerSite } from '../../styled';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <ContainerSite
            className="fixed top-0 left-0 right-0 z-50 flex justify-center h-22 bg-cover "
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

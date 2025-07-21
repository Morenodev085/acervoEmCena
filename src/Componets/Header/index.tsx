import trama from '../../assets/tramaNiteroiEmCena.jpeg';
import logo from '../../assets/bolacha 4.png'

import {Logo} from './styled'
import { Container } from '../../styled';

function Header() {
    return (
        <Container
            className="fixed top-4 left-0 right-0 z-50 flex justify-center h-20 bg-cover"
            style={{ backgroundImage: `url(${trama})`, borderRadius: 12 }}>
            <div className="px-6 py-2 rounded-md shadow-md">
                <span className="text-xl font-bold text-gray-800 select-none">
                    <Logo src={logo} alt="" />
                </span>
            </div>
        </Container>
    );
}

export default Header;

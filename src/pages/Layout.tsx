import { Outlet } from "react-router-dom";
import ScrollToTop from "../Componets/ScrolltoTop";

const Layout = () => {
    return (
        <>
            <ScrollToTop /> {/* Faz o scroll automático */}
            <Outlet />       {/* Renderiza a rota atual */}
        </>
    );
};

export default Layout;

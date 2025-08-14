import { Link } from "react-router-dom";
import { Button, colors, ContainerSite } from "../../styled";
import { ButtonArea } from "./styled";


const Buttons = () => {
    return (
        <ContainerSite>
            <ButtonArea>
                <Link to='/longa'><Button ButtonColor={colors.green} >Mostra Peças</Button></Link>
                <Link to='/rua'><Button ButtonColor={colors.pink} >MOSTRA RUA</Button></Link>
                <Link to='/curta'><Button ButtonColor={colors.purple}  >MOSTRA CENAS CURTAS</Button></Link>
                <Link to='/estudantil'><Button ButtonColor={colors.yellow}>MOSTRA ESTUDANTIL</Button></Link>
                <Link to='/formativa'><Button ButtonColor={colors.brown} >ATIVIDADE FORMATIVAS</Button></Link>
                <Link to='/negocio'><Button ButtonColor={colors.cream} >Rodada de Negócios</Button></Link>
                
                
                
                
                
            </ButtonArea>
        </ContainerSite>
    );
};

export default Buttons;

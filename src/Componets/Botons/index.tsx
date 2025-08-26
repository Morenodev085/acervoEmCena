import { Link } from "react-router-dom";
import { Button, colors, ContainerSite } from "../../styled";
import { ButtonArea } from "./styled";


const Buttons = () => {
    return (
        <ContainerSite>
            <ButtonArea>
                <Link to='/longa'><Button ButtonColor={colors.green} >MOSTRA PEÇAS</Button></Link>
                <Link to='/rua'><Button ButtonColor={colors.pink} >MOSTRA RUA</Button></Link>
                <Link to='/curta'><Button ButtonColor={colors.purple}  >MOSTRA CENAS CURTAS</Button></Link>
                </ButtonArea>
                <ButtonArea>
                <Link to='/estudantil'><Button ButtonColor={colors.yellow}>MOSTRA ESTUDANTIL</Button></Link>
                <Link to='/atividade'><Button ButtonColor={colors.brown} >ATIVIDADES FORMATIVAS</Button></Link>
                <Link to='/rodadaDeNegocios'><Button ButtonColor={colors.cream} >RODADA DE NEGÓCIOS</Button></Link>
                
                
                
            </ButtonArea>
        </ContainerSite>
    );
};

export default Buttons;

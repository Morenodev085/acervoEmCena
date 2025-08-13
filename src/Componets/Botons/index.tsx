import { Button, colors, ContainerSite } from "../../styled";
import { ButtonArea } from "./styled";

const Buttons = () => {
    return (
        <ContainerSite>
            <ButtonArea>
                <Button ButtonColor={colors.green} >Mostra Peças</Button>
                <Button ButtonColor={colors.pink} >MOSTRA RUA</Button>
                <Button ButtonColor={colors.purple}  >MOSTRA CENAS CURTAS</Button>
                <Button ButtonColor={colors.yellow}>MOSTRA ESTUDANTIL</Button>
                <Button ButtonColor={colors.brown} >ATIVIDADE FORMATIVAS</Button>
                <Button ButtonColor={colors.cream} >Rodada de Negócios</Button>
            </ButtonArea>
        </ContainerSite>
    );
};

export default Buttons;

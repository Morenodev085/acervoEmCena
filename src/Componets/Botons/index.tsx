import { Button, colors, ContainerSite } from "../../styled";
import { ButtonArea } from "./styled";

const Buttons = () => {
    return (
        <ContainerSite>
            <ButtonArea>
                <Button ButtonColor={colors.green} >Mostra Peças</Button>
                <Button ButtonColor={colors.pink} >Mostra Rua</Button>
                <Button ButtonColor={colors.brown}  >Mostra Cenas Curtas</Button>
            </ButtonArea>
            <ButtonArea>
                <Button ButtonColor={colors.yellow}>Mostra Estudantil</Button>
                <Button ButtonColor={colors.purple} >Atividades Formativas</Button>
                <Button ButtonColor={colors.cream} >Rodada de Negócios</Button>
            </ButtonArea>
        </ContainerSite>
    );
};

export default Buttons;

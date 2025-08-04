import { Button, colors, ContainerSite } from "../../styled";
import { ButtonArea } from "./styled";

const Buttons = () => {
    return (
        <ContainerSite>
            <ButtonArea>
                <Button ButtonColor={colors.green} >Mostra Peças</Button>
                <Button ButtonColor={colors.pink} >Mostra Rua</Button>
                <Button ButtonColor={colors.purple}  >Mostra Cenas Curtas</Button>

                <Button ButtonColor={colors.yellow}>Mostra Estudantil</Button>
                <Button ButtonColor={colors.brown} >Atividades Formativas</Button>
                <Button ButtonColor={colors.cream} >Rodada de Negócios</Button>
            </ButtonArea>
        </ContainerSite>
    );
};

export default Buttons;

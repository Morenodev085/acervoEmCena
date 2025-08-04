import type { PieceType } from "../../data/types";
import { CardCalendariBody, Descricao, SaibaMaisButton } from "./styled";

interface CardProps {
    title: string;
    description: string;
    type: PieceType
}

const CardCalendario = ({ title, description, type }: CardProps) => {
    return (
        <CardCalendariBody type={type}>
            <div>
                <h4>{title}</h4>
                <Descricao>{description}</Descricao>
                <Descricao>Niterói -RJ</Descricao>
            </div>
            <SaibaMaisButton type={type}>Saiba mais</SaibaMaisButton>
        </CardCalendariBody>
    );
};

export default CardCalendario;

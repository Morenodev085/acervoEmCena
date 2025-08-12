import type { PieceType } from "../../data/types";
import {
    CardCalendariBody,

    ContentWrapper,

    Descricao,
    Divider,
    SaibaMaisButton,
    TituloCard
} from "./styled";

interface CardProps {
    title: string;
    description: string;
    type: PieceType;
}

const tiposComBotao = ['longa', 'estudantil'];


const MAX_DESCRIPTION_LENGTH = 120;

const CardCalendario = ({ title, description, type }: CardProps) => {
    const truncateDescription = (text: string): string => {
        return text.length > MAX_DESCRIPTION_LENGTH
            ? text.slice(0, MAX_DESCRIPTION_LENGTH).trim() + "..."
            : text;
    };

    return (
        <CardCalendariBody type={type}>
            <ContentWrapper>
                <div>
                    <TituloCard>{title}</TituloCard>
                    <Descricao>{truncateDescription(description)}</Descricao>
                    <Descricao>Niterói - RJ</Descricao>
                </div>
                <div>
                    <Divider type={type} />
                    {tiposComBotao.includes(type) && (
                        <SaibaMaisButton type={type}>Saiba mais</SaibaMaisButton>
                    )}                </div>
            </ContentWrapper>
        </CardCalendariBody>
    );
};

export default CardCalendario;

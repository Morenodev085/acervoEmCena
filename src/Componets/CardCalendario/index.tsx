import { CardCalendariBody, Descricao, SaibaMaisButton } from "./styled";

interface CardProps {
    title: string;
    description: string;
    borderColor: string;
}

const CardCalendario = ({ title, description, borderColor }: CardProps) => {
    return (
        <CardCalendariBody borderColor={borderColor}>
            <div>
                <h4>{title}</h4>
                <Descricao>{description}</Descricao>
            </div>
            <SaibaMaisButton>Saiba mais</SaibaMaisButton>
        </CardCalendariBody>
    );
};

export default CardCalendario;

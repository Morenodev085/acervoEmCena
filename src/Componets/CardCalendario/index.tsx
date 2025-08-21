import { FaRegCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import {
    CardCalendariBody,
    TituloCard,
    SubtitleCard,
    LocationInfoBlockCard,
    InfoRowCard,
    FooterCard,
    DurationTextCard,
    TipoTexto,
    ContentWrapperCard,
} from "./styled";
import type { PieceType } from '../../data/types';

interface CardProps {
    title: string;
    companyName: string;
    city: string;
    uf: string;
    description: string;
    type: PieceType;
    local: string;
    date: number;
    time: string | number;
    duration: string;
    tipoTitulo?: string;
    classif: string
}

const CardCalendario = ({
    title,
    companyName,
    city,
    uf,
    type,
    local,
    date,
    time,
    tipoTitulo,
    classif,
}: CardProps) => {
    // Aqui formatamos o horário para adicionar 'h' somente se for número
    const horarioFormatado = `${time}${typeof time === 'number' ? 'h' : ''}`;

    return (
        <CardCalendariBody type={type}>
            <ContentWrapperCard>
                <div>
                    <TituloCard type={type}>{title}</TituloCard>
                    {companyName && <SubtitleCard type={type}>{companyName}</SubtitleCard>}
                    {city && uf && <SubtitleCard type={type}>{city} - {uf}</SubtitleCard>}
                </div>
                <LocationInfoBlockCard type={type}>
                    <InfoRowCard type={type}>
                        <FaRegCalendarAlt />
                        <span>{date} de setembro às {horarioFormatado}</span>
                    </InfoRowCard>
                    <InfoRowCard type={type}>
                        <FaMapMarkerAlt />
                        <span>{local}</span>
                    </InfoRowCard>
                </LocationInfoBlockCard>
            </ContentWrapperCard>
            <FooterCard>
                <DurationTextCard type={type}>
                    <TipoTexto type={type}>Classificação : {classif}</TipoTexto>
                </DurationTextCard>
                <TipoTexto type={type}>{tipoTitulo || type}</TipoTexto>
            </FooterCard>
        </CardCalendariBody>
    );
};

export default CardCalendario;

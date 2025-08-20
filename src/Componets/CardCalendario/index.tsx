import { FaRegCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import {
    CardCalendariBody,
    TituloCard,
    SubtitleCard,
    LocationInfoBlockCard,
    InfoRowCard,
    FooterCard,
    DurationTextCard,
    SaibaMaisButton,
    ContentWrapperCard, // <-- IMPORTAR AQUI
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
}: CardProps) => {
    return (
        <CardCalendariBody type={type}>
            <ContentWrapperCard> {/* <-- envolver aqui */}
                <div>
                    <TituloCard type={type}>{title}</TituloCard>
                    {companyName && <SubtitleCard type={type}>{companyName}</SubtitleCard>}
                    {city && uf && <SubtitleCard type={type}>{city} - {uf}</SubtitleCard>}
                </div>
                <LocationInfoBlockCard type={type}>
                    <InfoRowCard type={type}>
                        <FaRegCalendarAlt />
                        <span>{date} de setembro às {time}h</span>
                    </InfoRowCard>
                    <InfoRowCard type={type}>
                        <FaMapMarkerAlt />
                        <span>{local}</span>
                    </InfoRowCard>
                </LocationInfoBlockCard>
            </ContentWrapperCard> {/* <-- fechar aqui */}
            <FooterCard>
                <DurationTextCard type={type}>
                </DurationTextCard>
                <SaibaMaisButton type={type}>{tipoTitulo || type}</SaibaMaisButton>
            </FooterCard>
        </CardCalendariBody>
    );
};

export default CardCalendario;
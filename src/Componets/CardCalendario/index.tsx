// src/components/CardCalendario/CardCalendario.js
import { FaRegCalendarAlt, FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';
import type { PieceType } from "../../data/types";
import {
    CardCalendariBody,
    TituloCard,
    SubtitleCard,
    LocationInfoBlockCard,
    InfoRowCard,
    FooterCard,
    DurationTextCard,
    SaibaMaisButton,
} from "./styled";

interface CardProps {
    title: string;
    companyName: string; // Adicionando essa prop para o novo design
    city: string; // Adicionando essa prop
    uf: string; // Adicionando essa prop
    description: string; // Mantido, mesmo não sendo usado no novo layout
    type: PieceType;
    local: string;
    date: number;
    time: number;
    duration: string;
}

// Manterei a sua função de truncar, mesmo sem uso no novo design.
const MAX_DESCRIPTION_LENGTH = 120;
const truncateDescription = (text: string): string => {
    return text.length > MAX_DESCRIPTION_LENGTH
        ? text.slice(0, MAX_DESCRIPTION_LENGTH).trim() + "..."
        : text;
};

const CardCalendario = ({
    title,
    companyName,
    city,
    uf,
    type,
    local,
    date,
    time,
    duration,

}: CardProps) => {
    return (
        <CardCalendariBody type={type}>
            <div> {/* Onde ficava o ContentWrapper, mas simplificado */}
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

                <FooterCard>
                    <DurationTextCard type={type}>
                        <FaRegClock />
                        <span>{duration}</span>
                    </DurationTextCard>
                    <SaibaMaisButton type={type} >{type}</SaibaMaisButton>
                </FooterCard>
            </div>
        </CardCalendariBody>
    );
};

export default CardCalendario;
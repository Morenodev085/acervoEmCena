import { colors } from "../styled";

export type PieceType= 'Longa' | 'Curta' | 'Rua' | 'Estudantil'|'Rodada' | 'Atividade' | 'Encerramento';


export type Piece = {
    id: number,
    title: string,
    type: PieceType,
    image?: string
    image2?: string
    image3?: string
    image4?: string
    description: string
    data: number 
    time: string | number 
    local: string
    companyName?: string
    city?: string
    uf?: string
    duration?: string
    showInCarousel?: boolean
    showInList?: boolean
    e?: string
    classif?: string
}

export const colorMap: Record<PieceType, string> = {
  Longa: colors.green,
  Curta: colors.pink,
  Rua: colors.yellow,
  Estudantil: colors.purple,
  Rodada: colors.cream,
  Atividade: colors.cream,
  Encerramento: colors.cream
};
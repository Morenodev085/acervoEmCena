import { colors } from "../styled";

export type PieceType= 'longa' | 'curta' | 'rua' | 'estudantil'|'rodada'|'atividade';


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
}

export const colorMap: Record<PieceType, string> = {
  longa: colors.green,
  curta: colors.brown,
  rua: colors.pink,
  estudantil: colors.yellow,
  rodada: colors.cream,
  atividade: colors.pink
};
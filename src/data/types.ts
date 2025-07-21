export type PieceType= 'longa' | 'curta' | 'rua' | 'estudantil';


export type Piece = {
    id: number,
    title: string,
    type: PieceType,
    image: string
    description: string
}
export type PieceType= 'longa' | 'curta' | 'rua' | 'estudantil';


export type Piece = {
    id: number,
    title: string,
    type: PieceType,
    image: string
    image2?: string
    image3?: string
    image4?: string
    description: string
    data: number 
}
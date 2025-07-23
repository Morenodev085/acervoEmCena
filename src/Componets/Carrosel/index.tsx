import { useEffect, useState } from 'react'
import { pieces } from '../../data/peices'
import { CarouselContainer, FadeImage } from './styled'
import { Container } from '../../styled'

const FadeCarousel = () => {
    const filteredPieces = pieces.filter((piece) => piece.type === 'longa')

    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % filteredPieces.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [filteredPieces.length])

    return (
        <Container>
            <CarouselContainer>
                {filteredPieces.map((piece, index) => (
                    <FadeImage
                        key={piece.id}
                        src={piece.image}
                        alt={piece.title}
                        isActive={index === current}
                    />
                ))}
            </CarouselContainer>
        </Container>
    )
}

export default FadeCarousel

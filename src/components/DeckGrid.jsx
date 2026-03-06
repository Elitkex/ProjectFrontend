import DeckBackground from '../assets/deckbackground.png'
import Kuka from '../assets/kuka.png'
import CardSlot from './CardSlot'

export default function DeckGrid({ cards, onCardClick, onDelete }) {
    return (
        <div style={{
            backgroundImage: `url(${DeckBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '20px',
            padding: '40px',
            position: 'relative',
            border: '3px solid #1a5a9a'
        }}>
            <img src={Kuka} alt="kuka" onClick={onDelete} style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                width: '35px',
                height: '35px',
                cursor: 'pointer',
                transition: 'filter 0.15s ease'
            }}
                onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.3)'}
                onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}
            />
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 110px)',
                gap: '12px',
                marginTop: '10px'
            }}>
                {cards.map((card, i) => (
                    <CardSlot key={i} card={card} onClick={() => onCardClick(i)} />
                ))}
            </div>
        </div>
    )
}
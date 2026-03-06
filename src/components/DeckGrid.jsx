import DeckBackground from '../assets/deckbackground.png'
import Kuka from '../assets/kuka.png'
import CardSlot from './CardSlot'

export default function DeckGrid({ cards, onCardClick, onDelete }) {
    const teleKartyak = cards.filter(c => c !== null)
    const atlagElixir = teleKartyak.length > 0
        ? (teleKartyak.reduce((sum, c) => sum + c.elixir_cost, 0) / teleKartyak.length).toFixed(1)
        : 0

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

            {/* Átlag elixír */}
            <div style={{
                marginTop: '12px',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <div style={{
                    background: 'rgba(0,0,0,0.4)',
                    borderRadius: '20px',
                    padding: '5px 16px',
                    color: '#d070ff',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    border: '1px solid rgba(180,80,255,0.4)'
                }}>
                    Average Elixir cost: {atlagElixir} 💜
                </div>
            </div>
        </div>
    )
}
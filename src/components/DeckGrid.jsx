import DeckBackground from '../assets/deckbackground.png'
import Kuka from '../assets/kuka.png'
import CardSlot from './CardSlot'

export default function DeckGrid({ cards, onCardClick, onDelete }) {
    const teleKartyak = cards.filter(c => c !== null)

    const atlagElixir = teleKartyak.length > 0
        ? (teleKartyak.reduce((sum, c) => sum + c.elixir_cost, 0) / teleKartyak.length).toFixed(1)
        : 0

    const atlagDmg = teleKartyak.length > 0
        ? (teleKartyak.reduce((sum, c) => sum + c.dmg, 0) / teleKartyak.length).toFixed(0)
        : 0

    const atlagHitSpeed = teleKartyak.length > 0
        ? (teleKartyak.reduce((sum, c) => sum + c.hit_speed, 0) / teleKartyak.length).toFixed(1)
        : 0

    return (
        <div style={{
            backgroundImage: `url(${DeckBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '20px',
            padding: 'min(40px, 1.5vw)',
            position: 'relative',
            border: '3px solid #1a5a9a',
            gridTemplateColumns: 'repeat(4, min(110px, 22vw))',
            gap: 'min(12px, 2.5vw)',
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
                gridTemplateColumns: 'repeat(4, min(110px, 22vw))',
                gap: 'min(12px, 2vw)',
                marginTop: '45px'
            }}>
                {cards.map((card, i) => (
                    <CardSlot key={i} card={card} onClick={() => onCardClick(i)} />
                ))}
            </div>

            {/* Statisztikák */}
            <div style={{
                marginTop: '12px',
                display: 'flex',
                justifyContent: 'center',
                gap: 'min(12px, 2.5vw)',
            }}>
                <div style={{
                    background: 'rgba(0,0,0,0.4)',
                    borderRadius: '20px',
                    padding: 'min(5px, 1vw) min(16px, 3vw)',
                    color: '#d070ff',
                    fontWeight: 'bold',
                    fontSize: 'min(0.85rem, 3vw)',
                    border: '1px solid rgba(180,80,255,0.4)'
                }}>
                    ⚡ Avg Elixir: {atlagElixir}
                </div>
                <div style={{
                    background: 'rgba(0,0,0,0.4)',
                    borderRadius: '20px',
                    padding: 'min(5px, 1vw) min(16px, 3vw)',
                    color: '#ff7070',
                    fontWeight: 'bold',
                    fontSize: 'min(0.85rem, 3vw)',
                    border: '1px solid rgba(255,80,80,0.4)'
                }}>
                    ⚔️ Avg DMG: {atlagDmg}
                </div>
                <div style={{
                    background: 'rgba(0,0,0,0.4)',
                    borderRadius: '20px',
                    padding: 'min(5px, 1vw) min(16px, 3vw)',
                    color: '#70d0ff',
                    fontWeight: 'bold',
                    fontSize: 'min(0.85rem, 3vw)',
                    border: '1px solid rgba(80,180,255,0.4)'
                }}>
                    🕐 Avg Hit Speed: {atlagHitSpeed}s
                </div>
            </div>
        </div>
    )
}
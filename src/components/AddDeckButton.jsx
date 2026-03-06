import DeckBackground from '../assets/deckbackground.png'
import Plus from '../assets/plus.png'

export default function AddDeckButton({ onClick, disabled }) {
    return (
        <div onClick={disabled ? null : onClick} style={{
            backgroundImage: `url(${DeckBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '16px',
            border: '3px solid #1a5a9a',
            width: '180px',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.4 : 1,
            transition: 'filter 0.15s ease'
        }}
            onMouseEnter={e => { if (!disabled) e.currentTarget.style.filter = 'brightness(1.2)' }}
            onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}
        >
            <img src={Plus} alt="+" style={{ width: '45px', height: '45px' }} />
        </div>
    )
}
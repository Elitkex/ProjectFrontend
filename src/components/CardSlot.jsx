import Plus from '../assets/plus.png'

export default function CardSlot({ card, onClick }) {
    return (
        <div onClick={onClick} style={{
            width: '110px',
            height: '150px',
            background: 'rgba(255,255,255,0.75)',
            borderRadius: '12px',
            border: '3px dashed rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'filter 0.15s ease'
        }}
            onMouseEnter={e => e.currentTarget.style.filter = 'brightness(0.9)'}
            onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}
        >
            {card
                ? <img src={card.img} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
                : <img src={Plus} alt="+" style={{ width: '40px', height: '40px' }} />
            }
        </div>
    )
}
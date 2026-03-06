import Plus from '../assets/plus.png'

export default function CardSlot({ card, onClick }) {
    return (
        <div onClick={onClick} style={{
            width: '110px',
            height: '150px',
            background: card ? 'transparent' : 'rgba(255,255,255,0.75)',
            borderRadius: '12px',
            border: card ? 'none' : '3px dashed rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'filter 0.15s ease',
            position: 'relative'
        }}
            onMouseEnter={e => e.currentTarget.style.filter = 'brightness(0.9)'}
            onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}
        >
            {card ? (
                <>
                    <img src={card.img} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
                    <div style={{
                        position: 'absolute',
                        top: '4px',
                        left: '4px',
                        background: 'rgba(130, 50, 200, 0.85)',
                        borderRadius: '50%',
                        width: '22px',
                        height: '22px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '0.75rem',
                        border: '1px solid rgba(255,255,255,0.5)'
                    }}>
                        {card.elixir_cost}
                    </div>
                </>
            ) : (
                <img src={Plus} alt="+" style={{ width: '40px', height: '40px' }} />
            )}
        </div>
    )
}
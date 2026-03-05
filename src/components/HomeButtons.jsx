export default function HomeButtons({ content, onClick, color = 'tan' }) {
    const colors = {
        tan: {
            background: 'linear-gradient(to right, #FFE683, #B95914)',
            border: '3px solid #7a5020',
        },
        red: {
            background: 'linear-gradient(to right, #F87F7B, #FF0000)',
            border: '3px solid #800000',
        }
    }
    const s = colors[color]

    return (
        <button
            onClick={onClick}
            onMouseEnter={e => {
                e.target.style.filter = 'brightness(1.2)'
                e.target.style.transform = 'scale(1.05)'
            }}
            onMouseLeave={e => {
                e.target.style.filter = 'brightness(1)'
                e.target.style.transform = 'scale(1)'
            }}
            style={{
                ...s,
                border: '3.5px solid #000000',
                borderRadius: '30px',
                color: 'rgba(0, 0, 0, 0.5)',
                fontWeight: 'bold',
                fontSize: '2.1rem',
                padding: '14px 0',
                width: '320px',
                height: '90px',
                cursor: 'pointer',
                letterSpacing: '1px',
                textShadow: '0 2px 3px rgba(0,0,0,0.4)'
            }}
        >
            {content}
        </button>
    )
}
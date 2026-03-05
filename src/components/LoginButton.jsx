export default function LoginButton({ content, onClick }) {
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
                background: 'linear-gradient(to right, #868686, #383838)',
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
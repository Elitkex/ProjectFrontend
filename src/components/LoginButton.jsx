export default function LoginButton({ content, onClick }) {
    return (
        <button
            onClick={onClick}
            style={{
                background: 'linear-gradient(to right, #868686, #383838)',
                border: '3.5px solid #000000',
                borderRadius: '30px',
                color: 'rgba(0, 0, 0, 0.5)',
                fontWeight: 'bold',
                fontSize: '1.4rem',
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
export default function DescriptionBox({ szoveg }) {
    return (
        <div style={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(9px)',
            border: '2px solid rgba(255, 255, 255, 0.4)',
            borderRadius: '20px',
            padding: 'min(30px, 2.8vw)',
            width: '100%',
            height: 'min(400px, 100vw)'
        }}>
            <p style={{
                color: 'white',
                fontWeight: 'bold',
                fontStyle: 'italic',
                fontSize: 'min(1.75rem, 4.2vw)',
                lineHeight: '1.7',
                textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                margin: 0
            }}>
                {szoveg}
            </p>
        </div>
    )
}
// /src/components/DescriptionBox.jsx
export default function DescriptionBox({ szoveg }) {
    return (
        <div style={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(8px)',
            border: '2px solid rgba(255, 255, 255, 0.4)',
            borderRadius: '30px',
            padding: '30px',
            width: '1220px',
            height: '360px'
        }}>
            <p style={{
                color: 'white',
                fontWeight: 'bold',
                fontStyle: 'italic',
                fontSize: '1.85rem',
                lineHeight: '1.7',
                textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                margin:0
            }}>
                {szoveg}
            </p>
        </div>
    )
}
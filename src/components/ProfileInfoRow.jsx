export default function ProfileInfoRow({ icon, text }) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(0,0,0,0.25)',
            borderRadius: '16px',
            padding: '10px 20px',
            width: '100%'
        }}>
            <span style={{ fontSize: '1.2rem' }}>{icon}</span>
            <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem' }}>{text}</span>
        </div>
    )
}
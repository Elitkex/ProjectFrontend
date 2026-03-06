export default function ProfileAvatar() {
    return (
        <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(100,180,255,0.4), rgba(30,80,180,0.4))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
            border: '3px solid rgba(255,255,255,0.5)',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
        }}>
            👤
        </div>
    )
}
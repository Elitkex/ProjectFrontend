export default function ProfileIcon({ felhasznalonev, onClick }) {
    return (
        <div className='position-fixed bottom-0 end-0 m-3'
            onClick={onClick}
            onMouseEnter={e => {
                e.currentTarget.style.filter = 'brightness(1.2)'
                e.currentTarget.style.transform = 'scale(1.05)'
            }}
            onMouseLeave={e => {
                e.currentTarget.style.filter = 'brightness(1)'
                e.currentTarget.style.transform = 'scale(1)'
            }}
            style={{
                background: 'linear-gradient(135deg, rgba(30,100,180,0.7), rgba(10,50,120,0.7))',
                backdropFilter: 'blur(10px)',
                borderRadius: '30px',
                padding: '8px 18px',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1rem',
                cursor: 'pointer',
                textShadow: '0 2px 4px rgba(0,0,0,0.6)',
                border: '2px solid rgba(255,255,255,0.3)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease'
            }}>
            <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
                border: '2px solid rgba(255,255,255,0.4)'
            }}>
                👤
            </div>
            {felhasznalonev ?? '...'}
        </div>
    )
}
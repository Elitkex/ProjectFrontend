// /src/components/ConfirmPopup.jsx
export default function DeletePopup({ message, onConfirm, onCancel }) {
    if (!message) return null

    return (
        <>
            <div onClick={onCancel} style={{
                position: 'fixed',
                top: 0, left: 0,
                width: '100vw', height: '100vh',
                background: 'rgba(0,0,0,0.6)',
                zIndex: 100
            }} />

            <div style={{
                position: 'fixed',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(12px)',
                border: '2px solid rgba(255,255,255,0.4)',
                borderRadius: '20px',
                padding: '30px 40px',
                zIndex: 101,
                textAlign: 'center',
                minWidth: '280px'
            }}>
                <p style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                    marginBottom: '20px'
                }}>
                    {message}
                </p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                    <button onClick={onCancel} style={{
                        background: 'linear-gradient(to bottom, #9a9a9a, #555555)',
                        border: '3px solid #333333',
                        borderRadius: '50px',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        padding: '8px 30px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 0 #222222'
                    }}>
                        Mégse
                    </button>
                    <button onClick={onConfirm} style={{
                        background: 'linear-gradient(to bottom, #e84040, #b01010)',
                        border: '3px solid #800000',
                        borderRadius: '50px',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        padding: '8px 30px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 0 #600000'
                    }}>
                        Törlés
                    </button>
                </div>
            </div>
        </>
    )
}
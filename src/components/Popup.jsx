// /src/components/Popup.jsx
export default function Popup({ message, onClose }) {
    if (!message) return null

    return (
        <>
            {/* Sötét háttér */}
            <div onClick={onClose} style={{
                position: 'fixed',
                top: 0, left: 0,
                width: '100vw', height: '100vh',
                background: 'rgba(0,0,0,0.6)',
                zIndex: 100
            }} />

            {/* Popup doboz */}
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
                <button onClick={onClose} style={{
                    background: 'linear-gradient(to bottom, #4a90d9, #1a5fa8)',
                    border: '3px solid #0a3f78',
                    borderRadius: '50px',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    padding: '8px 30px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 0 #082d5a'
                }}>
                    OK
                </button>
            </div>
        </>
    )
}
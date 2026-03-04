export default function TextBox({ title, placeholder, type, value, setvalue }) {
    return (
        <div style={{
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(7px)',
            border: '2px solid rgba(255, 255, 255, 0.6)',
            borderRadius: '20px',
            padding: '20px 24px',
            width: '380px'
        }}>
            <label style={{
                color: 'rgba(0,0,0,0.7)',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                marginBottom: '0'
            }}>
                {title}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setvalue(e.target.value)}
                style={{
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.4)',
                    outline: 'none',
                    color: 'black',
                    width: '100%',
                    fontSize: '1rem'
                }}
            />
        </div>
    )
}
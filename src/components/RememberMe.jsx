// /src/components/RememberMe.jsx
export default function RememberMe({ value, onChange }) {
    const handleClick = () => {
        const newValue = !value
        onChange(newValue)
        localStorage.setItem('rememberMe', newValue)
    }

    return (
        <div onClick={handleClick} style={{
            background: value ? 'rgba(50, 200, 50, 0.5)' : 'rgba(200, 50, 50, 0.5)',
            border: 'none',
            borderRadius: '50px',
            padding: '8px 24px',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1rem',
            cursor: 'pointer',
            boxShadow: value ? '0 4px 0 rgba(30, 130, 30, 0.6)' : '0 4px 0 rgba(130, 30, 30, 0.6)',
            userSelect: 'none'
        }}>
            Remember me
        </div>
    )
}
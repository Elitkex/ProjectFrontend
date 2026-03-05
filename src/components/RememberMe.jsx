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
            padding: '3px 15px',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1rem',
            cursor: 'pointer',
            userSelect: 'none'
        }}>
            Remember me
        </div>
    )
}
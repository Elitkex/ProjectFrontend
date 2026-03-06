// /src/components/BackButton.jsx
export default function BackButton({ onClick, src }) {
    return (
        <div className='position-fixed top-0 start-0 m-3'>
            <img
                src={src}
                alt="back"
                onClick={onClick}
                onMouseEnter={e => {
                    e.target.style.filter = 'brightness(1.2)'
                    e.target.style.transform = 'scale(1.05)'
                }}
                onMouseLeave={e => {
                    e.target.style.filter = 'brightness(1)'
                    e.target.style.transform = 'scale(1)'
                }}
                style={{
                    width: '80px',
                    height: '80px',
                    cursor: 'pointer'
                }}
            />
        </div>
    )
}
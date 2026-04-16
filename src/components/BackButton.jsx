export default function BackButton({ onClick, src }) {
    return (
        <div className='position-fixed top-0 start-0 m-3 z-3'>
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
                    width: 'min(80px, 10vw)',
                    height: 'min(80px, 10vw)',
                    cursor: 'pointer'
                }}
            />
        </div>
    )
}
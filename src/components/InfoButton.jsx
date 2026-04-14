export default function InfoGomb({ src, onClick }) {
    return (
        <div>
            <img src={src} alt="info" onClick={onClick}
            onMouseEnter={e => {
                e.target.style.filter = 'brightness(1.2)'
                e.target.style.transform = 'scale(1.05)'
            }}
            onMouseLeave={e => {
                e.target.style.filter = 'brightness(1)'
                e.target.style.transform = 'scale(1)'
            }}
            style={{
                width: 'min(67.5px, 10vw)',
                height: 'min(67.5px, 10vw)',
                cursor: 'pointer'
            }}/>
        </div>
    )
}
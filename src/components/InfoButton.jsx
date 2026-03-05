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
                
                width: '67.5px',
                height: '67.5px',
                cursor: 'pointer'
            }}/>
        </div>
    )
}
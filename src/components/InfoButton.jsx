export default function InfoGomb({ src, onClick }) {
    return (
        <div>
            <img src={src} alt="info" onClick={onClick}
            style={{
                width: '67.5px',
                height: '67.5px',
                cursor: 'pointer'
            }}/>
        </div>
    )
}
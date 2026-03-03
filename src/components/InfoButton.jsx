export default function InfoGomb({ src, onClick }) {
    return (
        <div>
            <img src={src} alt="info" onClick={onClick}
            style={{
                width: '45px',
                height: '45px',
                cursor: 'pointer'
            }}/>
        </div>
    )
}
// /src/components/BackButton.jsx
export default function BackButton({ onClick, src }) {
    return (
        <div className='position-fixed top-0 start-0 m-3'>
            <img
                src={src}
                alt="back"
                onClick={onClick}
                style={{
                    width: '80px',
                    height: '80px',
                    cursor: 'pointer'
                }}
            />
        </div>
    )
}
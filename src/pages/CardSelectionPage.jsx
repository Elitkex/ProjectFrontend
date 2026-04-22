import 'bootstrap/dist/css/bootstrap.min.css'
import Background from '/src/assets/background.png'
import LogoKep from '/src/components/LogoKep.jsx'
import Logo from '/src/assets/logo.png'
import BackButton from '../components/BackButton'
import Back from '../assets/back.png'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { getKartyak, getDecks } from '../api'
import Popup from '../components/Popup'

export default function CardSelectionPage() {
    const navigate = useNavigate()
    const [kartyak, setKartyak] = useState([])
    const [loading, setLoading] = useState(true)
    const [popup, setPopup] = useState("")
    const [meglevoKartyaIds, setMeglevoKartyaIds] = useState([])

    const [searchParams] = useSearchParams()
    const slot = searchParams.get('slot')
    const pakliIndex = searchParams.get('pakli')

    useEffect(() => {
        Promise.all([
            getKartyak(),
            getDecks()
        ]).then(([kartyakRes, decksRes]) => {
            if (kartyakRes.result) setKartyak(kartyakRes.data)
            if (decksRes.result) {
                const ids = decksRes.data
                    .flatMap(deck => deck.kartyak)
                    .map(k => k?.id)
                    .filter(Boolean)
                setMeglevoKartyaIds(ids)
            }
            setLoading(false)
        })
    }, [])

    const handleCardClick = (kartya) => {
        if (meglevoKartyaIds.includes(kartya.id)) {
            return setPopup("Ez a kártya már benne van a pakliban!")
        }
        navigate('/deck', { state: { kartya, slot, pakliIndex } })
    }

    return (
        <div className='d-flex flex-column align-items-center vh-100'>
            <Popup message={popup} onClose={() => setPopup("")} />

            <div className="position-fixed top-0 start-0 w-100 h-100"
                style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', zIndex: -1 }} />

            <BackButton src={Back} onClick={() => navigate(-1)} />

            <div className='d-flex justify-content-center mt-4'>
                <LogoKep src={Logo} alt={"logo"} width={'300px'} onClick={() => navigate('/home')} />
            </div>

            {loading ? (
                <div className='d-flex align-items-center justify-content-center flex-grow-1'>
                    <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>Betöltés...</div>
                </div>
            ) : (
                <div style={{
                    overflowY: 'auto',
                    padding: '20px',
                    width: '100%',
                    maxWidth: 'min(700px, 95vw)',
                    flexGrow: 1
                }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(7, 1fr)',
                        gap: '8px',
                    }}>
                        {kartyak.map(kartya => {
                            const marBenne = meglevoKartyaIds.includes(kartya.id)
                            return (
                                <div key={kartya.id}
                                    onClick={() => handleCardClick(kartya)}
                                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
                                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                    style={{
                                        cursor: marBenne ? 'not-allowed' : 'pointer',
                                        transition: 'transform 0.15s ease',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        position: 'relative',
                                        opacity: marBenne ? 0.4 : 1
                                    }}>
                                    <img
                                        src={kartya.img}
                                        alt={kartya.name}
                                        style={{ width: '100%', borderRadius: '8px', display: 'block' }}
                                        onError={e => e.target.style.display = 'none'}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        top: '4px',
                                        left: '4px',
                                        background: 'rgba(130, 50, 200, 0.85)',
                                        borderRadius: '50%',
                                        width: '22px',
                                        height: '22px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        fontSize: '0.75rem',
                                        border: '1px solid rgba(255,255,255,0.5)'
                                    }}>
                                        {kartya.elixir_cost}
                                    </div>
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        color: 'white',
                                        fontWeight: 'bold',
                                        fontSize: '0.6rem',
                                        textAlign: 'center',
                                        padding: '8px 2px 3px',
                                        textShadow: '0 1px 3px rgba(0,0,0,0.9)',
                                        letterSpacing: '0.3px'
                                    }}>
                                        {kartya.name}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}
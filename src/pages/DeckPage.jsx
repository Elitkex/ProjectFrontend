import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate, useLocation } from 'react-router-dom'
import Background from '/src/assets/background.png'
import BackButton from '../components/BackButton'
import Back from '../assets/back.png'
import DeckGrid from '../components/DeckGrid'
import AddDeckButton from '../components/AddDeckButton'
import { useEffect, useState, useRef } from 'react'
import ProfileIcon from '../components/ProfileIcon'
import { adataim } from '../api'

export default function DeckPage() {
    const navigate = useNavigate()
    const location = useLocation()
    const [felhasznalo, setFelhasznalo] = useState(null)
    const [paklik, setPaklik] = useState([Array(8).fill(null)])
    const [betoltve, setBetoltve] = useState(false)
    const pendingCard = useRef(location.state?.kartya !== undefined ? location.state : null)

    useEffect(() => {
        adataim().then(res => {
            if (res.result) setFelhasznalo(res.data)
        })
    }, [])

    useEffect(() => {
        if (!felhasznalo) return
        const saved = localStorage.getItem(`paklik_${felhasznalo.id}`)
        let betoltottPaklik = saved ? JSON.parse(saved) : [Array(8).fill(null)]

        // Ha van pending kártya, alkalmazzuk rögtön betöltés után
        if (pendingCard.current) {
            const { kartya, slot, pakliIndex } = pendingCard.current
            betoltottPaklik = betoltottPaklik.map((p, i) =>
                i === Number(pakliIndex) ? p.map((c, j) => j === Number(slot) ? kartya : c) : p
            )
            pendingCard.current = null
            window.history.replaceState({}, '')
        }

        setPaklik(betoltottPaklik)
        setBetoltve(true)
    }, [felhasznalo])

    useEffect(() => {
        if (!felhasznalo || !betoltve) return
        localStorage.setItem(`paklik_${felhasznalo.id}`, JSON.stringify(paklik))
    }, [paklik, felhasznalo, betoltve])

    const ujPakli = () => {
        if (paklik.length >= 2) return
        setPaklik([...paklik, Array(8).fill(null)])
    }

    const kukaTorol = (index) => {
        if (paklik.length === 1) {
            setPaklik([Array(8).fill(null)])
        } else {
            setPaklik(paklik.filter((_, i) => i !== index))
        }
    }

    return (
        <div className='d-flex flex-column align-items-center vh-100'>
            <div className="position-fixed top-0 start-0 w-100 h-100"
                style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', zIndex: -1 }} />

            <BackButton src={Back} onClick={() => navigate("/home")} />

            <div className='d-flex flex-column align-items-center justify-content-center flex-grow-1 gap-4'>
                {paklik.map((cards, i) => (
                    <DeckGrid
                        key={i}
                        cards={cards}
                        onCardClick={(slot) => {
                            if (paklik[i][slot] !== null) {
                                // törli a kártyát
                                const ujPaklik = paklik.map((p, pi) =>
                                    pi === i ? p.map((c, j) => j === slot ? null : c) : p
                                )
                                setPaklik(ujPaklik)
                            } else {
                                navigate(`/cardselection?slot=${slot}&pakli=${i}&uid=${felhasznalo?.id}`)
                            }
                        }}
                        onDelete={() => kukaTorol(i)}
                    />
                ))}
                <AddDeckButton onClick={ujPakli} disabled={paklik.length >= 2} />
                <ProfileIcon felhasznalonev={felhasznalo?.felhasznalonev} onClick={() => navigate('/profile')} />
            </div>
        </div>
    )
}
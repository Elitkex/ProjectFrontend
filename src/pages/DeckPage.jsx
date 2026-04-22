import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate, useLocation } from 'react-router-dom'
import Background from '/src/assets/background.png'
import BackButton from '../components/BackButton'
import Back from '../assets/back.png'
import DeckGrid from '../components/DeckGrid'
import AddDeckButton from '../components/AddDeckButton'
import { useEffect, useState, useRef } from 'react'
import ProfileIcon from '../components/ProfileIcon'
import { adataim, getDecks, createDeckPartial, updateDeckPartial, deleteDeck} from '../api'

export default function DeckPage() {
    const navigate = useNavigate()
    const location = useLocation()
    const [felhasznalo, setFelhasznalo] = useState(null)
    const [paklik, setPaklik] = useState([])
    const [betoltve, setBetoltve] = useState(false)
    const pendingCard = useRef(location.state?.kartya !== undefined ? location.state : null)

    useEffect(() => {
        adataim().then(res => {
            if (res.result) setFelhasznalo(res.data)
        })
    }, [])

    useEffect(() => {
        if (!felhasznalo) return
        getDecks().then(res => {
            if (res.result && res.data.length > 0) {
                const betoltottPaklik = res.data.map(deck => ({
                    id: deck.id,
                    cards: Array(8).fill(null).map((_, i) => 
                        deck.kartyak.find(k => k.slot_index === i) ?? null
                    )
                }))
                setPaklik(betoltottPaklik)
            } else {
                setPaklik([{ id: null, cards: Array(8).fill(null) }])
            }
            setBetoltve(true)
        })
    }, [felhasznalo])

    useEffect(() => {
        if (!betoltve || !pendingCard.current || paklik.length === 0) return
        const { kartya, slot, pakliIndex } = pendingCard.current
        
        // ellenőrzés hogy létezik-e a pakli
        if (!paklik[Number(pakliIndex)]) return
        
        pendingCard.current = null
        window.history.replaceState({}, '')
    
        const ujPaklik = [...paklik]
        ujPaklik[Number(pakliIndex)] = {
            ...ujPaklik[Number(pakliIndex)],
            cards: ujPaklik[Number(pakliIndex)].cards.map((c, j) => 
                j === Number(slot) ? kartya : c
            )
        }
    
        const pakli = ujPaklik[Number(pakliIndex)]
        const ids = pakli.cards.map(c => c?.id ?? null)
    
        if (pakli.id) {
            updateDeckPartial(pakli.id, ids).then(() => setPaklik([...ujPaklik]))
        } else {
            createDeckPartial(ids).then(r => {
                if (r.result) ujPaklik[Number(pakliIndex)].id = r.pakli_id
                setPaklik([...ujPaklik])
            })
        }
    }, [betoltve, paklik.length])

    const ujPakli = async () => {
        const res = await createDeckPartial([])
        if (res.result) {
            setPaklik(prev => [...prev, { id: res.pakli_id, cards: Array(8).fill(null) }])
        }
    }

    const kukaTorol = async (index) => {
        const pakli = paklik[index]
        if (pakli.id) await deleteDeck(pakli.id)
    
        if (paklik.length === 1) {
            setPaklik([{ id: null, cards: Array(8).fill(null) }])
        } else {
            setPaklik(paklik.filter((_, i) => i !== index))
        }
    }

    const kartayaTorles = async (pakliIndex, slot) => {
        const ujPaklik = paklik.map((p, i) =>
            i === pakliIndex ? { ...p, cards: p.cards.map((c, j) => j === slot ? null : c) } : p
        )
        const pakli = ujPaklik[pakliIndex]
        const ids = pakli.cards.map(c => c?.id ?? null)
        if (pakli.id) await updateDeckPartial(pakli.id, ids)
        setPaklik([...ujPaklik])
    }

    return (
        <div className='d-flex flex-column align-items-center min-vh-100' style={{ overflowY: 'auto' }}>
            <div className="position-fixed top-0 start-0 w-100 h-100"
                style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: -1 }} />

            <BackButton src={Back} onClick={() => navigate("/home")} />

            <div className='d-flex flex-column align-items-center justify-content-center flex-grow-1 gap-3'
                style={{ padding: 'min(20px, 4vw)', width: '100%' }}>
                {paklik.map((pakli, i) => (
                    <DeckGrid
                        key={pakli.id ?? i}
                        cards={pakli.cards}
                        onCardClick={(slot) => {
                            if (pakli.cards[slot] !== null) {
                                kartayaTorles(i, slot)
                            } else {
                                navigate(`/cardselection?slot=${slot}&pakli=${i}&uid=${felhasznalo?.id}`)
                            }
                        }}
                        onDelete={() => kukaTorol(i)}
                    />
                ))}
                <AddDeckButton onClick={ujPakli}  />
                <ProfileIcon felhasznalonev={felhasznalo?.felhasznalonev} onClick={() => navigate('/profile')} />
            </div>
        </div>
    )
}
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate, useLocation } from 'react-router-dom'
import Background from '/src/assets/background.png'
import BackButton from '../components/BackButton'
import Back from '../assets/back.png'
import DeckGrid from '../components/DeckGrid'
import AddDeckButton from '../components/AddDeckButton'
import { useEffect, useState, useRef } from 'react'
import ProfileIcon from '../components/ProfileIcon'
import { adataim, getDecks, createDeck, updateDeck, deleteDeck } from '../api'

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
            if (res.result) {
                // Konvertálás: DB formátum -> frontend formátum
                const betoltottPaklik = res.data.map(deck => ({
                    id: deck.id,
                    cards: Array(8).fill(null).map((_, i) => deck.kartyak[i] ?? null)
                }))

                if (betoltottPaklik.length === 0) {
                    setPaklik([{ id: null, cards: Array(8).fill(null) }])
                } else {
                    // Ha van pending kártya, alkalmazzuk
                    if (pendingCard.current) {
                        const { kartya, slot, pakliIndex } = pendingCard.current
                        betoltottPaklik[Number(pakliIndex)].cards[Number(slot)] = kartya
                        pendingCard.current = null
                        window.history.replaceState({}, '')

                        // Mentés DB-be
                        const pakli = betoltottPaklik[Number(pakliIndex)]
                        const ids = pakli.cards.filter(c => c !== null).map(c => c.id)
                        if (ids.length === 8) {
                            if (pakli.id) updateDeck(pakli.id, ids)
                            else createDeck(ids).then(r => {
                                if (r.result) betoltottPaklik[Number(pakliIndex)].id = r.pakli_id
                            })
                        }
                    }
                    setPaklik(betoltottPaklik)
                }
            }
            setBetoltve(true)
        })
    }, [felhasznalo])

    const mentesDB = async (ujPaklik) => {
        for (let i = 0; i < ujPaklik.length; i++) {
            const pakli = ujPaklik[i]
            const ids = pakli.cards.filter(c => c !== null).map(c => c.id)
            if (ids.length === 8) {
                if (pakli.id) {
                    await updateDeck(pakli.id, ids)
                } else {
                    const res = await createDeck(ids)
                    if (res.result) ujPaklik[i].id = res.pakli_id
                }
            }
        }
        setPaklik([...ujPaklik])
    }

    const ujPakli = () => {
        if (paklik.length >= 2) return
        setPaklik([...paklik, { id: null, cards: Array(8).fill(null) }])
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

    const kardyaKivalaszt = async (pakliIndex, slot, kartya) => {
        const ujPaklik = paklik.map((p, i) =>
            i === pakliIndex ? { ...p, cards: p.cards.map((c, j) => j === slot ? kartya : c) } : p
        )
        const ids = ujPaklik[pakliIndex].cards.filter(c => c !== null).map(c => c.id)
        if (ids.length === 8) {
            if (ujPaklik[pakliIndex].id) {
                await updateDeck(ujPaklik[pakliIndex].id, ids)
            } else {
                const res = await createDeck(ids)
                if (res.result) ujPaklik[pakliIndex].id = res.pakli_id
            }
        }
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
                        key={i}
                        cards={pakli.cards}
                        onCardClick={(slot) => {
                            if (pakli.cards[slot] !== null) {
                                const ujPaklik = paklik.map((p, pi) =>
                                    pi === i ? { ...p, cards: p.cards.map((c, j) => j === slot ? null : c) } : p
                                )
                                setPaklik([...ujPaklik])
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
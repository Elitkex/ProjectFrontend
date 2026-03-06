import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
import Background from '/src/assets/background.png'
import BackButton from '../components/BackButton'
import Back from '../assets/back.png'
import DeckGrid from '../components/DeckGrid'
import AddDeckButton from '../components/AddDeckButton'
import { useEffect, useState } from 'react'
import ProfileIcon from '../components/ProfileIcon'
import { adataim } from '../api'

export default function DeckPage() {
    const navigate = useNavigate()
    const [paklik, setPaklik] = useState([Array(8).fill(null)])

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

    const [felhasznalo, setFelhasznalo] = useState(null)
    useEffect(() => {
        adataim().then(res => {
            if (res.result) setFelhasznalo(res.data)
        })
    }, [])

    return (
        <div className='d-flex flex-column align-items-center vh-100'>
            <div className="position-fixed top-0 start-0 w-100 h-100"
                style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', zIndex: -1 }} />
                

            <BackButton src={Back} onClick={() => navigate(-1)} />

            <div className='d-flex flex-column align-items-center justify-content-center flex-grow-1 gap-4'>
                {paklik.map((cards, i) => (
                    <DeckGrid
                        key={i}
                        cards={cards}
                        onCardClick={() => navigate('/cardselection')}
                        onDelete={() => kukaTorol(i)}
                    />
                ))}
                <AddDeckButton onClick={ujPakli} disabled={paklik.length >= 2} />
                <ProfileIcon felhasznalonev={felhasznalo?.felhasznalonev} onClick={() => navigate('/profile')} />
            </div>
        </div>
    )
}
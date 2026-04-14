import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
import Background from '/src/assets/background.png'
import LogoKep from '/src/components/LogoKep.jsx'
import Logo from '/src/assets/logo.png'
import DescriptionBox from '../components/DescriptionBox'
import BackButton from '../components/BackButton'
import Back from '../assets/back.png'
import { useEffect, useState } from 'react'
import ProfileIcon from '../components/ProfileIcon'
import { adataim } from '../api'

export default function DescriptionPage() {
    const navigate = useNavigate()

    const [felhasznalo, setFelhasznalo] = useState(null)
    useEffect(() => {
        adataim().then(res => {
            if (res.result) setFelhasznalo(res.data)
        })
    }, [])

    const szoveg = 
    `Ez egy Clash Royale-ihlette webalkalmazás, ahol regisztrált felhasználók egyedi paklikat építhetnek a játék kártyáiból.
    Bejelentkezés után böngészheted az összes elérhető kártyát, összerakhatod a saját 8 kártyás paklidat,
    és nyomon követheted a pakli statisztikáit mint az átlagos elixír költség, sebzés és támadási sebesség.
    Fiókodban bármikor módosíthatod adataidat, vagy törölheted a profilodat.`

    return (
        <div className='d-flex flex-column align-items-center vh-100'>
            <div className="position-fixed top-0 start-0 w-100 h-100"
                style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', zIndex: -1 }} />

            <BackButton src={Back} onClick={() => navigate(-1)} />

            <div className='d-flex justify-content-center mt-4'>
                <LogoKep src={Logo} alt={"logo"} width={'min(500px, 70vw)'} onClick={() => navigate('/home')} />
            </div>

            <div className='d-flex flex-column align-items-center justify-content-center flex-grow-1 mb-5'
                style={{ width: 'min(1100px, 90vw)', padding: '0 16px' }}>
                <DescriptionBox szoveg={szoveg} />
                <ProfileIcon felhasznalonev={felhasznalo?.felhasznalonev} onClick={() => navigate('/profile')} />
            </div>
        </div>
    )
}
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
import Background from '/src/assets/background.png'
import BackButton from '../components/BackButton'
import Back from '../assets/back.png'
import ProfileCard from '../components/ProfileCard'
import { useEffect, useState } from 'react'
import { adataim } from '../api'

export default function ProfilePage() {
    const navigate = useNavigate()
    const [felhasznalo, setFelhasznalo] = useState(null)

    useEffect(() => {
        adataim().then(res => {
            if (res.result) setFelhasznalo(res.data)
            else navigate('/login')
        })
    }, [])

    return (
        <div className='d-flex flex-column align-items-center vh-100'>
            <div className="position-fixed top-0 start-0 w-100 h-100"
                style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', zIndex: -1 }} />

            <BackButton src={Back} onClick={() => navigate(-1)} />

            <div className='d-flex flex-column align-items-center justify-content-center flex-grow-1'>
                <ProfileCard felhasznalo={felhasznalo} onEdit={() => navigate('/settings')} />
            </div>
        </div>
    )
}
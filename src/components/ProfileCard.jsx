import ProfileAvatar from './ProfileAvatar'
import ProfileInfoRow from './ProfileInfoRow'
import HomeButtons from '../components/HomeButtons'

export default function ProfileCard({ felhasznalo, onEdit }) {
    return (
        <div style={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(8px)',
            border: '2px solid rgba(255, 255, 255, 0.4)',
            borderRadius: '30px',
            padding: '40px 50px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            minWidth: '340px'
        }}>
            <ProfileAvatar />

            <div style={{
                fontSize: '1.8rem',
                fontWeight: 'bold',
                color: 'white',
                textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                letterSpacing: '1px'
            }}>
                {felhasznalo?.felhasznalonev ?? '...'}
            </div>

            <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.2)' }} />

            
            <ProfileInfoRow icon="✉️" text={felhasznalo?.email ?? '...'} />
            <ProfileInfoRow icon="🆔" text={`#${felhasznalo?.id ?? '...'}`} />

            <HomeButtons content="Edit Profile" onClick={onEdit} />
        </div>
    )
}
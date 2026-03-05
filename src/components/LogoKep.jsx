export default function LogoKep({ src, alt, width, onClick }) {
  return (
    <img 
      src={src} 
      alt={alt} 
      style={{ width: width ?? '300px', cursor: 'pointer' }}
      onClick={onClick}
    />
  )
}
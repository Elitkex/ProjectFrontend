export default function LogoKep({ src, alt, width }) {
  return (
    <div className="w-100 text-center">
      <img src={src} alt={alt} className={`w-${width ?? 100}`} />
    </div>
  )
}
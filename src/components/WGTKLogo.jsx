export default function WGTKLogo({ size = 'md', className = '' }) {
  const sizes = {
    sm: 'w-32',
    md: 'w-44',
    lg: 'w-56',
    xl: 'w-80',
  }
  return (
    <img
      src="/WGTK-Training/logo.png"
      alt="We've Got The Key — Auto Locksmiths"
      className={`${sizes[size]} h-auto object-contain ${className}`}
    />
  )
}

export default function WGTKLogo({ size = 'md', className = '' }) {
  const sizes = {
    sm: 'w-36',
    md: 'w-48',
    lg: 'w-64',
    xl: 'w-96',
  }
  return (
    <img
      src="/WGTK-Training/wgtklogo.png"
      alt="We've Got The Key — Auto Locksmiths"
      className={`${sizes[size]} h-auto object-contain ${className}`}
      style={{ mixBlendMode: 'screen' }}
    />
  )
}

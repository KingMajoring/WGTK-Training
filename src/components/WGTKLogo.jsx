export default function WGTKLogo({ size = 'md', className = '' }) {
  const sizes = {
    sm: 'h-10',
    md: 'h-14',
    lg: 'h-20',
    xl: 'h-28',
  }
  return (
    <img
      src="/WGTK-Training/wgtk-logo.svg"
      alt="We've Got The Key — Auto Locksmiths"
      className={`${sizes[size]} w-auto object-contain ${className}`}
    />
  )
}

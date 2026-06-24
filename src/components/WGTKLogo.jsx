export default function WGTKLogo({ size = 'md' }) {
  const sizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl',
  }
  return (
    <div className={`font-display font-black uppercase leading-none ${sizes[size]}`}>
      <span className="text-white">WE'VE G</span>
      <span className="text-brand">O</span>
      <span className="text-white">T</span>
      <br />
      <span className="text-white">THE </span>
      <span className="text-brand">KEY</span>
      <div className="text-[0.45em] tracking-widest text-gray-500 mt-0.5">AUTO LOCKSMITHS</div>
    </div>
  )
}

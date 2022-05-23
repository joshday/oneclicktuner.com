export default function A({href, className, children}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className={className || `text-indigo-400  hover:underline`}>
      {children}
    </a>
  )
}

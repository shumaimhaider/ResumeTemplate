/**
 * Parses `**bold**` markers inside a plain string and renders them as
 * <strong> elements. Lets resumeData.js stay plain text while still
 * supporting bold emphasis, matching the source resume's styling.
 */
export function RichText({ text }) {
  if (!text) return null
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean)

  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    return <span key={i}>{part}</span>
  })
}

export default RichText

import { useEffect, useMemo, useState } from 'react'

interface Position {
  x: number
  y: number
}

interface CursorMetadata {
  latency: string
  nodes: string
  uptime: string
}

function MetadataCursor() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)')
    if (!media.matches) return undefined

    const handleMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY })
      setVisible(true)
    }

    const handleLeave = () => setVisible(false)

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseleave', handleLeave)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  const metadata = useMemo<CursorMetadata>(() => {
    const latency = 18 + Math.round((position.x / Math.max(window.innerWidth || 1, 1)) * 48)
    const nodes = 6 + Math.round((position.y / Math.max(window.innerHeight || 1, 1)) * 8)
    const uptime = 99.90 + ((position.x + position.y) % 8) * 0.01

    return {
      latency: `${latency}ms`,
      nodes: `${nodes} active`,
      uptime: `${uptime.toFixed(2)}%`,
    }
  }, [position])

  if (!visible) return null

  return (
    <div
      className="metadata-cursor"
      style={{ transform: `translate(${position.x + 18}px, ${position.y + 18}px)` }}
    >
      <span>latency {metadata.latency}</span>
      <span>nodes {metadata.nodes}</span>
      <span>uptime {metadata.uptime}</span>
    </div>
  )
}

export default MetadataCursor

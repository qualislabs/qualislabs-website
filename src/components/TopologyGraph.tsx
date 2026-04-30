type NodeStatus = 'stable' | 'active' | 'secure'

interface GraphNode {
  id: string
  x: number
  y: number
  status: NodeStatus
}

type Edge = [string, string]

const nodes: GraphNode[] = [
  { id: 'edge-a', x: 12, y: 22, status: 'stable' },
  { id: 'edge-b', x: 28, y: 68, status: 'active' },
  { id: 'orchestrator', x: 44, y: 38, status: 'active' },
  { id: 'ledger', x: 64, y: 18, status: 'secure' },
  { id: 'policy', x: 72, y: 56, status: 'stable' },
  { id: 'telemetry', x: 88, y: 34, status: 'active' },
]

const edges: Edge[] = [
  ['edge-a', 'orchestrator'],
  ['edge-b', 'orchestrator'],
  ['orchestrator', 'ledger'],
  ['orchestrator', 'policy'],
  ['policy', 'telemetry'],
  ['ledger', 'telemetry'],
]

function getNode(id: string): GraphNode {
  const node = nodes.find((node) => node.id === id)
  if (!node) throw new Error(`Unknown node id: ${id}`)
  return node
}

function TopologyGraph() {
  return (
    <div className="topology-shell" aria-hidden="true">
      <svg viewBox="0 0 100 80" className="topology-graph" role="presentation">
        <defs>
          <linearGradient id="line-glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59,130,246,0.05)" />
            <stop offset="50%" stopColor="rgba(59,130,246,0.6)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0.05)" />
          </linearGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="1.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {edges.map(([from, to], index) => {
          const source = getNode(from)
          const target = getNode(to)

          return (
            <line
              key={`${from}-${to}`}
              className="topology-edge"
              x1={source.x}
              y1={source.y}
              x2={target.x}
              y2={target.y}
              style={{ animationDelay: `${index * 0.35}s` }}
            />
          )
        })}

        {nodes.map((node, index) => (
          <g key={node.id} style={{ animationDelay: `${index * 0.4}s` }} className="topology-node-group">
            <circle className={`topology-pulse ${node.status}`} cx={node.x} cy={node.y} r="3.8" filter="url(#softGlow)" />
            <circle className={`topology-node ${node.status}`} cx={node.x} cy={node.y} r="1.2" />
          </g>
        ))}
      </svg>

      <div className="health-panel">
        <div>
          <span className="health-label">System Health</span>
          <strong>99.984%</strong>
        </div>
        <div>
          <span className="health-label">Inference Latency</span>
          <strong>43ms median</strong>
        </div>
        <div>
          <span className="health-label">Policy Events</span>
          <strong>0 unverified</strong>
        </div>
      </div>
    </div>
  )
}

export default TopologyGraph

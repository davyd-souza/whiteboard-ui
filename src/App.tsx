// DEPENDENCY
import { useCallback } from 'react'
import ReactFlow, {
  Background,
  Controls,
  ConnectionMode,
  useEdgesState,
  Connection,
  addEdge,
  useNodesState,
} from 'reactflow'
import 'reactflow/dist/style.css'

// COMPONENT
import { Square } from './components/nodes/Square'
import { Pill } from './components/nodes/Pill'
import { DefaultEdge } from './components/edges/DefaultEdge'
import * as Toolbar from '@radix-ui/react-toolbar'

// STYLE
import { zinc } from 'tailwindcss/colors'

// VARIABLE
const NODE_TYPES = {
  square: Square,
  pill: Pill,
}

const EDGE_TYPES = {
  default: DefaultEdge,
}

export function App() {
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [nodes, setNodes, onNodesChange] = useNodesState([])

  const onConnect = useCallback((connection: Connection) => {
    return setEdges((prevEdges) => addEdge(connection, prevEdges))
  }, [])

  function addSquareNode() {
    setNodes((prevNodes) => [
      ...prevNodes,
      {
        id: crypto.randomUUID(),
        type: 'square',
        position: {
          x: 750,
          y: 350,
        },
        data: {},
      },
    ])
  }

  function addPillNode() {
    setNodes((prevNodes) => [
      ...prevNodes,
      {
        id: crypto.randomUUID(),
        type: 'pill',
        position: {
          x: 750,
          y: 350,
        },
        data: {},
      },
    ])
  }

  return (
    <div className='h-screen w-screen'>
      <ReactFlow
        nodeTypes={NODE_TYPES}
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        edgeTypes={EDGE_TYPES}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionMode={ConnectionMode.Loose}
        defaultEdgeOptions={{ type: 'default' }}
      >
        <Background gap={12} size={2} color={zinc[200]} />
        <Controls />
      </ReactFlow>

      <Toolbar.Root className='flex gap-5 fixed bottom-10 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-300 px-8 h-20 w-96 overflow-hidden'>
        <Toolbar.Button
          onClick={addSquareNode}
          className='w-32 h-32 bg-yellow-400 mt-6 rounded transition-transform hover:-translate-y-3'
        />
        <Toolbar.Button
          onClick={addPillNode}
          className='w-12 h-32 bg-violet-400 mt-6 rounded-3xl transition-transform hover:-translate-y-3'
        />
      </Toolbar.Root>
    </div>
  )
}

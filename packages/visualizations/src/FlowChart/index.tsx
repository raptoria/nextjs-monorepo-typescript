import React from 'react'
import styled from 'styled-components'
import ReactFlow from 'react-flow-renderer'

const FlowContainer = styled.div`
  height: 500px;
  width: 500px;
`
interface IData {
  label: string
}
export type IElements = {
  id: string
  data?: IData
  type?: string
  source?: string
  target?: string
  edgeType?: string
  animated?: boolean
  label?: string
}
interface IFlowChartProps {
  initialElements?: IElements[]
}

const elements = [
  {
    id: '1',
    type: 'input', // input node
    data: { label: 'Input Node' },
    position: { x: 250, y: 25 }
  },
  // default node
  {
    id: '2',
    // you can also pass a React component as a label
    data: { label: <div>Default Node</div> },
    position: { x: 100, y: 125 }
  },
  {
    id: '3',
    type: 'output', // output node
    data: { label: 'Output Node' },
    position: { x: 250, y: 250 }
  },
  // animated edge
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3' }
]
export const FlowChart: React.FC<IFlowChartProps> = () => (
  <FlowContainer>
    <ReactFlow elements={elements} />
  </FlowContainer>
)

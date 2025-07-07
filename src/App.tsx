import React from 'react'
import { client, SigmaClientProvider, useVariable } from '@sigmacomputing/plugin'

// Configure the variable
client.config.configureEditorPanel([
  {
    name: 'test-variable',
    type: 'variable'
  }
])

function TestComponent() {
  const [value] = useVariable('test-variable')
  
  return (
    <div style={{ padding: '20px' }}>
      <h3>Test Sigma Plugin</h3>
      <div>
        Variable value: {value || 'none'}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <SigmaClientProvider client={client}>
      <TestComponent />
    </SigmaClientProvider>
  )
}

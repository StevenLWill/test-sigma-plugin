import React, { useEffect } from 'react'
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
  
  // Debug the value
  useEffect(() => {
    console.log('Variable value:', value)
  }, [value])

  return (
    <div style={{ padding: '20px' }}>
      <h3>Test Sigma Plugin</h3>
      <div>
        Variable value: {value || 'none'}
      </div>
      <div style={{ color: '#666', fontSize: '12px', marginTop: '10px' }}>
        Debug info: type={typeof value}, value={JSON.stringify(value)}
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

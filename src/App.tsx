import React from 'react'
import { client, SigmaClientProvider, useVariable } from '@sigmacomputing/plugin'

// Declare our variable in Sigma
client.config.configureEditorPanel([{
  name: 'test-variable',
  type: 'text',
  defaultValue: '',
  description: 'A test variable for our plugin',
  section: 'Test Plugin'
}])

function TestComponent() {
  const [value, setValue] = useVariable('test-variable')
  
  return (
    <div style={{ padding: '20px' }}>
      <h3>Test Sigma Plugin</h3>
      <div style={{ marginBottom: '10px' }}>Current value: {value || 'none'}</div>
      <input 
        value={value || ''} 
        onChange={(e) => setValue(e.target.value)}
      />
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

import React, { useState } from 'react'
import { client, SigmaClientProvider, useVariable } from '@sigmacomputing/plugin'

// The variable is declared in plugin.json
function TestComponent() {
  const [inputValue, setInputValue] = useState('')
  const [value, setValue] = useVariable('test-variable')
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setValue(inputValue)
  }

  return (
    <div style={{ padding: '20px' }}>
      <h3>Test Sigma Plugin</h3>
      <div style={{ marginBottom: '10px' }}>
        Current Sigma value: {value || 'none'}
      </div>
      <form onSubmit={handleSubmit}>
        <input 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a value"
        />
        <button type="submit">Update Sigma Variable</button>
      </form>
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

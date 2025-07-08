import React, { useEffect } from 'react';
import { client, SigmaClientProvider, useVariable } from '@sigmacomputing/plugin';

// Configure the variable
client.config.configureEditorPanel([
  { name: 'test-variable', type: 'variable' }
]);

function TestComponent() {
  const [value, setValue] = useVariable('test-variable');
  
  // Debug the value
  useEffect(() => {
    console.log('Variable value changed:', value)
    console.log('Variable type:', typeof value)
  }, [value])

  const updateValue = (newValue: string) => {
    console.log('Setting value to:', newValue);
    setValue(newValue);
  };

  // Convert value to string for display, handling undefined and null
  const displayValue = value === undefined || value === null ? '' : String(value);

  return (
    <div style={{ padding: '20px' }}>
      <h3>Test Sigma Plugin</h3>
      <div>
        Current value: {displayValue || 'none'}
      </div>
      <div>
        <input 
          type="text" 
          value={displayValue}
          onChange={(e) => updateValue(e.target.value)}
          placeholder="Type to update variable"
        />
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

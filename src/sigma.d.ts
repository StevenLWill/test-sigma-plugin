declare module '@sigmacomputing/plugin' {
  import React, { ReactNode } from 'react'

  export type WorkbookVariable = string | undefined

  interface VariableConfig {
    name: string
    type: 'variable' | 'element' | 'column'
  }

  export const client: {
    config: {
      configureEditorPanel: (config: VariableConfig[]) => void
    }
  }

  export function SigmaClientProvider(props: { client: any; children: ReactNode }): React.ReactElement
  
  export function useVariable(name: string): [WorkbookVariable, (...values: unknown[]) => void]
} 
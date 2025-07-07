declare module '@sigmacomputing/plugin' {
  import React, { ReactNode } from 'react'

  export type WorkbookVariable = string

  interface VariableConfig {
    name: string
    type: string
    defaultValue?: string
    description?: string
    section?: string
  }

  export const client: {
    config: {
      configureEditorPanel: (config: VariableConfig[]) => void
    }
  }

  export function SigmaClientProvider(props: { client: any; children: ReactNode }): React.ReactElement
  
  export function useVariable(name: string): [string, (value: string) => void]
} 
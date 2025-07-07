declare module '@sigmacomputing/plugin' {
  import React, { ReactNode } from 'react'

  export type WorkbookVariable = string

  export const client: {
    config: {
      configureEditorPanel: (config: Array<{
        name: string
        type: string
        defaultValue?: string
      }>) => void
    }
  }

  export function SigmaClientProvider(props: { client: any; children: ReactNode }): React.ReactElement
  
  export function useVariable(name: string): [string, (value: string) => void]
} 
import { FC, PropsWithChildren } from "react"

export const DarkLayout: FC<PropsWithChildren> = ( {children} ) => {
  return (
    <div style={{
        backgroundColor: 'rgba(100,100,100,0.3)',
        borderRadius: '0.5rem',
        padding: '1rem',
    }}>
        <h3>Dark Layout</h3>
        <div>
            {children}
        </div>
    </div>
  )
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Buffer } from 'buffer';

// Make Buffer available globally in the browser
window.Buffer = Buffer;


import './index.css'
import SolanaWalletProvider from './solana/WalletProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SolanaWalletProvider>
      <App />
    </SolanaWalletProvider>
  </StrictMode>,
)

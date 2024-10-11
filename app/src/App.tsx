import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import CounterState from "./components/CounterState"
import Increment from "./components/Increment"
import Decrement from "./components/Decrement"

const App = () => {

  return (
    <div>
      <WalletMultiButton />
      <h1>Anchor Counter Dapp</h1>
      <CounterState />
      <div className="buttons">
        <Increment />
        <Decrement />
      </div>
    </div>
  )
}

export default App
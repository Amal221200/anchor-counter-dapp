import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import CounterState from "./components/CounterState"
import Increment from "./components/Increment"
import Decrement from "./components/Decrement"

const App = () => {

  return (
    <div>
      <WalletMultiButton />
      <h1>Hello World</h1>
      <CounterState />
      <div className="flex gap-x-2">
        <Increment />
        <Decrement />
      </div>
    </div>
  )
}

export default App
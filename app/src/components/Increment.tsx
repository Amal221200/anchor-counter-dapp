import { useState } from "react"
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { program } from "../solana/setup"

const Increment = () => {
    const { publicKey, sendTransaction, } = useWallet()
    const { connection } = useConnection()
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async () => {
        if (!publicKey) return;

        setIsLoading(true);

        try {
            // Create a transaction to invoke the increment function
            const transaction = await program.methods
                .increment() // This takes no arguments so we don't need to pass anything
                .transaction();

            const transactionSignature = await sendTransaction(
                transaction,
                connection,
                {
                    preflightCommitment: "confirmed"
                }
            );



            console.log(
                `View on explorer: https://solana.fm/tx/${transactionSignature}?cluster=devnet-alpha`,
            );
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <button className="button" type="button" onClick={handleClick} disabled={!publicKey || isLoading}>
            {isLoading ? "Incrementing..." : "Increment"}
        </button>
    )
}

export default Increment
import { IdlAccounts, Program } from "@coral-xyz/anchor";
import { Counter, IDL } from "./idl";
import { clusterApiUrl, PublicKey, Connection } from "@solana/web3.js";

const programId = new PublicKey("5i6SHfXHgKsHBGUoR2mVhrDK8fo7qJ3ozzCkzfxtz2FH");

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

export const program = new Program<Counter>(IDL, programId, {
    connection
})

export const [counterPDA] = PublicKey.findProgramAddressSync(
    [Buffer.from("counter")],
    program.programId,
);

export type CounterData = IdlAccounts<Counter>["counter"]
import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))
const publickey = new Web3.PublicKey("BJbpbbsgBrtGLSWmjbNWMeLfF24wV2K2WQi4TgzaiPAj")
const decoded = base58.decode('3mg8C3usirFe8P75JiLcwyRZtzLRdGhtTcdDePX2PrPXuJgfJmFoPPvi6qENJ7BPv9rtcGkiYhUzMLyHGmboF8nf')
const keyPair = Web3.Keypair.fromSecretKey(decoded)
const tokenMint = "ABSoTukkTYjeqZcQtX24USUKiQEZW8KAn7zqpsTqVUEC"

async function main(){
    const tokenAccount  = await token.createAccount(
        connection, // connection
        keyPair, // signer
        new Web3.PublicKey(tokenMint), // mint public key
        publickey, // owner of the token-account
    );
    console.log(tokenAccount.toBase58());
}

main();



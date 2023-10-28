import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'

import base58 from 'bs58';
async function main(){

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const base58DecodedPK = base58.decode('3mg8C3usirFe8P75JiLcwyRZtzLRdGhtTcdDePX2PrPXuJgfJmFoPPvi6qENJ7BPv9rtcGkiYhUzMLyHGmboF8nf');
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK);

    const mintToken = await token.mintTo(
        connection,
        signer,
        new Web3.PublicKey('ABSoTukkTYjeqZcQtX24USUKiQEZW8KAn7zqpsTqVUEC'), //mint 
        new Web3.PublicKey('9Jizwkw5YxRv536iECEQkiPXMkTC6HVBAPD4LgmGBWA7'), // token account
        new Web3.PublicKey('BJbpbbsgBrtGLSWmjbNWMeLfF24wV2K2WQi4TgzaiPAj'), //authority
        100000000000, //amount
    )
    console.log('mint Token ', mintToken)

}
main()
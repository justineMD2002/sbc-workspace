import * as Web3 from '@solana/web3.js';
import base58 from 'bs58'

async function main() {
    const decoded = base58.decode('3mg8C3usirFe8P75JiLcwyRZtzLRdGhtTcdDePX2PrPXuJgfJmFoPPvi6qENJ7BPv9rtcGkiYhUzMLyHGmboF8nf')
    const keyPair = Web3.Keypair.fromSecretKey(decoded)

    const publicKeyFrom = new Web3.PublicKey('BJbpbbsgBrtGLSWmjbNWMeLfF24wV2K2WQi4TgzaiPAj');
    const publicKeyTo = new Web3.PublicKey('BpD19DD33Wxg721hNk4yueCn5ruP4MK3jKrk5kPw3W6h');

    const instruction = Web3.SystemProgram.transfer({
        fromPubkey: publicKeyFrom,
        toPubkey: publicKeyTo,
        lamports: 1000000000,
    });
    const transaction = new Web3.Transaction();
    transaction.add(instruction);

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const txSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [keyPair]);

    console.log('txHash', txSignature)
}

main();
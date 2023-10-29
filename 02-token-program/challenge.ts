import * as Web3 from "@solana/web3.js";
import base58 from "bs58";

async function main() {
  const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"));
  const decoded = base58.decode("3mg8C3usirFe8P75JiLcwyRZtzLRdGhtTcdDePX2PrPXuJgfJmFoPPvi6qENJ7BPv9rtcGkiYhUzMLyHGmboF8nf");
  const keyPair = Web3.Keypair.fromSecretKey(decoded);
  const programId = new Web3.PublicKey(
    "462V7oRxZYPZ1AhmtmeNKBxpcAYFKsBDsaXqutSzoav7"
  );
  const publicKey = new Web3.PublicKey(
    "BJbpbbsgBrtGLSWmjbNWMeLfF24wV2K2WQi4TgzaiPAj"
  );
  const instruction = new Web3.TransactionInstruction({
    keys: [
      {
        pubkey: publicKey,
        isSigner: true,
        isWritable: false,
      },
    ],
    data: Buffer.alloc(20),
    programId,
  });

  const transaction = new Web3.Transaction().add(instruction);

  const signature = await Web3.sendAndConfirmTransaction(
    connection,
    transaction,
    [keyPair]
  );
  console.log("SIGNATURE", signature);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
  });
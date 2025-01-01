import { createInitializeMint2Instruction, createMint , getMinimumBalanceForRentExemptMint, TOKEN_PROGRAM_ID } from "@solana/spl-token";
//import { createTokenAccount } from "@solana/spl-token";
import { Buffer } from "buffer";
import { Keypair, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { createInitializeInstruction, pack } from '@solana/spl-token-metadata';
export function TokenLaunchpad() {

    const wallet = useWallet();
    async function createToken(){
        const name = document.getElementById('name').value;
        const symbol = document.getElementById('symbol').value;
        const imageurl = document.getElementById('imageurl').value;
        const initialsupply = document.getElementById('initialsupply').value;
        const lamports = await getMinimumBalanceForRentExemptMint(connection);
        const keypair = Keypair.generate();
        const Transaction = new Transaction();
        SystemProgram.createAccount({
            fromPubkey: wallet.publicKey,
            newAccountPubkey: keypair.publicKey,
            space: MINT_SIZE,
            lamports,
            programId: TOKEN_PROGRAM_ID,
        }),
        //createInitializeMint2Instruction(keypair.publicKey, decimals, mintAuthority, freezeAuthority, programId),
        createInitializeMint2Instruction(keypair.publicKey,6,wallet.publicKey,wallet.publicKey,TOKEN_PROGRAM_ID);
        transaction.partialSign(keypair);
        transaction.recentBlockhash = await connection.getRecentBlockhash();
        wallet.sendTransaction(transaction);
     }
     
     
    return  <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
        <h1>Solana Token Launchpad</h1>
        <input  id="name" className='inputText' type='text' placeholder='Name'></input> <br />
        <input id ="symbol" className='inputText' type='text' placeholder='Symbol'></input> <br />
        <input id = "imageurl" className='inputText' type='text' placeholder='Image URL'></input> <br />
        <input id = "initialsupply" className='inputText' type='text' placeholder='Initial Supply'></input> <br />
        <button onClick={createToken} className='btn'>Create a token</button>
    </div>
}
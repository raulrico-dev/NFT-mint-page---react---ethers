import { ethers, formatEther } from 'ethers';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const currency = 'ETH';
const CONTRACT_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const abi = [];
const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, null);


const getAddress = async (signer) => {
    try {
        return await signer.getAddress();
    } catch (error) {
        throw new Error("Failed to fetch address from signer.");
    }
};

export default function MintComponent(params) {
    const [account, setAccount] = useState(null);
    const [balance, setBalance] = useState(null);

    const formatedBalance = balance ? formatEther(balance) : null;

    const [loading, setLoading] = useState(false);

    let provider;
    let signer = null;

    const handleConnectWallet = async () => {
        setLoading(true);
        if (window.ethereum == null) {
            alert('Please install MetaMask');
            return;
        }
        try {
            // Connecting wallet
            provider = new ethers.BrowserProvider(window.ethereum)
            signer = await provider.getSigner();

            // Getting address
            const address = await getAddress(signer);
            setAccount(address);

            // Getting balance
            const balance = await provider.getBalance(address);
            setBalance(balance);

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className='mint-container' style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "auto", padding: 20 }}>
                {formatedBalance && (
                    <Profile account={account} balance={formatedBalance} />
                )}
            <div className='cta btn-container' style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16, margin: "auto", padding: 20, backgroundColor: "rgb(20,20,20)" }}>
                {!account && (
                    <button className='btn connect-wallet-btn' onClick={handleConnectWallet}>
                        {loading ? 'Loading...' : 'Connect Wallet'}
                    </button>
                )}
                {account && (
                    <>
                        <button className='btn free-mint-btn'>Free Mint - $0</button>
                        {/* <button className='btn eth-mint-btn'>Mint - 0.10ETH</button> */}
                    </>
                )}
            </div>
            <p>
                <Link to="/about" className='btn-info ' >
                    About this page
                </Link>
            </p>
        </main>
    )
}

function ProfileSkeleton() {
    return (
        <div
            style={{
                width: 390,
                height: 200,
                backgroundColor: "rgb(31,31,31)",
                border: "1px solid rgb(43,43,43)",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 16,
                padding: 16
            }}
        >
            <div style={{
                height: 32,
                width: "50%",
                backgroundColor: "rgb(48,48,48)",
                borderRadius: 8,
                margin: "0",
                marginTop: 16,
            }} />
            <div style={{
                height: 32,
                width: "90%",
                backgroundColor: "rgb(48,48,48)",
                borderRadius: 8,
                margin: "0"
            }} />
            <div style={{
                height: 32,
                width: "90%",
                backgroundColor: "rgb(48,48,48)",
                borderRadius: 8,
                margin: "0",
            }} />
            <div style={{
                height: 32,
                width: "90%",
                backgroundColor: "rgb(48,48,48)",
                borderRadius: 8,
                margin: "0"
            }} />

        </div>
    )
}

function Profile(params) {
    const account = params.account;
    const balance = params.balance;

    return (
        <>
            <div className='account-info' style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginBottom: 16, padding: 16, backgroundColor: "rgb(31,31,31)", border: "1px solid rgb(43,43,43)", borderRadius: 8 }}>
                <p className='account-info'
                    style={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: "white"
                    }}
                >
                    {"Wallet: "}
                    <span style={{ display: "block", fontSize: "1.2rem", color: "white" }}>
                        {account ? (
                            account.slice(0, 4) + "..." + account.slice(account.length - 6)
                        ) : (
                            null
                        )}
                    </span>
                </p>
                <p className='account-info'
                    style={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: "white"
                    }}
                >
                    {balance && (
                        <>
                            <span style={{ display: "block", color: "white" }}>Balance:</span>
                            <span style={{ display: "block", fontSize: "1.6rem", color: "white" }}>$ {balance} {currency}</span>
                        </>
                    )}
                </p>
            </div>
        </>
    )
}
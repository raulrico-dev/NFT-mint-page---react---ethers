import { Link } from "react-router-dom";

export default function AboutPage(params) {

    return (
        <main style={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center"
        }}>
            <section style={{
                width: "100%",
                maxWidth: 998,
                margin: "0 auto",
                padding: "16 24",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
            }}>
                <h1
                    style={{
                        marginRight: "auto",
                        fontSize: 32,
                        fontWeight: "bold",
                        color: "white",
                    }}
                >Welcome to NFT Mint Dapp</h1>
            </section>
            <section style={{
                maxWidth: 998,
                margin: "0 auto",
                padding: "0 24",
                flexGrow: 1,
            }}>
                <p>
                    The MintNFT project is a dynamic web application designed to showcase my expertise in web3 technologies, specifically focusing on NFT (Non-Fungible Token) creation using Ethereum and the ethers.js library. This project is part of my React.js portfolio, demonstrating my ability to integrate blockchain functionalities into modern web applications. The MintNFT page allows users to mint their own NFTs seamlessly through a user-friendly interface connected to the Ethereum blockchain.
                </p>

                <div style={{ marginTop: '20px' }}>
                    <h2 style={{ color: "white", marginBottom: '10px' }}>Project Highlights</h2>

                    <div style={{ marginBottom: '15px' }}>
                        <h3 style={{ color: "rgb(237,237,237)" }}>Blockchain Integration</h3>
                        <p style={{ }}>Utilizes Ethereum blockchain for minting NFTs, ensuring decentralized and secure transactions.</p>
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <h3 style={{ color: "rgb(237,237,237)" }}>Web3 Technologies</h3>
                        <p style={{ }}>Employs ethers.js for interacting with Ethereum smart contracts, demonstrating proficiency in web3 development.</p>
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <h3 style={{ color: "rgb(237,237,237)" }}>User Authentication</h3>
                        <p style={{ }}>Integrates MetaMask for user authentication and wallet management, providing a secure way for users to connect to the blockchain.</p>
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <h3 style={{ color: "rgb(237,237,237)" }}>React.js</h3>
                        <p style={{ }}>Built with React.js, showcasing my skills in modern front-end development and component-based architecture.</p>
                    </div>

                    <div>
                        <h3 style={{ color: "rgb(237,237,237)" }}>Smart Contract Interaction</h3>
                        <p style={{ }}>Directly interacts with ERC-721 smart contracts, showcasing practical knowledge of Ethereum token standards.</p>
                    </div>
                </div>
            <hr style={{margin: "2rem 0"}}/>
            <div className="cta" 
            style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 20,
                margin: "2rem 0"
                }}>
                <a href="#" title="Explore on github">GitHub</a>
            </div>
            </section>
            <section>
                <Link to="/" className="btn connect-wallet-btn" style={{color:"black"}}>Back to Home</Link>
                <a href="https://raulrico.work" className="btn" style={{color:"white", border:"solid thin white"}}>Explore my portfolio</a>
            </section>
        </main>
    )
}
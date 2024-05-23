export default function Footer(params) {
    return (
        <>
            <footer style={{ borderTop:"solid thin #eee", width:"100%"}}>
                <div className="footer-wrapper" style={{ padding: 16, margin:"auto", textAlign:"center"}}>
                    <p>
                        © 2020 RaulRico —{" "}
                        <a href="https://www.instagram.com/raulrico.uidev" target="_blank" rel="noreferrer">@raulrico.uidev</a>
                    </p>
                </div>
            </footer>
        </>
    )
}
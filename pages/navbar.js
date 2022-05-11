import styles from "../styles.module.css";

export default function navbar(){
    return(
        <div>
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid" style={{color: "blue"}}>
                    <img src="/Online-shop-logo.png" alt="Vercel" className="logonav" style={{width:"70px",height:"50px" ,paddingLeft:"10px", paddingRight:"13px"}}/>
                    <a className="navbar-brand" href="/">Shopzilla</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/Inventory">Inventory</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Delivery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Prices</a>
                            </li>
                            {/*<li className="nav-item">*/}
                            {/*    <a className="nav-link disabled">Disabled</a>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                </div>
            </nav>
                <style jsx>{`
                    .nav-item{
                      padding-left: 30px;
                    }
                    .logo{
                    padding-right: 20px;
                    }
                `}</style>
            </div>
        </div>
    );
}
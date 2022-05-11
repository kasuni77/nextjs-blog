import Navbar from "../pages/navbar";
import FOOTER from "../pages/footer";

function Inventory(){
    return(
        <div>
            <Navbar />
            <h1 className="title" style={{color:"cornflowerblue", marginTop:"100px", marginLeft:"100px"}}>
                Welcome to Shopzilla's Inventory
            </h1>
            <br/>
            {/*<TABLE/>*/}
            <FOOTER/>
        </div>
    );
}
export default Inventory;
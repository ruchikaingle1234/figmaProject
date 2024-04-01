import Frame2 from "../Frame2/Frame2";
import { ImageData } from "./ImageData";
import { Image } from "react-bootstrap";
const Logos=()=>
{
    return(
        <div style={{backgroundColor: "#EFE5FF", width:"1352px",height:"200px",marginLeft:"-120px",marginTop:"8px"}}>

        <div>
            <div style={{position:"relative" ,top:"40px"}}>
        <p style={{textAlign:"center",marginTop:"80px",color:"#AD93DF",fontFamily:"Poppins",fontWeight:"500",fontSize:"20px"}}>Hire for 1000+ Brands Including</p>
        </div>

            {
                
            ImageData.map(each =>
           
            <Image style={{marginTop:"70px",marginLeft:"70px" ,gap:"80px"}} src={each.src} />
            )}
            
            
        </div>
        <div>
        <Frame2/>
        </div>
       
        </div>
    )
}
export default Logos;
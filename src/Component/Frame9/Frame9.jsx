import Frame10 from "../Frame10/Frame10";
import "./Frame9.css"
import { Frame9Data } from "./Frame9Data";


const Frame9=()=>
{
    return(
        <div className="container-Frame9">
            <div className="container-tr1">
                <p className="cn">Frequently asked <span className="cn1">Questions</span></p>
                <div className="container-tr2">
                    <p className="container-tr3">We have Compiled the most commonly asked question about our Platform for your information and <br/>to enhance your overall experience.</p>
                </div>

            </div>
           
            <div className="container-tr4">
             <div className="container-tr5">
              <div className="container-l1">
                <p className="container-l2">How can I Get started with Rework AI?</p>
              </div>
              <div>
              Lorem ipsum dolor sit amet consectetur. Porta velit ultricies feugiat tortor odio. Scelerisque habitant quam pharetra adipiscing id ipsum et lectus malesuada.
              </div>
             </div>
             {
             Frame9Data.map((each)=>(
             <div className="container-tr6 mt-3">
                <div className="container d-flex ">
               {each.parag}
               <img src={each.s} alt=""/>
               </div>
             </div>
             ))}
            </div>
            
          <Frame10/>
        </div>
    )
}
export default Frame9;
import "../Components/heroSection.css"
import image2 from '../Images/image2.png'
import image3 from '../Images/image3.svg'
function heroSection()
{
    return(
        <div className="hero-div">
            <img  className="img3" src={image3}></img>
            <h1>GOOD<span>-</span>FOOD</h1>
            <img className="img2" src={image2}></img>
            <img  className="img4" src={image3}></img>
            <h1>GOOD MOOD</h1>
            {/* <h1>FOOD</h1> */}
        </div>

    )
}
export default heroSection
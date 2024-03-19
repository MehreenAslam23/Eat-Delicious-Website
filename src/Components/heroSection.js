import "../Components/heroSection.css"
import image2 from '../Images/image2.png'
import image3 from '../Images/image3.svg'
import image5 from '../Images/image5.svg'
function heroSection()
{
    return(
        <div className="hero-div">
            <img  className="img3" src={image3}></img>
            <h1>GOOD<span>-</span>FOOD</h1>
            <img className="img2" src={image2}></img>
            <img  className="img4" src={image3}></img>
            <h1>MOOD</h1>
            <div className="slider">
                <ul className="list">
                    <li>PACKED WITH FLAVOUR</li>
                    <img src={image5}></img>
                    <li>100% PLANT BASED</li>
                    <img src={image5}></img>
                    <li>DAIRY FREE</li>
                    <img src={image5}></img>
                </ul>
                <ul className="list">
                    <li>PACKED WITH FLAVOUR</li>
                    <img src={image5}></img>
                    <li>100% PLANT BASED</li>
                    <img src={image5}></img>
                    <li>DAIRY FREE</li>
                    <img src={image5}></img>
                </ul>
                <ul className="list">
                    <li>PACKED WITH FLAVOUR</li>
                    <img src={image5}></img>
                    <li>100% PLANT BASED</li>
                    <img src={image5}></img>
                    <li>DAIRY FREE</li>
                    <img src={image5}></img>
                </ul>
            </div>
        </div>


    )
}
export default heroSection
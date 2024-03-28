import '../Components/logoSlider.css'
import image6 from '../Images/image6.jpg'
import image7 from '../Images/image7.png'
import image8 from '../Images/image8.png'
import image9 from '../Images/image9.png'
import image10 from '../Images/image10.png'
import image11 from '../Images/image11.png'
import image12 from '../Images/image12.png'
import image13 from '../Images/image13.png'
import image14 from '../Images/image14.png'
import image15 from '../Images/image15.png'
function logoSlider()
{
    return(
        <div className='logoSlider'>
            <ul className='logos'>
                <li><img src={image6}></img></li>
                <li><img src={image7}></img></li>
                <li><img src={image8}></img></li>
                <li><img src={image9}></img></li>
                <li><img src={image10}></img></li>
                <li><img src={image11}></img></li>
                <li><img src={image12}></img></li>
                <li><img src={image13}></img></li>
                <li><img src={image14}></img></li>
                <li><img src={image15}></img></li>
            </ul>    
            <ul className='logos'>
                <li><img src={image6}></img></li>
                <li><img src={image7}></img></li>
                <li><img src={image8}></img></li>
                <li><img src={image9}></img></li>
                <li><img src={image10}></img></li>
                <li><img src={image11}></img></li>
                <li><img src={image12}></img></li>
                <li><img src={image13}></img></li>
                <li><img src={image14}></img></li>
                <li><img src={image15}></img></li>
            </ul>     
        </div>
    )
}
export default logoSlider
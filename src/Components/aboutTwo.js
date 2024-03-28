import image19 from '../Images/image19.svg'
import image20 from '../Images/image20.svg'
import '../Components/aboutTwo.css'
function aboutTwo() {
    return (
        <div className='abouttwo-div'>
             <img className='image19' src={image19}></img>
            <div className='centerabout-div'>
                <div className='div-oneabout'>
                    <img src={image20}></img>
                </div>
                <div className='div-twoabout'>
                    <h2>INSPIRING GOOD THROUGH TASTY GOODNESS</h2>
                    <p>We’re here to inspire discovery and tempt everyone to eat more plants. Because we care about the future – yours, ours and the planet’s.</p>
                </div>
            </div>
        </div>
    )
}
export default aboutTwo
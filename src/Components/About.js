import image16 from '../Images/image16.svg'
import image17 from '../Images/image17.svg'
import image18 from '../Images/image18.svg'
import '../Components/About.css'
function About()
{
    return(
        <div className='about-div'>
            <img className='image16' src={image16}></img>
            <img className='image17' src={image17}></img>
            <div className='center-div'>
                <div className='div-one'>
                    <h2>CURIOUS... BY NAME, BY NATURE</h2>
                    <p>It’s what inspires us to whip up, throw together, tear, shake, and break the rules – on a mission to redefine food for a new generation.</p>
                </div>
                <div className='div-two'> 
                <img src={image18}></img>
                </div>
            </div>
        </div>
    )
}
export default About
import '../home/home.css';
// import background from '../../assets/back.jpg';
import earth from '../../assets/earth.png';

export default function Home(){
    return (
        <>
        <div className='container1'>
        <div className='home'>
            <img src={earth} className='earth' alt="image" />
        </div> 
            <div className='text'>
            <strong>Global server for books around the world .</strong>
            <h4>“Take a good book to bed with you—books do not snore.”</h4>
            </div>
        </div>
         </>
    )
}
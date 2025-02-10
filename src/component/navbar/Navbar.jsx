import React from 'react'
import "./navbar.css"
import{Link} from 'react-router-dom'
import Logo from "../../assets/removelogo.png";
import Firstmatc from '../../assets/firstMatch.jpg'
import Secondmatch from '../../assets/secondmatch.jpg'
import Thirdmatch from '../../assets/thirdmatch.jpg'
import Security from '../../assets/security.jpg'
import Comfort from '../../assets/ComfortTwo.jpg'
import {TypeAnimation} from 'react-type-animation'




function Navbar() {
  return (
    <div> 
    <nav className='navbar'>
      <div className='navlon'>
        <img src={Logo} alt='logo' className='logo'/>
        <p className='ltext'>KOONNKT</p>
      </div>
      <div className='link'>
       <Link to="/payment" className='linkw'>Payment</Link>  
      <Link to="/post-ride" className='linkW'>Post Ride</Link>
      <Link to="/request-ride" className='linkW'>Request Ride</Link>
      <Link to="/report" className='linkW'>Report</Link>
      </div>
      <div className='button'>
        <Link to="/signup"><button className='but'>Sign up</button></Link>
        <Link to="signin"><button className='but'>Sign in</button></Link>
      </div>
    </nav>
   <section className='introduction'>
    <div className='textD'>
      {/* <h2 className='introText'>
      "Connect with<span className='driver'> Drivers</span>  and <span className='passenger'>Passengers</span> in minutes <br/> your ride, your way!
      </h2>
      <p className='exprience'>Exprience seamless and affordable rides anytime, anywhere</p> */}
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'CONNECT WITH DRIVERS and PASSENGERS',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'IN A MINUTES YOUR RIDE, YOUR WAY',
        1000,
        'EXPRIENCE SEAMLESS AND AFFORDABLE RIDE',
        1000,
        'ANYTIME, ANYWHERE ',
        1000
      ]}
      wrapper="span"
      speed={5}
      style={{  fontSize: 'clamp(0.60rem, 5vw, 4rem)', 
        fontWeight: 'bolder', 
        display: 'inline-block', 
        marginTop: '10%'  }}
      repeat={Infinity}
    />
    </div>
    <button className='butD'><span>Download </span><img src={Logo} alt='logo' className='dimg'/><span>app</span> </button>
   
   <div className='introCard'>
     <div className='subCard'>
      <img src={Firstmatc} alt='introimage' className='introimage'/>
      <p>Get a fantasy ride</p>
     </div>
     <div className='subCard'>
      <img src={Secondmatch} alt='introimage' className='introimage'/>
      <p>Move with Ease</p>
     </div>
     <div className='subCard'>
      <img src={Thirdmatch} alt='introimage' className='introimage'/>
      <p>Traffic-Free Ride</p>
     </div>
   </div>
   <div className='solution'>
    <h2> <h2 className='create'>CREATING A SOLUTION TO  THE TRAFFIC  PROBLEM IN THE MOST VISITED CITY  IN THE WORLD</h2></h2>
     
     <div>
      <p className='trust'>Trusted by</p>
      <div className='trustImage'>
      <button className='butD'><span> 1M </span><img src={Logo} alt='logo' className='dimg'/><span>Users</span> </button>
      <button className='butD'><span>100k</span><img src={Logo} alt='logo' className='dimg'/><span>Drivers</span> </button>
      <button className='butD'><span>10</span><img src={Logo} alt='logo' className='dimg'/><span>Companies</span> </button>
      </div>

     </div>

     <div className='tclass' >
      <h2 className='trave'>TRAVEL <span className='around'>AROUND</span> THE CITY  </h2>
      <p className='affordable'>Exprience seamless and affordable rides anytime, anywhere</p>
     </div>
     <div className='bigCard'>
     <div className='aroundCity'>
       <div className='aroundText'>
        <h3 className='scammed'>Don't Get Scammed By Taxi Driver</h3>
        <p className='avoid'>Avoid taxi scams by using reputable ride-hailing apps
          that provide fare estimates and driver information 
          upfront.Always verify the driver's credentials and 
          ensure that meter is running to prevent overcharging
        </p>
       </div>
       <img src={Security} alt='' className='aimg' />
     </div>
     <div className='aroundCity'>
       <div className='aroundText'>
        <h3 className='scammed'>Comfort and Security</h3>
        <p className='avoid'>Experience unparalleled comfort and security with our 
      service, featuring well-maintained vechicles equipped 
      with advanced safety feature and plush interiors.our
      professional driver are dedicated to ensuring a smooth,
      safe,and relaxing journey from start to finish.
        </p>
       </div>
       <img src={Comfort} alt='' className='aimg' />
     </div>
     </div>
     <div className='jojful'>
      <h2 className='joy'>A JOYFUL RIDE STARTS HERE WITH</h2>
      <img src={Logo} alt='logo' className='Jlogo'/>
     </div>

    </div>
   </section>
   
   <section className='solution' >
   
     
   </section>
   </div>
  )
}

export default Navbar

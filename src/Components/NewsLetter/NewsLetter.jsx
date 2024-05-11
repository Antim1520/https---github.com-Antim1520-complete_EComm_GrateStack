
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newletter'>
      <h1>Get Exculsive offer on your Email</h1>
      <p>Subscribe to our newletter and stay update</p>
      <div>
        <input type='email' placeholder='youre Email id'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter

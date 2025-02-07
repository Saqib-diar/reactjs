import './App.css'
import image from "./assets/hero-image.png"
import userIcon from "./assets/icon_2.png"
import passIcon from "./assets/icon_3.png"

function App() {

  return (
    <>
    <div className='flex flex-col items-center h-svh justify-center '>
      <div className='flex flex-col gap-5 border-dashed border-2 border-gray-500 px-5 py-5 sm:px-10 sm:py-10 rounded-lg shadow-lg shadow-[#ff1867]'>
      <h2 className='font-bold text-slate-400 self-center'>LOGIN PAGE</h2>
      <form action="" className='flex flex-col gap-3'>
        <div className='flex flex-col'>
        <label class="ds-label">
          <span>
            <input placeholder="Username" class="ds_textinput" type="text" />
            <div class="ds-input-icon">
              <img src={userIcon} alt="" />
            </div>
          </span>
          <i></i>
        </label>
          {/* <label htmlFor="" className='font-semibold'>USERNAME</label> */}
          {/* <input type="text" placeholder='Enter username' className='border-none'/> */}
        </div>
        <div className='flex flex-col'>
        <label class="ds-label">
          <span>
            <input type="password" placeholder="Password" class="ds_textinput" />
            <div class="ds-input-icon">
            <img src={passIcon} alt="" />
            </div>
          </span>
          <i></i>
        </label>
          {/* <label htmlFor="" className='font-semibold'>PASSWORD</label>
          <input type="text" placeholder='Enter Password'className='border-none'/> */}
        </div>
        <div className='btn-class'>
        <button className='w-full py-2 text-slate-400'>SUBMIT</button>
        <i></i>
        </div>
      </form>
      </div>
      <p className='text-slate-400 py-10'>&copy; 2025 <a href="https://github.com/saqib-diar">saqib_diar</a></p>
    </div>
      </>
    )
}

export default App

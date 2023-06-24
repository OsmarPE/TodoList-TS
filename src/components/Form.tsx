import Plus from '../assets/icons/Plus'
import {propsForm} from '../types'   

function Form({HandleSubmit,value,setvalue}: propsForm):JSX.Element {
  return (
        <form onSubmit={HandleSubmit} className='form'>
          <div className="form__item">
            <input className='form__input' value={value} onChange={(e) => setvalue(e.target.value)} type="text" name="input" id="input" placeholder='Math classe at 6:00...' />
            <div className="form__submit-content">
                <input className='form__submit' type="submit" value={' '} />
                <Plus/>
            </div>
          </div>
        </form>
  )
}

export default Form
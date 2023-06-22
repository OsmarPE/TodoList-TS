import Remove from "../assets/icons/Remove"
import {propTask} from '../types'


function Task({ taskItem, removeTask, setIsChecked}: propTask):JSX.Element {
    const {id, check,task } = taskItem
    return (
        <div className="task">
            <div className="task__left">
                <input type="checkbox" id={id.toString()} checked={check} onChange={() => setIsChecked(id) }/>
                <label htmlFor={id.toString()} className={'task__name'} style={{textDecoration: check ? 'line-through': 'none' }}> {task} </label>
            </div>
            <button className="task__btn" onClick={() => removeTask(id) } >
                <Remove />
            </button>
        </div>
    )
}

export default Task
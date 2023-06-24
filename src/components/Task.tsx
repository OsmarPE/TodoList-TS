import Check from "../assets/icons/Check"
import Remove from "../assets/icons/Remove"
import { propTask } from '../types'


function Task({ taskItem, removeTask, setIsChecked }: propTask): JSX.Element {
    const { id, check, task } = taskItem
    return (
        <div className="task">
            <div className="task__body">
                <div className="task__left">
                    <div className="task__checkArea">
                        <input type="checkbox" id={id.toString()} checked={check} onChange={() => setIsChecked(id)} />
                        <div className={`task__check ${check && 'active'}`}>
                            {check && <Check />}
                        </div>
                    </div>
                    <label htmlFor={id.toString()} className={'task__name'} > {task} </label>
                </div>
                <button className="task__btn" onClick={() => removeTask(id)} >
                        <Remove />
                </button>

            </div>
        </div>
    )
}

export default Task
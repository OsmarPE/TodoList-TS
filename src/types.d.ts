export interface TaskType {
    id: number,
    task: string,
    check: boolean
}

export interface propsForm {
    HandleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    value: string,
    setvalue: (value: string) => void
}


type idType = (id: number) => void

export interface propTask {
    taskItem: {
        id: number,
        task: string,
        check: boolean
    },
    removeTask: idType,
    setIsChecked: idType
}
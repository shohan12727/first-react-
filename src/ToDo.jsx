export default function ToDo ({task, isDone}){
    if (task){
        return <p> {task} ... you are on the way </p>
    }
    return <p>done</p>
}


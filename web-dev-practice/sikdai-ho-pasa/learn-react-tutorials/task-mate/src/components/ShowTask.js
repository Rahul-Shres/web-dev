const ShowTask = ({tasklist, setTasklist, handleEdit, handleDelete}) => {
    return (
        <section className='showTask'>
            <p className="head">
                <span>
                    <span className="title">Todo</span>
                    <span className="count">{tasklist.length}</span>
                </span>
                <span className="clearAll" onClick={() => setTasklist([])}>Clear All</span>
            </p>
            <ul>
                {tasklist.map((task) => (
                    <li key={task.id}>
                        <p>
                            <span className="name">{task.name}</span>
                            <span className="time">{task.time}</span>
                        </p>                
                        <button onClick={() => handleEdit(task.id)}>Edit</button>
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ShowTask;
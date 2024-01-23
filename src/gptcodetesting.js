function AttemptingTodo() {

    const [title, setTitle] = useState('');
    const [description, setdescription] = useState('');
    const [mainTask, setMainTask] = useState([]);
  
    const submitHandler = (event) => {
      event.preventDefault();
      setMainTask([...mainTask, { title, description }]);
      setTitle('');
      setdescription('');
    }
  
    const deleteHandler = (index) => {
      let copyTask = [...mainTask];
      copyTask.splice(index, 1);
      setMainTask(copyTask);
    }
  
    let render = mainTask.map((tsk, iterate) => {
      return (
        <div className='render' key={iterate}>
          <h2>{"title : " + tsk.title}</h2>
          <p>{"Details : " + tsk.description}</p>
          <button onClick={() => deleteHandler(iterate)}>DELETE</button>
        </div>
      );
    });
  
    return (
      <>
        <h1 id='designingHeading'>TODO LIST</h1>
        <form className='designingForm' onSubmit={submitHandler}>
          <label>TITLE</label>
          <input
            value={title}
            onChange={(event1) => { setTitle(event1.target.value) }}
            className='designingInput1'
            placeholder='enter your title'
            type='text'>
          </input>
          <label>DESCRIPTION</label>
          <input className='designingInput2'
            value={description}
            onChange={(event2) => { setdescription(event2.target.value) }}
            placeholder='enter your description'
            type='text'>
          </input>
          <button className='designingButton'>ADD</button>
        </form>
        <br/><br/>
        <div className='designingDisplay'>{render}</div>
      </>
    );
  }
  
  export default AttemptingTodo;
  
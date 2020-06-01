import React from 'react';

function TaskList(props) {
  const { data, deleteTask, completeTask } = props;
  return (
    <div>
      {
        data.map(function(todo, i){
          return (
            <div>
              <span>
                todo:
              {todo.taskInput}
              </span>
              <input
                name="completed"
                type="checkbox"
                checked={todo.completed}
                onChange={function(){completeTask(i)}}
              />
              <br/>
              <span>
                due:
              {todo.dueDateInput}
              </span>
              {/*<br/>*/}
              {/*CHECK BOX FUNCTION MUST BE PASSED DOWN BY PARENT*/}

              <button onClick={function(){deleteTask(i)}}>remove</button>
            </div>
          )
        })
      }
    </div>
  );
}

export default TaskList;

import React, {useState} from 'react';
import DailyList from '../data/DailyList.json';
import '../Styles/Day.css';
import moment from 'moment';

export default function Day(props) {

  const [tasksDateDisplayed, setTasksDateDisplayed] = useState(moment().format('l')); 

  const todaysTasks = [];
  for(var i = 0; i<DailyList.length; i++){
      if(moment(DailyList[i].date).format('l') === tasksDateDisplayed){
          for(var j = 0; j<DailyList[i].tasks.length; j++){
              todaysTasks.push(DailyList[i].tasks[j]);
          }
      }
  }

  const getTomorrowsTasks = () => {
      setTasksDateDisplayed(moment(tasksDateDisplayed).add(1, 'days').format('l'))
  }

  const getYesterdaysTasks = () => {
      setTasksDateDisplayed(moment(tasksDateDisplayed).subtract(1, 'days').format('l'))
  }

  return (
    <div className="dayList">
      <i className="pi pi-arrow-left arrow left" onClick={getYesterdaysTasks}></i>
      <i className="pi pi-arrow-right arrow right"  onClick={getTomorrowsTasks}></i>
      {(tasksDateDisplayed === moment().format('l')) ? 
        <h4>Today's Tasks</h4> :
        <h4>{moment(tasksDateDisplayed).format('dddd')}'s Tasks</h4>
      }
      <p className="noMargin">{moment(tasksDateDisplayed).format('l')}</p>
      {todaysTasks.length > 0 ?
        todaysTasks.map(task =>  
          <div key={task.id} className="card taskCard">
            <p className="subheader">Subject: {task.subject}</p>
            <p className="paragraph"><span className="underline"> {task.title}</span>: {task.instructions}</p>
            <p>{task.url}</p>
          </div>)
        : <p>No Tasks Today!</p>
      }
    </div>
  );
}
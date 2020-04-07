import React, { FunctionComponent, useState, useEffect } from 'react';
import {isEmpty} from 'lodash'
import {compose} from 'recompose'
import {Grid} from '@material-ui/core'

import BasicLayout from '../components/BasicLayout'
import Task from '../components/Task'
import CreateTask from '../components/CreateTask'
import {TaskModel} from '../interfaces/TaskModel'
import '../assets/css/HomePage.less'


interface Props {

}


const _Homepage: FunctionComponent<Props> = props => {
  const [tasks, setTasks] = useState([])
  console.log('adam', tasks)
  const setTasks1 = (value) => {
    setTasks(value)
    console.log('done', tasks)
  }
  return (
    <BasicLayout>
      <div className="homepage">
        <div className="upper-section">

          <Grid container spacing={3}>
          </Grid>
          <CreateTask tasks={tasks} setTasks1={setTasks1}/>
        </div>

          <React.Fragment>
            {tasks.map(task => (
              <Task task={task} />
            ))}
          </React.Fragment>

      </div>
    </BasicLayout>
  )
}

export default _Homepage

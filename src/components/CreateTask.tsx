import React, { FunctionComponent} from 'react';
import {Field, Form, Formik} from 'formik'
import {TextField} from 'formik-material-ui'
import {Button, Grid, Tooltip, FormControl} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import {TaskModel} from '../interfaces/TaskModel'

import '../assets/css/CreateTask.less'




interface Props {
  tasks: TaskModel[];
  setTasks1: ((arg0: any) => void);

}


const _CreateTask: FunctionComponent<Props> = props => {
    return (
      <div className="create-task">
        <Formik
          initialValues={{title: "", deadline: ""}}
          onSubmit={(values, {resetForm}) => {
               console.log("values", values)
               console.log("propsTasks", props.tasks)
               const newTasks = props.tasks
               newTasks.push(values)
               props.setTasks1(newTasks)
          }}
        >
          {({handleSubmit}) => (
            <Form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={10}>
                  <FormControl required>
                    <Field
                      type="text"
                      name="title"
                      component={TextField}
                      label={"title"}
                    />
                    <Field
                      type="text"
                      name="deadline"
                      component={TextField}
                      label={"deadline"}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={2}>
                  <Tooltip title={"Add"}>
                    <Button
                      variant="contained"
                      color="secondary"
                      type="submit"
                      size="large"
                    >
                      <AddIcon />
                    </Button>
                  </Tooltip>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
    )

}
export default _CreateTask

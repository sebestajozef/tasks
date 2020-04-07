import React, { FunctionComponent, useState } from 'react'
import {
  Button,
  Modal,
  Box,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { TaskModel } from "../interfaces/TaskModel";




interface Props {
  task: TaskModel,
}

const Task: FunctionComponent<Props> = props => {
  const [detailModalOpen, setDetailModalOpen] = useState(false)

  const handleDetailModalOpen = () => {
    setDetailModalOpen(true)
  }

  const handleDetailModalClose = () => {
    setDetailModalOpen(false)
  }

  return (
    <div className="task">
      <Box
        display="flex"
        alignItems="flex-start"
        p={1}
        m={1}
        bgcolor="background.paper"
        css={{maxWidth: 580}}
      >
        <Box width={'320px'}>{props.task.title}</Box>
        <Box p={1}>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleDetailModalOpen}
            >
              <SearchIcon />
            </Button>
        </Box>
      </Box>
      <Modal
        open={detailModalOpen}
        onClose={handleDetailModalClose}
        className="modal detail-modal"
      >
        <div className="content">
          <p>{props.task.title}</p>
          <p>{props.task.deadline}</p>
          <div className="action-buttons">
            <Button
              autoFocus
              variant="outlined"
              onClick={handleDetailModalClose}
              color="primary"
            >
              OK
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Task

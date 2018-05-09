import React from 'react'
import { Modal } from 'semantic-ui-react'

// Components
import EditGoalForm from './EditGoalForm.jsx'

const EditGoal = props => (
  <div>
    <Modal open={props.open} onClose={props.closeEditForm}>
      <Modal.Header>
          Edit Goal
      </Modal.Header>
      <Modal.Content>
        <EditGoalForm
          close={props.closeEditForm}
          goals={props.goals}
          updatedGoalTitle={props.updatedGoalTitle}
          updatedWeightTarget={props.updatedWeightTarget}
          updatedRepTarget={props.updatedRepTarget}
          updatedMinTarget={props.updatedMinTarget}
          updatedSecsTarget={props.updatedSecsTarget}
          updatedDaysTarget={props.updatedDaysTarget}
          updatedNotes={props.updatedNotes}
          handleEditGoal={props.handleEditGoal}
          handleChange={props.handleChange}
          handleUpdatedStartDateChange={props.handleUpdatedStartDateChange}
          handleUpdatedEndDateChange={props.handleUpdatedEndDateChange}
          handleDropDownChange={props.handleDropDownChange}
          handleUpdatedNotesChange={props.handleUpdatedNotesChange}
          goal={props.goal}
          target={props.target}
          category={props.category}
          updatedStartDate={props.updatedStartDate}
          updatedEndDate={props.updatedEndDate}
          notes={props.notes}
          goalToEdit={props.goalToEdit}
        />
      </Modal.Content>
    </Modal>
  </div>
)

export default EditGoal

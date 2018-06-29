import React, { Component } from 'react'
import { Modal, Button, Icon, Image, Card, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import EditGoal from './EditGoal.jsx'
import EditGoalStartDate from './EditGoalStartDate.jsx'
import EditGoalEndDate from './EditGoalEndDate.jsx'

class Goaltable extends Component {
  constructor () {
    super()

    this.renderGoalImage = this.renderGoalImage.bind(this)
    this.renderWeightGoalTarget = this.renderWeightGoalTarget.bind(this)
    this.renderCardioGoalTarget = this.renderCardioGoalTarget.bind(this)
    this.renderGoalTarget = this.renderGoalTarget.bind(this)
  }

  renderGoalImage (goal) {
    if (goal.category === 'Strength') {
      return (
        <Image src={'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/dumbbell.png'} />
      )
    } else if (goal.category === 'Cardio') {
      return (
        <Image src={'https://cdn2.iconfinder.com/data/icons/sports-recreation/128/running-woman-512.png'} />
      )
    } else if (goal.category === 'Habit') {
      return (
        <Image src={'https://png.icons8.com/metro/1600/checkmark.png'} />
      )
    }
  }

  renderWeightGoalTarget (goal) {
    if (goal.weightTarget && goal.repTarget) {
      return (
        `${goal.weightTarget} lbs. ${goal.repTarget} reps`
      )
    } else if (goal.weightTarget && goal.repTarget === null) {
      return (
        `${goal.weightTarget} lbs.`
      )
    } else if (goal.weightTarget === null && goal.repTarget) {
      return (
        `${goal.repTarget} reps`
      )
    }
  }

  renderCardioGoalTarget (goal) {
    if (goal.minTarget && goal.secsTarget) {
      return (
        `${goal.minTarget}:${goal.secsTarget}`
      )
    } else if (goal.minTarget === null && goal.secsTarget) {
      return (
        `00:${goal.secsTarget}`
      )
    } else if (goal.minTarget && goal.secsTarget === null) {
      return (
        `${goal.minTarget}:00`
      )
    }
  }

  renderGoalTarget (goal) {
    if (goal.category === 'Strength') {
      return (
        this.renderWeightGoalTarget(goal)
      )
    } else if (goal.category === 'Cardio') {
      return (
        this.renderCardioGoalTarget(goal)
      )
    } else if (goal.category === 'Habit') {
      return (
        `${goal.daysTarget} days`
      )
    }
  }

  render () {
    const { goals, userId } = this.props
    return (
      <div>
        <Grid>
          {goals.map((goal) => {
            if (!goal.complete) {
              return (
                <div className="goalcard" key={goal._id}>
                  <br />
                  <Card>
                    {this.renderGoalImage(goal)}
                    <Card.Content>
                      <Card.Header>
                        <Link to={{
                          pathname: `/goal/${goal._id}`,
                          state: { goal, userId }
                        }}
                        >
                          {goal.goals_name}
                        </Link>
                        <Icon className="editgoal" link name="pencil" size="large" onClick={() => this.props.showEditForm('large', goal._id, goal)} />
                        <Icon className="removegoal" link name="remove" size="large" onClick={() => { this.props.showConfirmDeleteModal('large', goal._id) }} />
                      </Card.Header>
                      <Card.Description>
                    Target: {this.renderGoalTarget(goal)}
                      </Card.Description>
                      <Card.Description>
                    Category: {goal.category}
                      </Card.Description>
                      <Card.Description>
                    From: {goal.start_date ? goal.start_date.slice(0, 10) : ''}
                        <Icon className="editgoal" link name="pencil" size="large" onClick={() => this.props.showEditStartDateForm('mini', goal._id, goal)} />
                      </Card.Description>
                      <Card.Description>
                    To: {goal.end_date ? goal.end_date.slice(0, 10) : ''}
                        <Icon className="editgoal" link name="pencil" size="large" onClick={() => this.props.showEditEndDateForm('mini', goal._id, goal)} />
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                  Notes: {goal.notes}
                    </Card.Content>
                  </Card>
      
                  <EditGoal
                    show={this.props.show}
                    open={this.props.open}
                    closeEditForm={this.props.closeEditForm}
                    goal={goal._id}
                    category={this.props.category}
                    handleEditGoal={this.props.handleEditGoal}
                    updatedGoalTitle={this.props.updatedGoalTitle}
                    updatedWeightTarget={this.props.updatedWeightTarget}
                    updatedRepTarget={this.props.updatedRepTarget}
                    updatedMinTarget={this.props.updatedMinTarget}
                    updatedSecsTarget={this.props.updatedSecsTarget}
                    updatedDaysTarget={this.props.updatedDaysTarget}
                    updatedNotes={this.props.updatedNotes}
                    handleChange={this.props.handleChange}
                    handleUpdatedNotesChange={this.props.handleUpdatedNotesChange}
                    handleUpdatedStartDateChange={this.props.handleUpdatedStartDateChange}
                    handleUpdatedEndDateChange={this.props.handleUpdatedEndDateChange}
                    updatedStartDate={this.props.updatedStartDate}
                    updatedEndDate={this.props.updatedEndDate}
                    goalToEdit={this.props.goalToEdit}
                  />
                  <EditGoalStartDate
                    showEditStartDateForm={this.props.showEditStartDateForm}
                    size="mini"
                    openEditStartDateForm={this.props.openEditStartDateForm}
                    closeEditStartDateForm={this.props.closeEditStartDateForm}
                    updatedStartDate={this.props.updatedStartDate}
                    handleUpdatedStartDateChange={this.props.handleUpdatedStartDateChange}
                    handleEditGoalStartDate={this.props.handleEditGoalStartDate}
                  />
                  <EditGoalEndDate
                    showEditEndDateForm={this.props.showEditEndDateForm}
                    size="mini"
                    openEditEndDateForm={this.props.openEditEndDateForm}
                    closeEditEndDateForm={this.props.closeEditEndDateForm}
                    updatedEndDate={this.props.updatedStartDate}
                    handleUpdatedEndDateChange={this.props.handleUpdatedEndDateChange}
                    handleEditGoalEndDate={this.props.handleEditGoalEndDate}
                  />
                  <Modal
                    open={this.props.openConfirm}
                    onClose={this.props.closeCancel}
                  >
                    <Modal.Header>
                    Delete Your Goal
                    </Modal.Header>
                    <Modal.Content>
                      <div>Are you sure you want to delete your goal?</div>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button onClick={() => { this.props.closeCancel() }} color="red" inverted>
                        <Icon name="remove" /> No
                      </Button>
                      <Button onClick={() => { this.props.closeConfirm() }} color="green" inverted>
                        <Icon name="checkmark" /> Yes
                      </Button>
                    </Modal.Actions>
                  </Modal>
                </div>
              )
            }
          })}
        </Grid>
      </div>
    )
  }
}

export default Goaltable

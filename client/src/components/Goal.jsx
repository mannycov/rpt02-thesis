import React, { Component } from 'react'
import moment from 'moment'
import axios from 'axios'

// Components
import GoalTable from './GoalTable.jsx'
import AddGoal from './AddGoal.jsx'

class Goal extends Component {
  constructor (props) {
    super(props)

    this.state = {
      goal: '',
      goalIDtoDelete: '',
      goalIDtoEdit: '',
      goalToEdit: '',
      updatedGoalTitle: '',
      updatedWeightTarget: '',
      updatedRepTarget: '',
      updatedMinTarget: '',
      updatedSecsTarget: '',
      updatedDaysTarget: '',
      updatedNotes: '',
      category: '',
      weightTarget: '',
      repTarget: '',
      minTarget: '',
      secsTarget: '',
      daysTarget: '',
      size: '',
      sizeConfirm: '',
      startDate: moment(),
      endDate: moment(),
      updatedStartDate: moment(),
      updatedEndDate: moment(),
      notes: '',
      complete: false,
      accomplishments: [],
      goals: [],
      open: false,
      openEditForm: false,
      openConfirm: false,
      openEditStartDateForm: false,
      openEditEndDateForm: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleStartDateChange = this.handleStartDateChange.bind(this)
    this.handleUpdatedStartDateChange = this.handleUpdatedStartDateChange.bind(this)
    this.handleEndDateChange = this.handleEndDateChange.bind(this)
    this.handleUpdatedEndDateChange = this.handleUpdatedEndDateChange.bind(this)
    this.handleDropDownChange = this.handleDropDownChange.bind(this)
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this)
    this.handleRemoveGoal = this.handleRemoveGoal.bind(this)
    this.handleEditGoalStartDate = this.handleEditGoalStartDate.bind(this)
    this.handleEditGoalEndDate = this.handleEditGoalEndDate.bind(this)
    this.handleEditGoal = this.handleEditGoal.bind(this)
    this.closeCancel = this.closeCancel.bind(this)
    this.closeConfirm = this.closeConfirm.bind(this)
    this.fetchGoals = this.fetchGoals.bind(this)
    this.close = this.close.bind(this)
    this.closeEditForm = this.closeEditForm.bind(this)
    this.closeEditStartDateForm = this.closeEditStartDateForm.bind(this)
    this.closeEditEndDateForm = this.closeEditEndDateForm.bind(this)
    this.showConfirmDeleteModal = this.showConfirmDeleteModal.bind(this)
    this.show = this.show.bind(this)
    this.showEditForm = this.showEditForm.bind(this)
    this.showEditStartDateForm = this.showEditStartDateForm.bind(this)
    this.showEditEndDateForm = this.showEditEndDateForm.bind(this)
    this.handleUpdatedNotesChange = this.handleUpdatedNotesChange.bind(this)
  }

  componentDidMount () {
    this.fetchGoals()
  }

  handleChange (e, { name, value }) {
    this.setState({
      [name]: value
    })
  }

  handleDropDownChange (e, { value }) {
    this.setState({
      category: value
    })
  }

  handleStartDateChange (date) {
    this.setState({
      startDate: date
    })
  }

  handleUpdatedStartDateChange (date) {
    this.setState({
      updatedStartDate: date
    })
  }

  handleUpdatedEndDateChange (date) {
    this.setState({
      updatedEndDate: date
    })
  }

  handleEndDateChange (date) {
    this.setState({
      endDate: date
    })
  }

  handleTextAreaChange (e, { value }) {
    this.setState({
      notes: value
    })
  }

  handleUpdatedNotesChange (e, { value }) {
    this.setState({
      updatedNotes: value
    })
  }

  handleSubmit () {
    const {
      goal,
      weightTarget,
      repTarget,
      minTarget,
      secsTarget,
      daysTarget,
      category,
      startDate,
      endDate,
      notes,
      complete
    } = this.state
    const { userId } = this.props

    axios
      .post('/api/goal', {
        goal,
        weightTarget,
        repTarget,
        minTarget,
        secsTarget,
        daysTarget,
        category,
        startDate,
        endDate,
        notes,
        complete,
        userId
      })
      .then((response) => {
        this.fetchGoals()
      })
      .catch((error) => {
        console.log(error)
      })

    this.close()

    this.setState({
      goal: '',
      weightTarget: '',
      repTarget: '',
      minTarget: '',
      secsTarget: '',
      daysTarget: '',
      category: '',
      notes: '',
      startDate: moment(),
      endDate: moment()
    })
  }

  handleRemoveGoal (id) {
    axios
      .delete(`/api/goal/${id}`)
      .then((response) => {
        this.fetchGoals()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  handleEditGoalStartDate () {
    const { updatedStartDate, goalIDtoEdit } = this.state
    
    if (updatedStartDate) {
      axios
        .patch(`/api/editgoalstartdate/${goalIDtoEdit}`, {
          updatedStartDate
        })
        .then((response) => {
          this.fetchGoals()
        })
        .catch((error) => {
          console.log(error)
        })
    }

    this.closeEditStartDateForm()

    this.setState({ updatedStartDate: moment() })
  }

  handleEditGoalEndDate () {
    const { updatedEndDate, goalIDtoEdit } = this.state

    if (updatedEndDate) {
      axios
        .patch(`/api/editgoalenddate/${goalIDtoEdit}`, {
          updatedEndDate
        })
        .then((response) => {
          this.fetchGoals()
        })
        .catch((error) => {
          console.log(error)
        })
    }

    this.closeEditEndDateForm()

    this.setState({ updatedEndDate: moment() })
  }

  handleEditGoal () {
    const {
      goalIDtoEdit,
      updatedGoalTitle,
      updatedWeightTarget,
      updatedRepTarget,
      updatedMinTarget,
      updatedSecsTarget,
      updatedDaysTarget,
      updatedNotes
    } = this.state

    if (updatedGoalTitle) {
      axios
        .patch(`/api/editgoaltitle/${goalIDtoEdit}`, {
          updatedGoalTitle
        })
        .then((response) => {
          this.fetchGoals()
        })
        .catch((error) => {
          console.log(error)
        })
    } else if (updatedNotes) {
      axios
        .patch(`/api/editgoalnotes/${goalIDtoEdit}`, {
          updatedNotes
        })
        .then((response) => {
          this.fetchGoals()
        })
        .catch((error) => {
          console.log(error)
        })
    } else if (updatedWeightTarget) {
      axios
        .patch(`/api/editgoalweighttarget/${goalIDtoEdit}`, {
          updatedWeightTarget
        })
        .then((response) => {
          this.fetchGoals()
        })
        .catch((error) => {
          console.log(error)
        })
    } else if (updatedRepTarget) {
      axios
        .patch(`/api/editgoalreptarget/${goalIDtoEdit}`, {
          updatedRepTarget
        })
        .then((response) => {
          this.fetchGoals()
        })
        .catch((error) => {
          console.log(error)
        })
    } else if (updatedMinTarget && updatedSecsTarget) {
      axios
        .patch(`/api/editgoalmintarget/${goalIDtoEdit}`, {
          updatedMinTarget
        })
        .then((response) => {
          this.fetchGoals()
        })
        .catch((error) => {
          console.log(error)
        })

      axios
        .patch(`/api/editgoalsecstarget/${goalIDtoEdit}`, {
          updatedSecsTarget
        })
        .then((response) => {
          this.fetchGoals()
        })
        .catch((error) => {
          console.log(error)
        })
    } else if (updatedMinTarget) {
      axios
        .patch(`/api/editgoalsecstarget/${goalIDtoEdit}`, {
          updatedMinTarget
        })
        .then((response) => {
          this.fetchGoals()
        })
        .catch((error) => {
          console.log(error)
        })
    } else if (updatedSecsTarget) {
      axios
        .patch(`/api/editgoalsecstarget/${goalIDtoEdit}`, {
          updatedSecsTarget
        })
        .then((response) => {
          this.fetchGoals()
        })
        .catch((error) => {
          console.log(error)
        })
    } else if (updatedDaysTarget) {
      axios
        .patch(`/api/editgoaldaystarget/${goalIDtoEdit}`, {
          updatedDaysTarget
        })
        .then((response) => {
          this.fetchGoals()
        })
        .catch((error) => {
          console.log(error)
        })
    }
    this.closeEditForm()

    this.setState({
      updatedGoalTitle: '',
      updatedWeightTarget: '',
      updatedRepTarget: '',
      updatedMinTarget: '',
      updatedSecsTarget: '',
      updatedDaysTarget: '',
      updatedNotes: ''
    })
  }

  fetchGoals () {
    const { userId } = this.props
    axios
      .get(`/api/goal/${userId}`)
      .then((response) => {
        this.setState({
          goals: response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  showConfirmDeleteModal (size, id) {
    this.setState({
      sizeConfirm: size,
      openConfirm: true,
      goalIDtoDelete: id
    })
  }

  show (size) {
    this.setState({
      size,
      open: true
    })
  }

  showEditForm (size, id, goal) {
    this.setState({
      size,
      openEditForm: true,
      goalIDtoEdit: id,
      goalToEdit: goal
    })
  }

  showEditStartDateForm (size, id, goal) {
    this.setState({
      size,
      openEditStartDateForm: true,
      goalIDtoEdit: id,
      goalToEdit: goal
    })
  }

  showEditEndDateForm (size, id, goal) {
    this.setState({
      size,
      openEditEndDateForm: true,
      goalIDtoEdit: id,
      goalToEdit: goal
    })
  }

  closeCancel () {
    this.setState({
      openConfirm: false
    })
  }

  closeConfirm () {
    const { goalIDtoDelete } = this.state
    this.handleRemoveGoal(goalIDtoDelete)
    this.setState({
      openConfirm: false
    })
  }

  closeEditStartDateForm () {
    this.setState({
      openEditStartDateForm: false
    })
  }

  closeEditEndDateForm () {
    this.setState({
      openEditEndDateForm: false
    })
  }

  closeEditForm () {
    this.setState({
      openEditForm: false
    })
  }

  close () {
    this.setState({
      open: false
    })
  }

  render () {
    return (
      <div>

        <br />

        <AddGoal
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleDropDownChange={this.handleDropDownChange}
          handleStartDateChange={this.handleStartDateChange}
          handleEndDateChange={this.handleEndDateChange}
          handleTextAreaChange={this.handleTextAreaChange}
          goal={this.state.goal}
          weightTarget={this.state.weightTarget}
          repTarget={this.state.repTarget}
          minTarget={this.state.minTarget}
          secsTarget={this.state.secsTarget}
          daysTarget={this.state.daysTarget}
          category={this.state.category}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          notes={this.state.notes}
          complete={this.state.complete}
          close={this.close}
          open={this.state.open}
          show={this.show}
          size={this.state.size}
        />

        <br /><br />

        <GoalTable
          goals={this.state.goals}
          category={this.state.category}
          handleRemoveGoal={this.handleRemoveGoal}
          handleEditGoal={this.handleEditGoal}
          handleEditGoalStartDate={this.handleEditGoalStartDate}
          handleEditGoalEndDate={this.handleEditGoalEndDate}
          handleTableCellClick={this.handleTableCellClick}
          handleUpdatedNotesChange={this.handleUpdatedNotesChange}
          handleChange={this.handleChange}
          handleStartDateChange={this.handleStartDateChange}
          handleEndDateChange={this.handleEndDateChange}
          handleUpdatedStartDateChange={this.handleUpdatedStartDateChange}
          handleUpdatedEndDateChange={this.handleUpdatedEndDateChange}
          updatedGoalTitle={this.state.updatedGoalTitle}
          updatedWeightTarget={this.state.updatedWeightTarget}
          updatedRepTarget={this.state.updatedRepTarget}
          updatedMinTarget={this.state.updatedMinTarget}
          updatedSecsTarget={this.state.updatedSecsTarget}
          updatedDaysTarget={this.state.updatedDaysTarget}
          updatedNotes={this.state.updatedNotes}
          updatedStartDate={this.state.updatedStartDate}
          updatedEndDate={this.state.updatedEndDate}
          renderModal={this.renderModal}
          openConfirm={this.state.openConfirm}
          closeCancel={this.closeCancel}
          closeConfirm={this.closeConfirm}
          showEditForm={this.showEditForm}
          open={this.state.openEditForm}
          closeEditForm={this.closeEditForm}
          showEditStartDateForm={this.showEditStartDateForm}
          openEditStartDateForm={this.state.openEditStartDateForm}
          closeEditStartDateForm={this.closeEditStartDateForm}
          showEditEndDateForm={this.showEditEndDateForm}
          openEditEndDateForm={this.state.openEditEndDateForm}
          closeEditEndDateForm={this.closeEditEndDateForm}
          showConfirmDeleteModal={this.showConfirmDeleteModal}
          size={this.state.sizeConfirm}
          goalIDtoEdit={this.goalIDtoEdit}
          goalToEdit={this.state.goalToEdit}
          renderDates={this.renderDates}
          userId={this.props.userId}
        />

      </div>
    )
  }
}

export default Goal

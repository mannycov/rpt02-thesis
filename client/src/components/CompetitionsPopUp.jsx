import React from 'react'
import { Popup, Menu, Grid } from 'semantic-ui-react'
import CompetitionsList from './CompetitionsList.jsx'

const CompetitionsPopUp =
({
  goals, competitionsHandleClick, isHidden, Data
}) => {
  return (
    <Popup
      trigger={
        <Menu.Header onClick={() => competitionsHandleClick(isHidden)}>
          Competitions
        </Menu.Header>
      }
      flowing
      hoverable
    >
      <Grid
        columns={1}
        onClick={() => competitionsHandleClick(isHidden)}
        centered
        divided
      >
        {/* {Data.map((competition) => {
          return (
            <CompetitionsList
              key={competition._id}
              competitionName={competition}
            />)
        })} */}
      </Grid>
    </Popup>
  )
}

export default CompetitionsPopUp

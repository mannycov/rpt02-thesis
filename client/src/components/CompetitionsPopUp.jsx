import React from 'react'
import { Link } from 'react-router-dom'
import { Popup, Menu, Grid } from 'semantic-ui-react'
import Data from '../../FakeData'
import CompetitionsList from './CompetitionsList.jsx'
import CompetitionsFullPage from './CompetitionsFullPage.jsx'

const CompetitionsPopUp = ({ goals, competititonsHandleClick, isHidden}) => {
  console.log('props in the competitions popup', competititonsHandleClick)
  return(
    <Popup
      trigger={
        <Menu.Header onClick={() => competititonsHandleClick(isHidden)}>
          Competitions
        </Menu.Header>
      }
      flowing hoverable>
      <Grid
        onClick={() => competititonsHandleClick(isHidden)}
        centered divided columns={Data.length}>
        {Data.map((competition) => {
          return <CompetitionsList key={competition.id} competitionName={competition} />;
        })}
      </Grid>
    </Popup>
  )
};

export default CompetitionsPopUp

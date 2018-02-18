import React from 'react'
import { Header, Image, Grid, Segment, Statistic } from 'semantic-ui-react'
import CompetitionsFriendsRank from './CompetitionsFriendsRank.jsx'
import CompetitionsFullPageList from './CompetitionsFullPageList.jsx'
import CreateCompetition from './CreateCompetition.jsx'
import MenuBar from './MenuBar.jsx'

const CompetitionsFullPage = ({
  Data,
  isHidden,
  goals,
  compName,
  compCat,
  compStart,
  compEnd,
  handleCompName,
  handleCompCat,
  handleCompStartSave,
  compStartSaveClick,
  handleCompEndSave,
  compEndSaveClick,
  handleStartChange,
  handleEndChange,
  competitionsSubmit,
  m
}) => {
  return (
    <div>
      <MenuBar />
      <Header as="h2">{console.log('checking all props in comp full page', compName, compCat, compStart, compEnd)}
        <Image
          circular
          src="https://react.semantic-ui.com/assets/images/avatar/large/patrick.png"
        />{' '}
        My Competitions
      </Header>
      <Segment clearing>
        <Statistic.Group widths="three">
          <CreateCompetition
            isHidden={isHidden}
            compName={compName}
            compCat={compCat}
            compStart={compStart}
            compEnd={compEnd}
            handleCompName={handleCompName}
            handleCompCat={handleCompCat}
            handleCompStartSave={handleCompStartSave}
            compStartSaveClick={compStartSaveClick}
            handleCompEndSave={handleCompEndSave}
            compEndSaveClick={compEndSaveClick}
            handleStartChange={handleStartChange}
            handleEndChange={handleEndChange}
            competitionsSubmit={competitionsSubmit}
            m={m}
          />
          <Statistic>
            <Statistic.Value>
              {!Data.competitions_won ? 0 + '   ' : Data.competitions_won }
              <i className="flag checkered icon" />
            </Statistic.Value>
            <Statistic.Label>{`Competitions    Won`}</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>
              {!Data.trophies ? 0 + '   '   : Data.trophies }
              <Image
                src="https://st2.depositphotos.com/4326917/10312/v/450/depositphotos_103125822-stock-illustration-champions-cup-line-vector-icon.jpg"
                className="circular inline"
              />
            </Statistic.Value>
            <Statistic.Label>Trophies</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </Segment>
      {Data.map((CompetitionsFp) => {
        return (
          <CompetitionsFullPageList
            key={CompetitionsFp._id}
            CompetitionsFp={CompetitionsFp}
          />
        )
      })}
    </div>
  )
}

export default CompetitionsFullPage
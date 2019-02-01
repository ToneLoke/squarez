import React, { useContext } from 'react'
import Matches from './matches'
import Settings from './settings'
import User from './user'
import { GameSetupContext, actions } from './common'

import './Setup.scss'

const Setup = () => {
  const { dispatch } = useContext(GameSetupContext)

  const handleSubmit = () => dispatch({ type: actions.SUBMIT_GAME, payload: null })

  return (
    <div className="setup">
      <div className="container">
        <Matches />
        <Settings />
        <User />
        <div onClick={handleSubmit} role="button">Create SQuares</div>
      </div>
    </div>
  )
}

export default Setup

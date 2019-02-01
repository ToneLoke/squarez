import React, { useContext } from 'react'
import Matches from './matches'
import Steps from './stepper'
import Settings from './settings'
import User from './user'
import Board from '../board'
import { GameSetupContext, actions } from './SetupContext'

import './Setup.scss'

const Setup = () => {
  // Import the store
  const { state, dispatch } = useContext(GameSetupContext)
  const { step } = state;
  const { step: { NEXT_STEP } } = actions;
  const setStep = payload => dispatch({ type: NEXT_STEP, payload })

  const steps = {
    matches: <Matches />,
    preview: <Board />,
    settings: <Settings />,
    host: <User />,
  }

  return (
    <div className="setup">
      <div className="container">{steps[step]}</div>
      <Steps step={step} onChange={setStep} />
    </div>
  )
}

export default Setup

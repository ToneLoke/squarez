import React, { useState, useEffect, useContext } from 'react'
import Matches from './matches'
import Settings from './settings'
import User from '../squares-core/components'
import { helpers, StaticContext } from '../../common';


import './Setup.scss'

const { getWeeklyMatches } = helpers;

const Setup = () => {
  const [matches, setMatches] = useState([])
  const data = useContext(StaticContext)

  // const handleSubmit = () => store.dispatch({ type: actions.SUBMIT_GAME, payload: null })
  // const setMatches = matches => store.dispatch({ type: actions.SET_HOST, payload: matches })

  useEffect(() => {
    if (!data || !data.matches) {
      getWeeklyMatches().then((data) => {
        const { matches: { week: { games } } } = data;
        setMatches(games)
      })
    }
  }, [])

  return (
    <div className="setup">
      <div className="container">
        <div role="button">Create SQuares</div>
        <Settings />
        <Matches games={matches} />
      </div>
    </div>
  )
}

export default Setup

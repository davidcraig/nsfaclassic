import React from 'react'
import PageWithWidgets from '../Components/PageWithWidgets'
import logs from '../data/shadowlands/logs'

export default function CombatLogs() {
  return <PageWithWidgets title='Combat Logs'>
    <h1 className='h1'>Combat Logs</h1>
    <table className='table is-narrow is-striped'>
      <thead>
        <tr>
          <th>Date</th>
          <th>Raid</th>
          <th>Kills</th>
          <th>Pulls</th>
          <th>Links</th>
          <th>Progression?</th>
        </tr>
      </thead>
      <tbody>
      {
        logs.map(log => {
          return <tr>
            <td>{log.dateHuman}</td>
            <td>{log.raid.zone} [{log.raid.difficulty}]</td>
            <td>{log.kills}</td>
            <td>{log.pulls}</td>
            <td>
              <a target='_blank' href={log.wcl()}>
                WCL
              </a>, <a target='_blank' href={log.wa()}>
                WowAnalyzer
              </a>, <a target='_blank' href={log.wf()}>
                Wipefest
              </a>
            </td>
            <td>{log.progression}</td>
          </tr>
        })
      }
      </tbody>
    </table>
  </PageWithWidgets>
}

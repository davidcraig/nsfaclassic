export default function leaderboardTable({ leaderboard, metric }) {
  return (
    <table className='table is-narrow'>
      {leaderboard.map(entry => {
        return <tr className={`fg-${entry.css}`}>
          <td>{entry.character}</td>
          <td>{entry[metric]}</td>
        </tr>
      })}
    </table>
  )
}

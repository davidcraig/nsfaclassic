import PageWithWidgets from '../../Components/PageWithWidgets'

const faq = [
  {
    q: 'How much soul ash do you get per torghast?',
    a: <table className='table is-narrow'>
      <tbody>
        <tr><th>Layer</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th></tr>
        <tr><td>Soul Ash</td>
          <td>120</td>
          <td>220</td>
          <td>305</td>
          <td>375</td>
          <td>435</td>
          <td>485</td>
          <td>530</td>
          <td>570</td>
        </tr>
      </tbody>
    </table>
  },
  {
    q: 'How much soul ash to buy/upgrade legendaries?',
    a: <table className='table is-narrow'>
    <tbody>
      <tr>
        <td>190</td>
        <td>1250</td>
      </tr>
      <tr>
        <td>210</td>
        <td>2000 [190-210: 750]</td>
      </tr>
      <tr>
        <td>225</td>
        <td>3200 [190-225: 1950], [210-225: 1200]</td>
      </tr>
      <tr>
        <td>235</td>
        <td>5150 [190-235: 3900], [210-235: 3150], [225-235: 1950]</td>
      </tr>
    </tbody>
  </table>
  }
]

export default function FAQPage() {
  return <PageWithWidgets title='FAQ'>
    <h1 className='h1'>FAQ</h1>
    {
      faq.map(qa => {
        return (
          <>
          <p className='question'>{qa.q}</p>
          {qa.a}
          </>
        )
      })
    }
  </PageWithWidgets>
}

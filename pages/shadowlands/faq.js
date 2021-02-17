import React from 'react'
import PageWithWidgets from '../../Components/PageWithWidgets'

const ctr = 'has-text-centered'

const faq = [
  {
    q: 'How much soul ash do you get per torghast?',
    a: <table className='table is-narrow is-striped-columns'>
      <tbody>
        <tr>
          <th>Layer</th>
          <th className={ctr}>1</th>
          <th className={ctr}>2</th>
          <th className={ctr}>3</th>
          <th className={ctr}>4</th>
          <th className={ctr}>5</th>
          <th className={ctr}>6</th>
          <th className={ctr}>7</th>
          <th className={ctr}>8</th>
        </tr>
        <tr>
          <td>Soul Ash</td>
          <td className={ctr}>120</td>
          <td className={ctr}>220</td>
          <td className={ctr}>305</td>
          <td className={ctr}>375</td>
          <td className={ctr}>435</td>
          <td className={ctr}>485</td>
          <td className={ctr}>530</td>
          <td className={ctr}>570</td>
        </tr>
      </tbody>
    </table>
  },
  {
    q: 'How much soul ash to buy/upgrade legendaries?',
    a: <table className='table is-narrow is-striped'>
      <thead>
        <tr>
          <td>Existing?:</td>
          <td className={ctr}>0</td>
          <td className={ctr}>190</td>
          <td className={ctr}>210</td>
          <td className={ctr}>225</td>
          <td className={ctr}>235</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>190</td>
          <td className={ctr}>1250</td>
          <td className={ctr}>-</td>
          <td className={ctr}>-</td>
          <td className={ctr}>-</td>
          <td className={ctr}>-</td>
        </tr>
        <tr>
          <td>210</td>
          <td className={ctr}>2000</td>
          <td className={ctr}>750</td>
          <td className={ctr}>-</td>
          <td className={ctr}>-</td>
          <td className={ctr}>-</td>
        </tr>
        <tr>
          <td>225</td>
          <td className={ctr}>3200</td>
          <td className={ctr}>950</td>
          <td className={ctr}>1200</td>
          <td className={ctr}>-</td>
          <td className={ctr}>-</td>
        </tr>
        <tr>
          <td>235</td>
          <td className={ctr}>5150</td>
          <td className={ctr}>3900</td>
          <td className={ctr}>3150</td>
          <td className={ctr}>1950</td>
          <td className={ctr}>-</td>
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
          <div className='answer'>
            {qa.a}
          </div>
          </>
        )
      })
    }
  </PageWithWidgets>
}

import Head from 'next/head'
import { Column, Columns, TabbedContent } from '@davidcraig/react-bulma'
import PageWithWidgets from '../../Components/PageWithWidgets'

const faq = [
  {
    q: 'How much soul ash do you get per torghast?',
    a: <table className='table'>
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
          <td>?</td>
        </tr>
      </tbody>
    </table>
  }
]

export default function FAQPage() {
  return <PageWithWidgets>
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

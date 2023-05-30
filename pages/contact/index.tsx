import Link from 'next/link'
import { MainLayout } from '../../components/Layouts/MainLayout'


export default function ContactPage(){
  return (
    <MainLayout>
      <h1> Contact Page </h1>
      <h1 className={'title'}>
        {/* Go on <a href="/">Home</a> */}
        Go on <Link href="/"> Home </Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/contact/index.js</code>
      </p>
    </MainLayout>
  )
}

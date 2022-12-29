import Head from 'next/head';
import { Resume } from '../components/Resume';

const Page = () => {
  return (
    <div className="p-12 bg-white">
      <Head>
        <script src="https://cdn.tailwindcss.com" />
      </Head>
      <Resume />
    </div>
  )

}


export default Page
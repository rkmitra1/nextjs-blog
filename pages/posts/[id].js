import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'


export async function getStaticProps({params}) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export default function Post( {postData }) {
  return <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article className="w-2/3 flex justify-center mx-auto">
        <div>
          <h1 className="text-2xl">{postData.title}</h1>
          <div className='text-blue-200'>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </article>

  </Layout>
}
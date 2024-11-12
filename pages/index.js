import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Jesse, Jesse, they uploaded me to the Next.js tutorial site and put me in a blubble. You have to help me Jesse.</p>
        <p>
          You need to act fast, I don't know how much longer I have, this freak just ran up to me
          and started spewing nonsense, then he burst into flames. I developed an <Link href = 'https://tr01ler.github.io/'>interactive website</Link> emulating
          what happened Jesse. Don't worry Jesse, it doesn't use Next.js.
        </p>
        <p>Jesse I'm afraid this may be it for me.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>The writings of truth</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
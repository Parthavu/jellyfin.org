import React, { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Hero from '../../../src/components/common/Hero';
import blogPosts from '../../../.docusaurus/docusaurus-plugin-content-blog/developers-blog/blog-post-list-prop-developers-blog.json';

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className='col col--4 margin-bottom--md'>
      <h2 className='margin-top--lg'>{title}</h2>
      {children}
    </div>
  );
}

function DocsHighlights() {
  return (
    <Section title='Documentation'>
      <ul>
        <li>
          <Link to='#'>Using the REST API</Link>
        </li>
        <li>
          <Link to='#'>Creating a server plugin</Link>
        </li>
      </ul>
    </Section>
  );
}

function RecentBlogPosts() {
  return (
    <Section title={blogPosts.title}>
      <ul>
        {blogPosts.items.slice(0, 5).map((item, index) => (
          <li key={index}>
            <a href={`${item.permalink}`}>{item.title}</a>{' '}
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Index() {
  return (
    <Layout title={`Jellyfin developers`}>
      <Hero title='Jellyfin Developers'>
        <p className='hero__text margin-vert--lg'>Get started developing with Jellyfin.</p>{' '}
        <div className='hero__buttons'>
          <Link to='/downloads/server' className='button button--lg button--primary'>
            Get started
          </Link>
        </div>
      </Hero>
      <main>
        <section className='container'>
          <div className='row'>
            <DocsHighlights />
            <RecentBlogPosts />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Index;

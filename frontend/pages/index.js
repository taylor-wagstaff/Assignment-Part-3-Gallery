import Link from 'next/link'
import groq from 'groq'
import client from '../client'

// I followed the turorial to setup and create a NextJs Sanity Blog Template
// https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js

const Home = ({ posts }) => {
  const organizedPosts = {}
  posts.forEach((post) => {
    post.categories.forEach((category) => {
      if (!organizedPosts[category.title]) {
        organizedPosts[category.title] = []
      }
      organizedPosts[category.title].push(post)
    })
  })

  const categoryOrder = ['Current', 'Upcoming', 'Past']
  const sortedCategoryKeys = Object.keys(organizedPosts).sort(
    (a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b)
  )

  return (
    <div className="grid-container">
      <div>
        <header className="header_title">
          <h1>My Gallery Title</h1>
        </header>
        <nav className="header_nav">
          <ul className="header_links">
            <li>
              <Link href="/">Exhibitions</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="exhibitions-container">
        {sortedCategoryKeys.map((categoryTitle) => (
          <div key={categoryTitle}>
            <p className="category_title">{categoryTitle}</p>
            <ul className="exhibitions-list">
              {organizedPosts[categoryTitle].map(
                ({ _id, title, slug, authorName, opens }) => (
                  <li key={_id}>
                    <Link
                      className="title-links"
                      href="/post/[slug]"
                      as={`/post/${slug.current}`}
                    >
                      {authorName && <div>{authorName}</div>}
                      {title}
                      {opens && <div>{opens}</div>}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()]{
        _id,
        title,
        slug,
        opens,
        publishedAt,
        "authorName": author->name, 
        categories[]->{
          title
        }
      } | order(publishedAt desc)
    `)

  return {
    props: {
      posts,
    },
  }
}

export default Home

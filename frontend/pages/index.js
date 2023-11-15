import Link from 'next/link'
import groq from 'groq'
import client from '../client'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'


// I followed the turorial to setup and create a NextJs Sanity Blog Template
// https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js

const Home = ({ posts }) => {
  // JS Function to organise the categories correctly,
  // so that Current starts first, followed by Upcoming and past.
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
      <Header />
      <Navigation />
      <main className="exhibitions-container">
        {sortedCategoryKeys.map((categoryTitle) => (
          <div className="exhibition-elements" key={categoryTitle}>
            <div className="elements-title">
              <p className="category_title">{categoryTitle}</p>
            </div>
            <div className="exhibition-elements-list">
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
          </div>
        ))}
      </main>
      <Footer />
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

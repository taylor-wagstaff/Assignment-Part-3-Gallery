// [slug].js
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import client from '../../client'

import { useRouter } from 'next/router'
import Link from 'next/link'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'

// I followed the turorial to setup and create a NextJs Sanity Blog Template
// https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js

function urlFor(source) {
  return imageUrlBuilder(client).image(source).auto('format').url()
}

const ptComponents = {
  types: {
    image: ({ value }) => {

      // interactive Js Function to click image for closer look, 
      // Creates new window, couldnt figure out zoom for sanity images

      // Set an onClick listener on an Image in React
      // https://bobbyhadz.com/blog/react-onclick-on-image
      const handleClick = (event, imageUrl) => {
        event.preventDefault()
        // change the url in the window for a closer look at the image
        window.location.href = imageUrl
      }

      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          onClick={(event) => handleClick(event, urlFor(value))}
          loading="lazy"
          src={urlFor(value)}
          onMouseOver={(e) => (e.currentTarget.style.cursor = 'pointer')}
          onMouseOut={(e) => (e.currentTarget.style.cursor = 'default')}
        />
      )
    },
  },
}

const Post = ({ post }) => {
  const router = useRouter()



  const {
    title = 'Missing title',
    name = 'Missing name',
    opens = 'Missing Date',
    press,
    body = [],
  } = post
  // added fallback if data not rendered
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div className="grid-container">
      <Header />
      <Navigation />

      <div className="exhibition_content">
        {/* change the access to object directly */}
        <div>
          <p>{post.title}</p>
          <p>{post.name}</p>
          <p>{post.opens}</p>
          {press && (
            <a href={press} target="_blank" rel="noopener noreferrer">
              Exhibition Text
            </a>
          )}
        </div>
        <div className="exhibition_images">
          <PortableText value={body} components={ptComponents} />
        </div>
      </div>

      <Footer />
    </div>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  opens,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  "press": press.asset->url,
  body
}`
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.params
  const post = await client.fetch(query, { slug })

  return {
    props: {
      post,
    },
  }
}
export default Post

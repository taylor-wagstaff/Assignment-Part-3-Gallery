// client.ts
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'dxmjn3yh', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  apiVersion: '2023-11-08',
  useCdn: true, // `false` if you want to ensure fresh data
})

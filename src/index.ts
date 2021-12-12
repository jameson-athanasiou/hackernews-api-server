import Hapi from '@hapi/hapi'
import StoriesRequest from './request/Stories'
import ItemRequest from './request/Item'

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
    debug: { request: ['error'] },
  })

  server.route({
    method: 'GET',
    path: '/stories',
    handler: async () => {
      try {
        const stories = await new StoriesRequest().getStories().makeGet()
        const topStories = stories.data.slice(0, 2)
        const results = await Promise.all(
          topStories.map((storyId: string) => new ItemRequest().getItem(storyId).makeGet())
        )
        return JSON.stringify(results.map(({ data }) => data))
      } catch (e) {
        console.error(e)
        return { status: 'failed' }
      }
    },
  })

  await server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()

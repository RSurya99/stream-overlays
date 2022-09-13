import {Client} from '@notionhq/client'

const client = new Client({
  auth: process.env.NOTION_API_KEY,
})

export async function getLatestStreams() {
  const streamDetails: any = await client.databases.query({
    database_id: `${process.env.NOTION_DATABASE_ID}`,
    filter: {
      property: 'Current Stream',
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
    page_size: 1,
  })
  return streamDetails
}
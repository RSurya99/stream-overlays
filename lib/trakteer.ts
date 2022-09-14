import { Client } from 'trakteerjs'
import * as React from "react"

const pageId: string | undefined = process.env.TRAKTEER_PAGE_ID
const streamKey: `trstream-${string}` = `trstream-${process.env.TRAKTEER_STREAM_KEY || '---'}`
const client = new Client(pageId, streamKey)

// export function useTrakteerWebsocket(){
//     const [donation, setDonation] = React.useState<any>()
//     const [leaderboard, setLeaderboard] = React.useState<any>()
//     const [goal, setGoal] = React.useState<any>()
//     const [supporter, setSupporter] = React.useState<any>()
    
//     React.useEffect(() => { 
//         console.log('Trakteer test')
//         client.on("connect", (timestamp)=> {
//             console.log('Trakteer Connected on ' + timestamp)
//         })

//         client.on("disconnect", (timestamp) => {
//             console.log('Trakteer Disconnected on ' + timestamp)
//         })

//         client.on("donation", (donation)=>{
//             setDonation(donation)
//             console.log('Trakteer donation', donation)
//             /*
//                 {
//                     tip_id:"id",
//                     supporter_name:"Supporter name",
//                     unit:"Unit name",
//                     quantity:1,
//                     supporter_message:"Supporter message",
//                     supporter_avatar:"Avatar url",
//                     unit_icon:"Unit icon url",
//                     price:"Rp 1.0000",
//                     id: "Id", //unknown use
//                     type: "new_tip" // No use for now.
//                 }
//             */
//         })

//         client.getLeaderboard().then(result=>{
//             setLeaderboard(result)
//             console.log('Trakteer getLeaderboard', result)
//             /*
//             {
//                 pageUrl: 'trakteer.id/PageID',
//                 unitIcon: 'https://trakteer.id/storage/images/units/uic-xxx.png',
//                 unitName: 'My Unit name!',
//                 supporter: [
//                     { supporter_name: '', avatar: null, sum: 69 },
//                     {
//                         supporter_name: 'BbayuGt',
//                         avatar: 'https://lh3.googleusercontent.com/a-/AOh14Gi45Ig9QTQozpqkD_SgPcB190KAwStLhex1Y-CT5w=s96-c',
//                         sum: 420
//                     }
//                 ]
//             }
//             */
//         })

//         client.getGoal().then(result=>{
//             setGoal(result)
//             console.log('Trakteer getGoal', result)
//             /*
//                 {
//                     target: { current: 69000, target: 420000, progress: 69.420 },
//                     title: 'Goal Title',
//                     url: 'trakteer.id/YourPageID'
//                 }
//             */
//         })

//         client.getSupporter().then((result)=> {
//             setSupporter(result)
//             console.log('Trakteer getSupporter', result)
//             /*
//                 [
//                     {
//                         display_name: 'Name #1',
//                         support_message: 'Hello!!',
//                         quantity: 12
//                     },
//                     {
//                         display_name: 'Name #2',
//                         support_message: 'Sup!',
//                         quantity: 10
//                     }
//                 ]
//             */
//         })
//     }, [])

//     return [ donation, leaderboard, goal, supporter ]
// }

export function useTrakteerWebsocket(){
//   const [donation, setDonation] = React.useState<any>()
//   const [leaderboard, setLeaderboard] = React.useState<any>()
//   const [goal, setGoal] = React.useState<any>()
//   const [supporter, setSupporter] = React.useState<any>()

  console.log('Trakteer test')
  client.on("connect", (timestamp)=> {
      console.log('Trakteer Connected on ' + timestamp)
  })

  client.on("disconnect", (timestamp) => {
      console.log('Trakteer Disconnected on ' + timestamp)
  })

//   client.on("donation", (donation)=>{
//       setDonation(donation)
//       console.log('Trakteer donation', donation)
//       /*
//           {
//               tip_id:"id",
//               supporter_name:"Supporter name",
//               unit:"Unit name",
//               quantity:1,
//               supporter_message:"Supporter message",
//               supporter_avatar:"Avatar url",
//               unit_icon:"Unit icon url",
//               price:"Rp 1.0000",
//               id: "Id", //unknown use
//               type: "new_tip" // No use for now.
//           }
//       */
//   })

//   client.getLeaderboard().then(leaderboard=>{
//       setLeaderboard(leaderboard)
//       console.log('Trakteer getLeaderboard', leaderboard)
//       /*
//       {
//           pageUrl: 'trakteer.id/PageID',
//           unitIcon: 'https://trakteer.id/storage/images/units/uic-xxx.png',
//           unitName: 'My Unit name!',
//           supporter: [
//               { supporter_name: '', avatar: null, sum: 69 },
//               {
//                   supporter_name: 'BbayuGt',
//                   avatar: 'https://lh3.googleusercontent.com/a-/AOh14Gi45Ig9QTQozpqkD_SgPcB190KAwStLhex1Y-CT5w=s96-c',
//                   sum: 420
//               }
//           ]
//       }
//       */
//   })

//   client.getGoal().then(goal=>{
//       setGoal(goal)
//       console.log('Trakteer getGoal', goal)
//       /*
//           {
//               target: { current: 69000, target: 420000, progress: 69.420 },
//               title: 'Goal Title',
//               url: 'trakteer.id/YourPageID'
//           }
//       */
//   })

//   client.getSupporter().then((supporter)=> {
//       setSupporter(supporter)
//       console.log('Trakteer getSupporter', supporter)
//       /*
//           [
//               {
//                   display_name: 'Name #1',
//                   support_message: 'Hello!!',
//                   quantity: 12
//               },
//               {
//                   display_name: 'Name #2',
//                   support_message: 'Sup!',
//                   quantity: 10
//               }
//           ]
//       */
//   })
  
  return { donation, leaderboard, goal, supporter }
}
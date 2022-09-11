import * as React from "react"
import ReconnectingWebSocket from "reconnecting-websocket"

interface GameplayData {
  [key: string]: any
}

export function useGosumemory() {
  const [gameplayData, setGameplayData] = React.useState<GameplayData>()
  const [menu, setMenu] = React.useState<any>()

  React.useEffect(() => {
    const socket = new ReconnectingWebSocket("ws://127.0.0.1:24050/")
    socket.onopen = () => console.log("Successfully Connected")

    socket.onclose = (event) => {
      // console.log("Socket Closed Connection: ", event)
      socket.send("Client Closed!")
    }

    socket.onmessage = (event) => {
      try {
        let data = JSON.parse(event.data)
        setGameplayData(data.gameplay)
        setMenu(data.menu)
      } catch (err) {
        console.log(err)
      }
    }
  }, [])

  return [ gameplayData, menu ]
}

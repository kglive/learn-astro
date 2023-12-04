import React, { useState } from 'react'

export default function Greeting({ message = ["Hi", "Hello", "Howdy", "Hey there"] }) {
  const randomMessage = () =>
    message[Math.floor(Math.random() * message.length)]
  const [greeting, setGreeting] = useState(message[0])

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(randomMessage())}>New Greeting</button>
    </div>
  )
}

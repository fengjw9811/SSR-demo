import React from 'react'

const Home = () => {
  const handleClick = () => {
    console.log('我被点击了')
  }
  return (
    <div>
      我是首页 <button onClick={handleClick}>点我</button>
    </div>
  )
}

export default Home

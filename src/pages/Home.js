import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet'
import { fetchHomeData } from '../store/actions/home'

const Home = () => {
  const dispatch = useDispatch()
  const homeData = useSelector(state => state.home)
  const handleClick = () => {
    console.log('我被点击了')
  }

  useEffect(() => {
    dispatch(fetchHomeData)
  }, [])

  const renderHead = () => {
    return (
      <Helmet>
        <title>首页</title>
      </Helmet>
    )
  }

  return (
    <div>
      {renderHead()}
      <h1>主页</h1>
      <ul>
        {
          homeData?.articals?.map(artical => (
            <li key={artical?.id}>
              <p>文章标题: {artical?.title}</p>
              <p>文章标题: {artical?.content}</p>
            </li>
          ))
        }
      </ul>
      <button onClick={handleClick}>点我</button>
    </div>
  )
}

Home.getInitialData = async (store) => {
  return store.dispatch(fetchHomeData)
}

export default Home

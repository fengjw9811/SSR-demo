import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet'
import { fetchPersonalData } from '../store/actions/personal'

const Personal = () => {
  const dispatch = useDispatch()
  const personalData = useSelector(state => state.personal)

  useEffect(() => {
    dispatch(fetchPersonalData)
  }, [])

  const renderHead = () => {
    return (
      <Helmet>
        <title>个人中心页</title>
      </Helmet>
    )
  }
  return <div>
    {renderHead()}
    <h1>个人中心页</h1>
    <p>名称：{personalData?.userInfo?.username}</p>
    <p>职业：{personalData?.userInfo?.job}</p>
  </div>
}

Personal.getInitialData = async (store) => {
  return store.dispatch(fetchPersonalData)
}

export default Personal

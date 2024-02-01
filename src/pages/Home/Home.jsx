import React from 'react'
import MainPage from '../../components/MainPage/MainPage'
import About from '../../components/About/About'
import CompanyList from '../../components/CompanyList/CompanyList'
import Team from '../../components/Team/Team'
import Goals from '../../components/Goals/Goals'

export default function Home() {
  return (
    <div>
      <MainPage/> 
      <About/> 
      <CompanyList/> 
      <Team/>
      <Goals/>

    </div>
  )
}

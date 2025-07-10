import React from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserList from './components/UserList'
import ProductList from './components/ProductList'
import Person from './components/Person'
import Product from './components/Product'
import Weather from './components/Weather'
import UserStatus from './components/UserStatus'
import Greeting from './components/Greeting'
import StyleCard from './components/StyleCard'
import ProfileCard from './components/ProfileCard'
import IconComponent from './components/IconComponent'

function App() {
  return (
    <div>  
      
    {/* <Header />
    <MainContent />
    <Footer /> */}
    {/* <UserList />
    <ProductList /> */}
    {/* <Person name="Jatin" age={22} />
    <Product name="Jatin2" age={23} /> */}

    {/* weather component */}
    {/* <Weather /> */}
  

    {/*userstatus component */}
    {/* <UserStatus loggedIn={"true"} isAdmin={"false"} /> */}
    {/* <UserStatus loggedIn={"false"} /> */}

    {/* greeting component */}
      {/* <Greeting timeOfDay={"morning"} /> */}
      {/* <Greeting timeOfDay={"afternoon"} /> */}



      <StyleCard />
      <ProfileCard />
      <IconComponent />
    </div>
  )
}

export default App
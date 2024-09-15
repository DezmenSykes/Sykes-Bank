import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const user = {firstName: "Dezmen", lastName: "Sykes"}
  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
               <HeaderBox 
                type="greeting"
                title="Welcome"
                user={user?.firstName || "Guest"}
                subtext="Access and manage your accounts and transactions."
               />
               <TotalBalanceBox 
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1250.23}
               />
            </header>
        </div>
    </section>
  )
}

export default Home
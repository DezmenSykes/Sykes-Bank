import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { emit } from 'process'
import React from 'react'

const Home = () => {
    const user = {firstName: "Dezmen", lastName: "Sykes", email: 'dsykes@sykescreatives.net'}
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

            RECENT TRANSACTIONS
        </div>
        <RightSidebar 
            user={user}
            transactions={[]}  
            banks={[{currentBalance: 1250.23}, { currentBalance: 2344.12 }]}
        />
    </section>
  )
}

export default Home
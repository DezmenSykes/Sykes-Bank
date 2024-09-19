import HeaderBox from '@/components/HeaderBox'
import RecentTransactions from '@/components/RecentTransactions'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getAccount, getAccounts } from '@/lib/actions/banks.actions'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import { emit } from 'process'
import React from 'react'

const Home = async ({searchParams: {id, page}}: SearchParamProps) => {
    const currentPage = Number(page as string) || 1
    const user = await getLoggedInUser()
    console.log(user)

    const accounts = await getAccounts({userId: user?.$id})

    if(!accounts) return;


    const accountsData = accounts?.data; 
    const appwriteItemId = (id as string)|| accountsData[0]?.appriteItemId;

    const account = await getAccount({appwriteItemId});

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
                accounts={accountsData}
                totalBanks={accounts?.totalBanks}
                totalCurrentBalance={accounts?.totalCurrentBalance}
               />
            </header>

            <RecentTransactions 
              accounts={accountsData}
              transactions={account?.transactions}
              appwriteItemId={appwriteItemId}
              page={page}
            />
        </div>
        <RightSidebar 
            user={user}
            transactions={accounts?.transactions}  
            banks={accountsData?.slide(0,2)}
        />
    </section>
  )
}

export default Home
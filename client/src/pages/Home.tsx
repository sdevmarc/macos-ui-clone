import Header from '@/components/Header'
import './css/Home.css'
import BottomNavs from '@/components/BottomNavs'
import Menu from '@/components/Menu'
import { useState } from 'react'

export default function Home() {
    const [isMenu, setMenu] = useState<boolean>(false)

    return (
        <>
            <div className="home w-full h-screen flex flex-col justify-start items-start">
                <Header isMenu={isMenu} menu={(e) => setMenu(e)} />
                {
                    isMenu && <Menu />
                }
                <BottomNavs />
            </div>
        </>
    )
}

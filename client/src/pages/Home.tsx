import Header from '@/components/Header'
import './css/Home.css'
import BottomNavs from '@/components/BottomNavs'

export default function Home() {
    return (
        <>
            <div className="home w-full h-screen flex flex-col justify-start items-start">
                <Header />
                <BottomNavs />
            </div>
        </>
    )
}

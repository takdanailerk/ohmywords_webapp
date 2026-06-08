import Link from 'next/link'
import { Button } from '../ui/button'
import Image from 'next/image'

const NavigationBar = () => {
    return (
        <nav className="w-full flex items-center justify-between xl:px-32 xs:px-6 py-2 fixed z-100 bg-blue-50">
            <Image src="/ohmywords_logo.png" width={100} height={100} alt="OhMyWords' logo"></Image>
            <ul className="gap-6 md:flex xs:hidden">
                <li>
                    <Button asChild className='text-amber-900' variant="ghost">
                        <Link href="/">
                            หน้าแรก
                        </Link>
                    </Button>
                </li>
                <li>
                    <Button asChild className='text-amber-900' variant="ghost">
                        <Link href="/vocab-categories">
                            หมวดคำศัพท์
                        </Link>
                    </Button>
                </li>
                <li>
                    <Button asChild className='text-amber-900' variant="ghost">
                        <Link href="/">
                            ติดต่อเรา
                        </Link>
                    </Button>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationBar
import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Ninja List</h1>
                {/* 
                - the Image tag here is styled with inline styles 
                - I could have just used a standard img tag but the next/image works pretty cool here
                */}
                <Image src="/logo.png" width={128} height={77} />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas"><a>Ninja Listing</a></Link>
        </nav>
    )
}

export default Navbar;
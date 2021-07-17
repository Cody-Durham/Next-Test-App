import Link from 'next/link'
import { useEffect } from 'react';
import {useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            // router.go(-1) acts like the back button in browser (not needed here)
            // router.go(+1) acts like the forward button in browser (not needed here)
            // router.go(1)
            router.push('/') // this is sending the user back to the route of (home) "/" using the router.push method
        },3000)
    }, [])

    return (
        <div className="not-found">
            <h1>Ooooops...</h1>
            <h2>This page cant be found.</h2>
            <p>Go back to the <Link href="/"><a>Hompage</a></Link> or wait 3 seconds</p>
        </div>
    )
}
export default NotFound;
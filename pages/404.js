import Link from 'next/link'
import { useEffect } from 'react';
import {useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            // router.go(-1) acts like the back button
        },3000)
    }, [])

    return (
        <div className="not-found">
            <h1>Ooooops...</h1>
            <h2>This page cant be found.</h2>
            <p>Go back to the <Link href="/"><a>Hompage</a></Link></p>
        </div>
    )
}
export default NotFound;
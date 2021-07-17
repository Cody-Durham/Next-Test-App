import Head from 'next/head'

const About = () => {
    return (
        <>
            <Head>
            <title>Ninja List | About</title>
            {/* the meta tag will help with SEO I think */}
            <meta name="keywords" content="ninjas" />
            </Head>
            <div>
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
            </div>
        </>
    ) 
}
export default About;
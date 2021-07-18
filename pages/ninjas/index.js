 import styles from '../../styles/Ninjas.module.css'

// using a function to call API data here (getStaticProps = function name!!!!!)
// this is an async function that runs at build time, not in the browser.? 
export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    return {
        props: { ninjas: data}
    }
}


const Ninjas = ( { ninjas }) => {
    return (
        <div>
            <h1>All Ninjas</h1>
            {ninjas.map(ninja => (
                <div key={ninja.id}>
                    <a className={styles.single}>
                        <h3> {ninja.name} </h3>
                    </a>
                </div>
            ))}
        </div>
    ) 
}

export default Ninjas;
 // notes that the name of this file [id] is shown in brackets because NEXT will intrepret it as an id that 
 // will change in the params.  -> [1] or [2] or [3] or [4] or [5] ect...

 // get static paths is a special function that runs at build time. Its very similar to get static props used earlier in index.js/ninjas
// it will return all possible route params for a specific ID

export const getStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    
    //this is mapping to get the correct paths for each ninja below. 
    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString() } // turning it to a string (not sure why tho? )
        }
    })

    return {
        paths: paths, 
         // need to look up what fallback is. I think its if a user looks up a ID route that dosent exist
         // it will show the 404 page I built
        fallback: false
    }
}

// getStaticProps is getting its info from the return value of paths (10 times because of API data amount)
export const getStaticProps = async (context) => { // context is an object  
    const id = context.params.id
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id )
    const data = await response.json()

    return {
        props: { ninja: data }
    } 
}

 const Details = ({ ninja }) => {
     return (
         <div>
             <h1>Name: { ninja.name}</h1>
             <p>Email: { ninja. email }</p>
             <p>Website: { ninja. website }</p>
             <p>City: { ninja. address.city }</p>
             
         </div>
     ) 
 }
 export default Details  
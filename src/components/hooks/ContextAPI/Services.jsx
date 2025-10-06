import { useBioContext } from ".";

export const Services = () => {

   const {myName, myAge} = useBioContext()
    return <h1>Hello Context API(services). My name is {myName}. I am {myAge} yrs old.</h1>
};
import {  use, useContext } from "react"
import { BioContext } from "."


export const About = () => {

//    const {myName, myAge} = useBioContext();
    // const {myName, myAge} = use(BioContext);

   const newHook = true;
   let myName,myAge;
   if(newHook)
   {
    ( {myName, myAge } = useContext(BioContext));
   }
    return <h1>Hello Context API(About). My name is {myName}. I am {myAge} yrs old.</h1>
};
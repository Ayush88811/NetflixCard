import "./EV.css";

export const EventHandling = () => {

    // function handleButtonClick(){
    //     alert("Hey I am onClick Event");
    // }

    const handleButtonClick=(event)=>{
        console.log(event);
        console.log(event.target);
        console.log(event.type);
        alert("Hey I am onClick Event");

    };

    const handleWelcomeUser =(user) => {
        console.log(`Hey ${user},Welcome`);
    };

    return (
        <>
            <button onClick={handleButtonClick}>click Me</button>
            <br/>
            <button onClick={() =>handleButtonClick(event)}>click Me 2</button>
            <br />
            
            {/* Inline event handlers */}
            <button onClick={(event)=>console.log(event)}>Inline Function</button>
            <br />
            {/* function components with Inline Arrow Functions */}
            <button onClick={() => alert("Hey I am inline event function")}>
                Inline arr fun
            </button>
            <br />

            {/* passing argument to event Handler */}
            {/* <button onClick={handleWelcomeUser("ayush")}>click Me</button> */}
            <button onClick={() => handleWelcomeUser("ayush")}>click Me</button>
            
        </>
    );
};
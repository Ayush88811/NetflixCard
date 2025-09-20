
import "./EV.css";
export const EventPropagation = () => {

    const handleGrandParent=() => {
        console.log("GrandParent clicked");
    };

    const handleParentClick = (event) => {
        
        console.log("Parent clicked");
    };

    const handleChildClick = (event) => {
        event.stopPropagation();
        console.log("Child button clicked");
    };

    return (
        <section className="main-div">
            <div className="g-div" onClickCapture={handleGrandParent}>
                <div className="p-div" onClickCapture={handleParentClick}>
                    <button className="c-div" onClickCapture={handleChildClick}>
                     Child div
                    </button>
                </div>

            </div>
        </section>
    );
    
};
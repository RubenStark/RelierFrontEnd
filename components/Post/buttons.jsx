import { Button } from "@nextui-org/react";
function Buttons() {


    return (

        // <div className="flex justify-between px-5 pt-5">
        //     <Button like={true} />
        //     <Button laugh={true} />
        //     <Button love={true} />
        // </div>

        <div className="flex justify-around px-5 pt-5">
            
            <Button bordered flat color="primary">
                Like
            </Button>

            <Button bordered flat color="warning">
                Laugh
            </Button>

            <Button bordered flat color="error">
                Love
            </Button>

        </div>
    )

}

export default Buttons
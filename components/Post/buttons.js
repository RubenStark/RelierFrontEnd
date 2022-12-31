import Button from "./button";

function Buttons() {


    return (

        <div className="flex justify-between px-5 pt-5">
            <Button like={true} />
            <Button laugh={true} />
            <Button love={true} />
        </div>

    )

}

export default Buttons
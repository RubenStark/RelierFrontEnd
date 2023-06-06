import { useEffect, useState } from "react";
import Tag from "../tag";
import { Textarea } from "@nextui-org/react";

function TagsPart({setParentTags}) {

    const [tags, setTags] = useState([]);

    const handleChange = (e) => {
        // if the user press enter key then add the tag
        // if the e is from the textarea named tags then add the tag
        if (e.target.name === "tags" && e.key === "Enter") {
            e.preventDefault();
            setTags([...tags, e.target.value]);
            setParentTags([...tags, e.target.value]);
            e.target.value = "";
        }

    }

    useEffect(() => {
        window.addEventListener("keydown", handleChange);
        return () => {
            window.removeEventListener("keydown", handleChange);
        }
    }, [tags])

    return (
        <>
            {/* <textarea className="w-full h-16 p-5 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500"
                placeholder="Añade tus tags" onChange={handleChange} /> */}

            <Textarea
                name="tags"
                fullWidth
                minRows={5}
                maxRows={20}
                underlined
                color="primary"
                labelPlaceholder="Añade tus tags"
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-1">
                {
                    tags.map((tag, index) => (
                        <Tag key={index} tag={tag}/>
                    ))
                }
            </div>
        </>
    )

}

export default TagsPart;
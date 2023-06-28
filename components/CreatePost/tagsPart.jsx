import { use, useEffect, useState } from "react";
import Tag from "../tag";
import { Textarea } from "@nextui-org/react";
import useTags from "../../hooks/useTags";

function TagsPart({ setParentTags }) {
  // * Pasar setParentTags como prop
  const { tags } = useTags();

  useEffect(() => {
    setParentTags(tags);
  }, [tags]);

  return (
    <>
      {/* <textarea className="w-full h-16 p-5 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500"
                placeholder="Añade tus tags" onChange={handleChange} /> */}

      <Textarea
        name="tags"
        fullWidth
        minRows={4}
        maxRows={20}
        underlined
        color="primary"
        placeholder="Añade tus intereses aqui"
        label="Intereses"
      />

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mt-5">
        {tags.map((tag, index) => (
          <Tag key={index} tag={tag} />
        ))}
      </div>
    </>
  );
}

export default TagsPart;

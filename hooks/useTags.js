import { useState, useEffect } from "react";

const useTags = () => {
  const [tags, setTags] = useState([]);

  const handleChange = (e) => {
    if (e.target.name === "tags" && e.key === "Enter") {
      e.preventDefault();
      setTags([...tags, e.target.value]);
      e.target.value = "";
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleChange);
    return () => {
      window.removeEventListener("keydown", handleChange);
    };
  }, [tags]);

  return { tags, setTags };
};

export default useTags;

import React from "react";
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MySelect
        defaultValue="Sort by"
        options={[
          { name: "By title", value: "title" },
          { name: "By body", value: "body" },
        ]}
        value={filter.sort}
        onChange={(sort) => setFilter({ ...filter, sort: sort })}
      ></MySelect>
      <MyInput
        placeholder="Search..."
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      ></MyInput>
    </div>
  );
};

export default PostFilter;

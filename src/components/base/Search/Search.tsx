import React from "react";

import { Search as SearchIcon } from "../../icons";
import { Input } from "../../ui";

// Detect device width
// const mobileView = window.screen.width < 600;

interface Props {
  placeholder?: string;
  onChange?: (...args: any[]) => any;
}

const Search: React.FC<Props> = ({ placeholder, onChange }) => {
  const handleSearch = (e: any) => {
    onChange(e);
  };

  return (
    <Input
      placeholder={placeholder}
      prefix={<SearchIcon />}
      onChange={(e) => handleSearch(e)}
    />
  );
};

export default Search;

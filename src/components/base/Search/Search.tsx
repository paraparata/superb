import React from "react";

import { Search as SearchIcon } from "../../icons";
import { Input } from "../../ui";

// Detect device width
// const mobileView = window.screen.width < 600;

export interface Props {
  placeholder?: string;
  onChange?: (...args: any[]) => any;
}

export const Search: React.FC<Props> = ({
  placeholder = "Search",
  onChange,
  ...props
}) => {
  const handleSearch = (e: any) => {
    if (onChange) {
      onChange(e);
    }
    return null;
  };

  return (
    <Input
      placeholder={placeholder}
      prefix={<SearchIcon />}
      onChange={(e) => handleSearch(e)}
      {...props}
    />
  );
};

export default Search;

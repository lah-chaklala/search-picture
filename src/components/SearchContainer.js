import React, { useState, useCallback } from "react";
import { Container, IconButton, InputAdornment } from "@material-ui/core";
import { Search } from "@material-ui/icons";

import DelayedInputText from "./DelayedInputText";
import ImageListContainer from "./ImageListContainer";

function SearchContainer() {
  const [searchTerm, setSearchTerm] = useState("");

  function searchTermHandler(newTerm) {
    console.log("term ", newTerm);
    setSearchTerm(newTerm);
  }

  const searchTermHandlerCallBack = useCallback(searchTermHandler, []);

  return (
    <Container>
      <h1>photo search engine</h1>
      <DelayedInputText
        name="Search term"
        value={searchTerm}
        onChange={searchTermHandlerCallBack}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="search">
                <Search />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {/* <Divider /> */}

      <ImageListContainer searchTerm={searchTerm} />
    </Container>
  );
}

export default SearchContainer;

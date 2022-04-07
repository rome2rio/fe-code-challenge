import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import styled from "styled-components";
import { useDebounce } from "../../hooks/useDebounce";

const Container = styled.div`
  width: 50%;
  padding: 8px 16px;
`;

const AutocompleteInput = styled.input`
  font-size: 18px;
  height: 32px;
  padding: 0;
  text-overflow: ellipsis;
  border: none;
  background-color: transparent;
  width: 100%;
  -webkit-appearance: textfield;
  user-select: all;

  &::selection {
    background: #de007b;
    color: white;
  }

  &:focus {
    outline: none;
    color: #5a5a5a;
  }
`;

type AutocompleteProps = {
  startValue: string;
};

const Autocomplete = (props: AutocompleteProps) => {
  const [searchTerm, setSearchTerm] = useState(props.startValue);

  const queryClient = useQueryClient();
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const { data, isLoading } = useQuery(
    ["searchTerm", debouncedSearchTerm],
    async () => {
      const { data } = await axios.get(
        `https://services.rome2rio.com/api/1.5/json/Autocomplete?key=86f5qBa1&query=${debouncedSearchTerm}&type=r2r&languageCode=en`
      );
      return data;
    }
  );

  // Effect for API call
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        // queryClient.invalidateQueries(["searchTerm", searchTerm]);
        console.log("searching", debouncedSearchTerm);
      } else {
        console.log("debouncing");
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  );

  return (
    <Container>
      <label className="autocomplete__label" htmlFor="search-from"></label>
      <div className="faux-input autocomplete__input-wrapper">
        <div className="autocomplete__shadow faux-input"></div>
        <AutocompleteInput
          type="search"
          aria-label="Enter a location"
          name="from"
          id="search-from"
          placeholder="Enter a starting location"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </Container>
  );
};

export default Autocomplete;

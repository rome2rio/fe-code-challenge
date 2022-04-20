import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Autosuggest from "react-autosuggest";

type AutocompleteProps = {
  startCanonical: string;
  onNewCanonical: (st: string) => void;
};

export function Autocomplete({
  startCanonical,
  onNewCanonical,
}: AutocompleteProps) {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState<Result[]>([]);

  const getAutocomplete = async (
    value: string
  ): Promise<AutocompleteRequest> => {
    return await axios.get(
      `https://services.rome2rio.com/api/1.5/json/Autocomplete?key=86f5qBa1&query=${value}&type=r2r&languageCode=en`
    );
  };

  async function getSuggestions(value: string) {
    let results = await getAutocomplete(value);
    setSuggestions(results.data.results);
  }

  // Gets initial canonical
  useEffect(() => {
    setInput("");
    async function getInit() {
      let results = await getAutocomplete(startCanonical);
      onNewCanonical(results.data.results[0].canonicalName);
      setInput(results.data.results[0].longName);
    }

    getInit();
  }, [onNewCanonical, startCanonical]);

  return (
    <Container>
      <AutosuggestContainer>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsClearRequested={() => setSuggestions([])}
          onSuggestionsFetchRequested={({ value }) => {
            getSuggestions(value);
          }}
          onSuggestionSelected={(_, result) =>
            onNewCanonical(result.suggestion.canonicalName)
          }
          getSuggestionValue={(suggestion) => {
            return suggestion.longName;
          }}
          renderSuggestion={(suggestion) => <span>{suggestion.longName}</span>}
          inputProps={{
            value: input,
            onChange: (_, { newValue, method }) => {
              setInput(newValue);
            },
          }}
          highlightFirstSuggestion={true}
        />
      </AutosuggestContainer>
    </Container>
  );
}

type Request = {
  query: string;
  languageCode: string;
};

type Result = {
  kind: string;
  kinds: string[];
  shortName: string;
  longName: string;
  canonicalName: string;
};

type AutocompleteRequestData = {
  request: Request;
  results: Result[];
};

type AutocompleteRequest = {
  data: AutocompleteRequestData;
};

const Container = styled.div`
  width: 50%;
  padding: 8px 16px;
`;

const AutosuggestContainer = styled.div`
  .react-autosuggest__input {
    width: 100%;
    border: none;
    padding: 0;

    font-size: 18px;
    height: 32px;
    text-overflow: ellipsis;
    background-color: transparent;
    -webkit-appearance: textfield;
    user-select: all;
    color: black;

    &::selection {
      background: #de007b;
      color: white;
    }

    &:focus {
      outline: none;
      color: #5a5a5a;
    }
  }

  .react-autosuggest__container {
    position: relative;
  }

  .react-autosuggest__input--focused {
    outline: none;
  }

  .react-autosuggest__input--open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .react-autosuggest__suggestions-container {
    display: none;
  }

  .react-autosuggest__suggestions-container--open {
    display: block;
    position: absolute;
    top: 40px;
    left: -15px;
    width: 100%;
    border: 1px solid #aaa;
    background-color: #fff;
    font-family: Helvetica, sans-serif;
    font-weight: 300;
    font-size: 16px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    z-index: 2;
  }

  .react-autosuggest__suggestions-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .react-autosuggest__suggestion {
    cursor: pointer;
    padding: 10px 20px;
  }

  .react-autosuggest__suggestion--highlighted {
    background-color: #ddd;
  }
`;

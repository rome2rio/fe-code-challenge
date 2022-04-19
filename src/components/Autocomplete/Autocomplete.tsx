import { useEffect, useLayoutEffect, useRef, useState } from "react";
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
  const [currentQuery, setCurrentQuery] = useState(startCanonical);
  const [suggestions, setSuggestions] = useState<Result[]>([]);

  function getAutocompleteResults(value: string) {
    const url = `https://services.rome2rio.com/api/1.5/json/Autocomplete?key=86f5qBa1&query=${value}&type=r2r&languageCode=en`;
    return fetch(url, {
      referrerPolicy: "no-referrer-when-downgrade",
    })
      .then((response) => response.json())
      .then((response) => response as AutocompleteRequestData)
      .then((response) => {
        if (!response || response.results.length <= 0) {
          return Promise.reject("no results");
        } else {
          return Promise.resolve(response.results);
        }
      });
  }

  const nextRequestn = useRef(1);
  const latestReceivedResponseNum = useRef(0);

  useLayoutEffect(() => {
    var requestNum = nextRequestn.current;
    nextRequestn.current = requestNum + 1;

    getAutocompleteResults(currentQuery).then((results) => {
      if (requestNum === 1) {
        onNewCanonical(results[0].longName);
        setInput(results[0].longName);
      } else if (requestNum > latestReceivedResponseNum.current) {
        latestReceivedResponseNum.current = requestNum;
        setSuggestions(results);
      } else {
      }
    });
  }, [currentQuery]);

  return (
    <Container>
      <AutosuggestContainer>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsClearRequested={() => setSuggestions([])}
          onSuggestionsFetchRequested={({ value }) => setCurrentQuery(value)}
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

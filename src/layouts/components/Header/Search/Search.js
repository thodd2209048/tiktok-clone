import TippyHeadless from "@tippyjs/react/headless";
import {
  faMagnifyingGlass,
  faSpinner,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";

import { DropWrapper } from "~/components/DropWrapper";

import styles from "./Search.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchItem from "../SearchItem/SearchItem";
import { useEffect, useRef, useState } from "react";
import useDelay from "~/hooks/useDelay";

const cx = classNames.bind(styles);

function Search() {
  const [inputSearch, setInputSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const inputRef = useRef();

  const handleInput = (e) => {
    const searchValue = e.target.value;
    if (!inputSearch.startsWith(" ")) {
      setInputSearch(searchValue);
    }
  };
  const handleClickOutside = () => {
    setShowResult(false);
  };
  const handleClear = () => {
    setInputSearch("");
    inputRef.current.focus();
  };
  const handleSearchBtnMouseDown = (e) => {
    e.preventDefault();
    inputRef.current.blur();
  };

  let debounced = useDelay(inputSearch, 500);

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }

    setShowSpinner(true);

    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${debounced}&type=less`
    )
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data);
        setShowSpinner(false);
      })
      .catch(() => setShowSpinner(false));
  }, [debounced]);

  return (
    <TippyHeadless
      interactive={true}
      visible={searchResult.length > 0 && showResult}
      onClickOutside={handleClickOutside}
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
          <DropWrapper>
            <div className={cx("search-title")}>Accounts</div>
            {searchResult.map((data) => (
              <SearchItem
                key={data.id}
                data={data}
                onClick={() => setInputSearch("")}
              />
            ))}
          </DropWrapper>
        </div>
      )}
    >
      <div className={cx("search")}>
        <input
          value={inputSearch}
          ref={inputRef}
          placeholder="Search accounts and videos"
          onChange={handleInput}
          onFocus={() => setShowResult(true)}
        />

        {!!inputSearch && !showSpinner && (
          <button className={cx("clear")} onClick={handleClear}>
            <FontAwesomeIcon icon={faXmarkCircle} />
          </button>
        )}

        {showSpinner && (
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
        )}
        <button
          className={cx("search-btn")}
          onMouseDown={handleSearchBtnMouseDown}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </TippyHeadless>
  );
}

export default Search;

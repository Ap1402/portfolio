import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Pagination from "./Pagination";
import { useLocation } from "react-router-dom";
import Spinner from "./Spinner";
import AnimeCardsGrid from "./AnimeCardsGrid";
import Searchbar from "./SearchBar";
import CategoryButton from "./CategoryButton";
import { getAnimes } from "../helpers/getAnimes";

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Animes = (props) => {
  // ----->
  const query = useQuery();
  const [animesData, setAnimeData] = useState();
  const page = query.get("page");
  const sort = query.get("sort");
  const categoriesButtons = [
    {name: 'Action', slug: 'action'},
    {name: 'Fiction', slug: 'fiction'},
    {name: 'Horror', slug: 'horror'},
    {name: 'Romance', slug: 'romance'},
    {name: 'Drama', slug: 'drama'},
    {name: 'Fantasy', slug: 'fantasy'},
    {name: 'Ecchi', slug: 'ecchi'},
    {name: 'Sports', slug: 'sports'}];

  const [activeCategory, setActiveCategory]= useState();

  const changeURLParams = (paramName, action, value) => {
    if (value != null) {
      query[action](paramName, value);
    } else {
      query[action](paramName);
    }
    props.history.push(window.location.pathname + "?" + query.toString());
  };

  const handleClickCurrent = (e) => {
    if (!filters.status.active) {
      setFilters({ ...filters, status: { value: "current", active: true } });
    } else {
      setFilters({ ...filters, status: { value: "", active: false } });
    }
    changeURLParams("page", "set", 0);
  };

  const [params, setParams] = useState({
    sort: sort,
    page: {
      limit: 10,
      offset: page * 10,
    },
  });

  const [filters, setFilters] = useState({
    text: { value: null, active: false },
    categories: {
      value: null,
      active: false,
    },
    status: {
      value: null,
      active: false,
    },
  });

  const onClickCategoryHandler = (e, slug) => {
    if (!filters.categories.active || filters.categories.value !== slug) {
      setFilters({ ...filters, categories: { value: slug, active: true } });
      setActiveCategory(slug);
    } else {
      setFilters({ ...filters, categories: { value: "", active: false } });
      setActiveCategory('');

    }
  };

  const handleSubmit = (e, inputData) => {
    e.preventDefault();
    if (!inputData == "") {
      setFilters({
        ...filters,
        text: { active: true, value: inputData },
      });
    } else {
      setFilters({
        ...filters,
        text: { active: false, value: null },
      });
    }
  };

  //------>

  const selectChangeHandler = (e) => {
    changeURLParams("sort", "set", e.target.value);
  };

  const selectLimitHandler = (e) => {
    setParams({
      ...params,
      page: { ...params.page, limit: parseInt(e.target.value) },
    });
  };

  // Get Page params filters and pages 
  useEffect(() => {
    const paramsTemp = {...params}
    Object.keys(filters).map(function(key, index) {
      if(filters[key]['active']){
        paramsTemp.filter = {...paramsTemp.filter, [key]:filters[key].value}
      }else{
        if(paramsTemp.filter ){
          delete paramsTemp.filter[key]
        }
      }
    });
    paramsTemp.page.offset = page*paramsTemp.page.limit;
    paramsTemp.sort = sort;
    setParams(paramsTemp);
  }, [setParams, page, filters, sort]);

  // Get Data Anime
  useEffect(() => {
    async function getAnimeResult() {
      const result = await getAnimes(params);
      setAnimeData(result);
    }
    getAnimeResult();
  }, [params]);


  if (animesData) {
    return (
      <>
        <Searchbar handleSubmit={handleSubmit} />
        <select
          onChange={(e) => selectChangeHandler(e)}
          class="form-control"
          name="sortBy"
        >
          <option value="popularityRank">Popularity</option>
          <option value="-startDate">Airing Date</option>
        </select>

        <select
          onChange={(e) => selectLimitHandler(e)}
          defaultValue="10"
          class="form-control"
          name="showLimit"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>

        <button onClick={(e) => handleClickCurrent(e)}>Airing</button>

        {categoriesButtons.map((category)=>{
          return <CategoryButton
          key={category.slug}
          isActive = {activeCategory===category.slug?true:false}
          onClickCategoryHandler={onClickCategoryHandler}
          slug={category.slug}
          categoryName={category.name}
        />
        })}

        <Pagination
          actualPage={page ? page : 0}
          changeURL={changeURLParams}
          pagesLimit={Math.floor(animesData.meta.count / params.page.limit)}
        ></Pagination>
        <AnimeCardsGrid animesData={animesData} />
        <Pagination
          actualPage={page ? page : 0}
          changeURL={changeURLParams}
          pagesLimit={Math.floor(animesData.meta.count / params.page.limit)}
        ></Pagination>
      </>
    );
  } else {
    return <Spinner />;
  }
};

export default Animes;

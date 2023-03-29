import React, { useEffect } from 'react'
import PropTypes from "prop-types";
import { useInfiniteQuery } from "../../hooks/useInfiniteQuery";

export const List = ({ url, Item, kind, verify = f => f}) => {
  const { pages, error, observe } = useInfiniteQuery(url, kind);
  
  useEffect( () => {window.scrollTo(0, 0)}, [url])

  if (error) return alert(`An error has occurred: ${error.message}`);

  return (
    <ul className="py-12 max-w-6xl h-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
      {
        pages.map((page, idx) => (
          page[kind]?.filter(verify).map((elem, idx, filteredPage) => {
            const isLast = pages.length * filteredPage.length === idx + 1;
            return (<li key={idx} ref={isLast ? observe : null}>
              <Item {...elem} />
            </li>);
          })
        ))
      }
    </ul>
  );
};

List.propTypes = {
  url: PropTypes.string.isRequired,
  Item: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  responsiveColProps: PropTypes.object,
  verify: PropTypes.func
};

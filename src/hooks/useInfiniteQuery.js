import { useInfiniteQuery as useInfiniteReactQuery } from '@tanstack/react-query'
import { useInView } from "react-cool-inview";
import { useEffect } from "react";

let lastPageNumber = 1

export const useInfiniteQuery = (url, kind) => {
  const {
    data = {
      pages: [{ [kind]: [] }]
    },
    fetchNextPage,
    isFetching,
    isError
  } = useInfiniteReactQuery({
      queryKey: [kind],
      queryFn: ({ pageParam = 1 }) => fetch(url + pageParam).then(response => response.json()),
      defaultPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        return lastPageNumber > allPages.length ? lastPageNumber: undefined;
      }
    }
  );
  const { observe } = useInView({
    rootMargin: "100px",
    onEnter: () => {
      lastPageNumber++
      fetchNextPage()
    }
  });

  useEffect( () => { lastPageNumber = 1}, [])

  return {
    pages: data.pages,
    isFetching,
    isError,
    observe
  };
};


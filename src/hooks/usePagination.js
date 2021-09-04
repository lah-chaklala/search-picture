import React, { useState, useEffect } from "react";

function usePagination(getData, initialPage=1, initialNumberOfItemPerPage=10) {
    const [itemPerPage, setItemPerPage] = useState(initialNumberOfItemPerPage);
    const [itemsOfPage, setItemsOfPage] = useState([]);
    const [page, setPage] = useState(initialPage);
    const [numberOfItem, setNumberOfItem] = useState(0);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      (async () => {
        setLoading(true);
        const { numberOfItems, items } = await getData(page, itemPerPage);
        setLoading(false);
        setItemsOfPage(items);
        setNumberOfItem(numberOfItems);
      })();
    }, [page, itemPerPage, getData]);

    return {itemPerPage, page, itemsOfPage, numberOfItem, loading, setItemPerPage, setPage};
}

export default usePagination;
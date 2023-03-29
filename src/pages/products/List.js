import React from 'react'
import { List as SmartList } from '../../components/smarts/List'
import { Item } from '../../components/dumbs/product/Item'
import PropTypes from "prop-types";

export const List= ({search= ''}) => {
   return search.length
     ? <SmartList
        url={`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${search}&action=process&sort_by=unique_scans_n&fields=id%2Cproduct_name%2Cimage_front_small_url&json=1&page_size=24&page=`}
        Item={Item}
        verify={ elem => elem.product_name && elem.image_front_small_url && elem.id}
        kind='products'
      />
     : null
}

List.propTypes = {
   search:PropTypes.string.isRequired
}

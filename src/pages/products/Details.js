import React from 'react'
import { Details as ProductDetails} from '../../components/dumbs/product/Details'
import { Details as SmartDetails } from '../../components/smarts/Details'
import { useParams } from "react-router-dom";

export const Details = () => {
  const {id} = useParams()

  return (
    <SmartDetails
      id={id}
      kind='product'
      Details={ProductDetails}
      url={`https://world.openfoodfacts.org/api/v0/product/${id}.json?fields=product_name%2Ccategories%2Cimage_front_url%2Callergens_hierarchy%2Cingredients_text`}
    />
  )
}


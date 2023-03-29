import React from 'react'
import PropTypes from 'prop-types'
import { Descriptions, Image } from "antd";

export const Details = ({ allergens_hierarchy, categories, image_front_url, ingredients_text, product_name,  }) => (
   <div className="flex items-center">
     <div>
        <Image width={320} src={image_front_url} />
     </div>
     <div className="m-5">
        <Descriptions column={1}>
           <Descriptions.Item label="Nom" labelStyle={{width: 90}}>{product_name}</Descriptions.Item>
           <Descriptions.Item label="Catégories" labelStyle={{width: 90}}>{categories}</Descriptions.Item>
           <Descriptions.Item label="Allergènes" labelStyle={{width: 90}}>{allergens_hierarchy}</Descriptions.Item>
           <Descriptions.Item label="Ingrédients" labelStyle={{width: 90}}>{ingredients_text}</Descriptions.Item>
        </Descriptions>
     </div>
   </div>
)

Details.propTypes = {
    categories: PropTypes.array.isRequired,
    product_name: PropTypes.string.isRequired,
    allergens_hierarchy: PropTypes.string.isRequired,
    ingredients_text: PropTypes.number.isRequired,
    image_front_url: PropTypes.string.isRequired,
}

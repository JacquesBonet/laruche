import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'
import Meta from "antd/lib/card/Meta";
import { Link } from "react-router-dom";

export const Item = ({ id, image_front_small_url, product_name}) => (
  <Link to={`/products/${id}`}>
    <Card
      key={id}
      hoverable
      cover={<img alt="example" src={image_front_small_url} className="h-60 object-contain self-center"/>}
      className="h-80 flex-col p-3"
    >
      <Meta title={product_name}/>
    </Card>
  </Link>
)


Item.propTypes = {
   product_name: PropTypes.string.isRequired,
   image_front_small_url:PropTypes.string.isRequired,
   id: PropTypes.string.isRequired
}

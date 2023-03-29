import React from 'react'
import PropTypes from "prop-types";
import { Drawer } from "antd";
import { useQuery } from "@tanstack/react-query";

export const Details = ({ kind, url, Details, id }) => {
  const { isLoading, error, data } = useQuery([kind, id], () =>
    fetch(url).then(res => res.json())
  );

  if (isLoading) return null;

  if (error) return alert(`An error has occurred: ${error.message}`);

  return (
    <Drawer title={`Information ${kind}`} width={800} onClose={() => window.history.back()} visible={true}>
      <Details {...data[kind]} />
    </Drawer>
  );
};

Details.propTypes = {
  kind: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  Details: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

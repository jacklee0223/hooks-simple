import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);
  const fetchResource = async resource => {
    const response = await Axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );

    setResources(response.data);
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return <div>{resources.length}</div>;
};

export default ResourceList;

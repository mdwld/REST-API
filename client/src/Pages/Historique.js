import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stack } from 'react-bootstrap';
import { addHistory } from '../JS/Action/historique';

const Historique = () => {
    const user = useSelector((state) => state.userReducer.users)
    const product = useSelector((state) => state.productReducer.listProduct)
const [newHistory, setNewHistory] = useState({history:""});
setNewHistory(`{${user.name}} 'download'{${product.name}}`);
const dispatch = useDispatch();
dispatch(addHistory(newHistory));
  return (
    <div>
         <Stack direction="horizontal" gap={3}>
      <div className="bg-light border">{`${user.name}`}</div>
      <div className="bg-light border">download</div>
      <div className="bg-light border">{`${product.name}`}</div>
    </Stack>
    </div>
  )
}

export default Historique
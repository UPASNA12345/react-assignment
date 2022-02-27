import React from 'react';
import { Table, Tag, Space } from 'antd';
import {columns} from './columns';

const TableComponent = (props) => {

 const {dataSource} = props;

  return (
    <div>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  )
}

export default TableComponent

import React, { useState, useEffect } from 'react'
import { Tabs, Button, Input, Result } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { isEmpty } from 'lodash';
import moment from 'moment';

import TableComponent from '../Table/table';
import ModalComponent from '../Modal/modal';
import { MainContext } from '../../context/MainContext';
import schemaData from '../../data/schema.json';
import TableData from '../../data/dummyData.json'

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}


const LayoutComponent = () => {

  const { Search } = Input;
  const [showModal, setShowModal] = useState(false);
  const [tableData, setTableData] = useState(null);
  const [formSchema, setFormSchema] = useState(null);
  const [formdata, setFormData] = useState({})


  useEffect(() => {
    setFormSchema(schemaData?.data);
    setTableData(TableData.data);
  }, [])


  useEffect(() => {
    const id = tableData?.length + 1;
    if (formdata && !isEmpty(formdata)) {
      const newData = {
        ...formdata,
        id: id,
        startDate: moment(formdata?.date[0]).format('YYYY-MM-DD') || '',
        endDate: moment(formdata?.date[1]).format('YYYY-MM-DD') || ''

      }
      setTableData((prevState) => [...prevState, newData]);
      setShowModal(false);
    }
  }, [formdata])

  const onSearch = () => {
  //   <Input
  //   placeholder="Search Name"
  //   value={value}
  //   onChange={e => {
  //     const currValue = e.target.value;
  //     setValue(currValue);
  //     const filteredData = data.filter(entry =>
  //       entry.name.includes(currValue)
  //     );
  //     setDataSource(filteredData);
  //   }}
  // />
  }

  const onCreateEventHandler = () => {
    setShowModal(true);
  }



  return (
    <>
      <MainContext.Provider value={{ formSchema: formSchema, formdata: formdata, setFormData: setFormData, setShowModal: setShowModal }}>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Events" key="1">
            <div className='d-flex'>
              <div className='m-8'>
                <Search
                  placeholder="Search events"
                  allowClear
                  enterButton
                  size="large"
                  onSearch={onSearch}
                />
              </div>
              <Button className="m-8" type="primary" htmlType="button" onClick={onCreateEventHandler}>
                Create event
              </Button>
            </div>
            <TableComponent dataSource={tableData} />
          </TabPane>
          <TabPane tab="Templates" key="2">
            <Result
              icon={<SmileOutlined />}
              title="Assignment submitted successfully!"
              extra={<Button type="primary">Next</Button>}
              subTitle="Submitted by: Upasna Thakur"

            />,
          </TabPane>
        </Tabs>
        <ModalComponent title='Create Event' showModal={showModal} />
      </MainContext.Provider>
    </>
  )
}

export default LayoutComponent;
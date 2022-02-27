import React, { useState, useEffect } from 'react'
import { Tabs, Button, Input, Result } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { isEmpty, cloneDeep } from 'lodash';
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
  const [showModal, setShowModal] = useState(false);
  const [tableData, setTableData] = useState(null);
  const [formSchema, setFormSchema] = useState(null);
  const [formData, setFormData] = useState(null)

  useEffect(() => {
    setFormSchema(schemaData?.data);
    setTableData(TableData?.data)
  }, [])


  const onSearch = (e) => {
    const currValue = e;
    let data = cloneDeep(tableData)
    if (!isEmpty(currValue)) {
      const filteredData = data?.filter(entry =>
        entry.title.toLowerCase().includes(currValue.toLowerCase())
      );
      setTableData(filteredData);
    }

  }

  const onSubmitHandler = (formValue) => {
    const id = tableData?.length + 1;
    if (formValue && !isEmpty(formValue)) {
      setFormData(formValue);
      const newData = {
        ...formValue,
        id: id,
        startDate: moment(formValue?.date[0]).format('YYYY-MM-DD') || '',
        endDate: moment(formValue?.date[1]).format('YYYY-MM-DD') || '',

      }
      setTableData((prevState) => [...prevState, newData]);
      setShowModal(false);
    }
  }


  const onCreateEventHandler = () => {
    setShowModal(true);
  }



  return (
    <>
      <MainContext.Provider value={{ formSchema: formSchema, setShowModal: setShowModal, onSubmitHandler: onSubmitHandler }}>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Events" key="1">
            <div className='d-flex m-bottom'>
              <div className='m-8'>
                <Input.Search
                  placeholder="Search events"
                  allowClear
                  enterButton
                  size="large"
                  onSearch={(e) => onSearch(e)}
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
              title="React Assignment"
              // extra={<Button type="primary">Submit</Button>}
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
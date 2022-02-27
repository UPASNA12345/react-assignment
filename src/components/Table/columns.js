import { Tag, Space } from 'antd';
import { MoreOutlined} from '@ant-design/icons';
export const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'id',
      sorter: (a, b) => { return a.title.localeCompare(b.title)},
      // render: text => <a>{text}</a>,
    },
     {
      title: 'Type',
      key: 'id',
      dataIndex: 'type',
      sorter: (a, b) => { return a.title.localeCompare(b.title)},
     render: type =>  {
       return(
        <>
        <Tag color={type==='event'? 'green':type==='holiday'?'red':'blue'}>{type.toUpperCase()}</Tag>
         </>
       )
      
     }
    },
   
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'id',
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'id',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'id',
      sorter: (a, b) => { return a.title.localeCompare(b.title)},

    },
   
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <MoreOutlined style={{color:'red'}}/>
        </Space>
      ),
    },
  ];
  

  
import React from 'react';
import { SettingFilled, QuestionCircleFilled, UserOutlined } from '@ant-design/icons';

const navbar = () => {
    return (
        <div className="nav">
            <h3 style={{ color: 'white', fontStyle:'italic' }}>
                <span style={{marginRight:'4px'}}><b>W</b></span>
                 STRATEGIC PLANNING
            </h3>
            <div style={{ color: 'white' }}>
                <SettingFilled className='p-3' />
                <UserOutlined className='p-3' />
                <QuestionCircleFilled className='p-3' />
            </div>
        </div>
    )
}

export default navbar

import React, {useContext} from 'react';
import { Modal, Button } from 'antd';
import Form from '../Form/form';
import { MainContext } from '../../context/MainContext';

function ModalComponent(props) {
  const {setShowModal } = useContext(MainContext);

  const { title, showModal} = props;


  return (
    <>
      <Modal
        title={title}
        centered
        visible={showModal}
        onCancel={() => setShowModal(false)}
        footer={null}
      >
        <div justify="content-center">
          <Form />
        </div>
      </Modal>
    </>
  );

}

export default ModalComponent;
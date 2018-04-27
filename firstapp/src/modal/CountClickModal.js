
import React from 'react';

import '../react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { Button, Modal, Form} from 'antd';

const handleModalCancel = () => {
  this.props.handleModalCancel();
}
class CountClickModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '点击量统计',
    }
  }

  render() { 
    const { visible, data} = this.props;
    const {title} = this.state;
   return(
      <div> 
         <Modal
            visible={visible}
            // transparent={false}  
            width={800}
            title={title}
            onCancel={this.handleModalCancel}
            footer={[
              <Button key="back" size="large" onClick={this.handleModalCancel}>关闭</Button>,
            ]}>
            <p>{data}</p>
          </Modal>
      </div>
   );
   
  }
}
const NewsClicks = Form.create()(CountClickModal);

export default NewsClicks;
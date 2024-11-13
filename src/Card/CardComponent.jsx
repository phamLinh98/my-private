import { Card, Col, Row, Space } from 'antd';
import { useState } from 'react';

const CardComponent = () => {
  const currentDateTime = new Date();
  const formattedDateTime = `${currentDateTime.getDate()}/${currentDateTime.getMonth() + 1}/${currentDateTime.getFullYear()} ${currentDateTime.getHours()}:${currentDateTime.getMinutes()}:${currentDateTime.getSeconds()}`;
  const [done, setDone] = useState(false);
  const [color, setColor] = useState('');
  const [time, setTime] = useState('');
  const changeToDone = () => {
    setDone(true);
    setColor('green');
    setTime(':'+formattedDateTime);
  }

  return  <Space direction="vertical" size="large" style={{ width: '100%' }}>
  <Row gutter={[16, 16]}>
    <Col xs={24} sm={12} md={8}>
      <Card title="Mua Đồ ăn" bordered={true} style={{backgroundColor:color}} onClick={changeToDone}>
        {done ? 'Đã thực hiện' : 'Chưa thực hiện'} {time}
      </Card>
    </Col>
    <Col xs={24} sm={12} md={8}>
      <Card title="Mua Nước uống" bordered={true} style={{backgroundColor:color}} onClick={changeToDone}>
     {done ? 'Đã thực hiện' : 'Chưa thực hiện'} {time}
      </Card>
    </Col>
    <Col xs={24} sm={12} md={8}>
      <Card title="Mua Giấy vệ sinh" bordered={true} style={{backgroundColor:color}} onClick={changeToDone}>
     {done ? 'Đã thực hiện' : 'Chưa thực hiện'} {time}
      </Card>
    </Col>
    <Col xs={24} sm={12} md={8}>
      <Card title="Mua Đũa" bordered={true} style={{backgroundColor:color}} onClick={changeToDone}>
     {done ? 'Đã thực hiện' : 'Chưa thực hiện'} {time}
      </Card>
    </Col>
    <Col xs={24} sm={12} md={8}>
      <Card title="Mua Kem đánh răng" bordered={true} style={{backgroundColor:color}} onClick={changeToDone}>
      {done ? 'Đã thực hiện' : 'Chưa thực hiện'} {time}
      </Card>
    </Col>
    <Col xs={24} sm={12} md={8}>
      <Card title="Mua Túi rác" bordered={true} style={{backgroundColor:color}} onClick={changeToDone}>
      {done ? 'Đã thực hiện' : 'Chưa thực hiện'} {time}
      </Card>
    </Col>
    <Col xs={24} sm={12} md={8}>
      <Card title="Đóng tiền điện" bordered={true} style={{backgroundColor:color}} onClick={changeToDone}>
      {done ? 'Đã thực hiện' : 'Chưa thực hiện'} {time}
      </Card>
    </Col>
    <Col xs={24} sm={12} md={8}>
      <Card title="Đóng tiền gas" bordered={true} style={{backgroundColor:color}} onClick={changeToDone}>
      {done ? 'Đã thực hiện' : 'Chưa thực hiện'} {time}
      </Card>
    </Col>
    <Col xs={24} sm={12} md={8}>
      <Card title="Mua Nước giặt" bordered={true} style={{backgroundColor:color}} onClick={changeToDone}>
      {done ? 'Đã thực hiện' : 'Chưa thực hiện'} {time}
      </Card>
    </Col>
    <Col xs={24} sm={12} md={8}>
      <Card title="Mua Dầu gội" bordered={true} style={{backgroundColor:color}} onClick={changeToDone}>
      {done ? 'Đã thực hiện' : 'Chưa thực hiện'} {time}
      </Card>
    </Col>
    <Col xs={24} sm={12} md={8}>
      <Card title="Mua Dầu rửa bát" bordered={true} style={{backgroundColor:color}} onClick={changeToDone}>
      {done ? 'Đã thực hiện' : 'Chưa thực hiện'} {time}
      </Card>
    </Col>
    <Col xs={24} sm={12} md={8}>
      <Card title="Đóng tiền học" bordered={true} style={{backgroundColor:color}} onClick={changeToDone}>
      {done ? 'Đã thực hiện' : 'Chưa thực hiện'} {time}
      </Card>
    </Col>
    <Col xs={24} sm={12} md={8}>
      <Card title="Đóng tiền điện thoại" bordered={true} style={{backgroundColor:color}} onClick={changeToDone}>
      {done ? 'Đã thực hiện' : 'Chưa thực hiện'} {time}
      </Card>
    </Col>
  </Row>
</Space>
}
export default CardComponent;

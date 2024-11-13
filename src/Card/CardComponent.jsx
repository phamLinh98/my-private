import { Card, Col, Row, Space } from 'antd';
import { useState } from 'react';

const CardComponent = () => {
  const [done, setDone] = useState('');
  const [color, setColor] = useState('');
  const changeToDone = () => {
    setDone('Đã thực hiện');
    setColor('green');
  }

  return  <Space direction="vertical" size="large" style={{ width: '100%' }}>
  <Row gutter={[16, 16]}>
    <Col xs={24} sm={12} md={8}>
      <Card title="Đồ ăn" bordered={true} style={{backgroundColor:color}} onClick={changeToDone}>
        {done}
      </Card>
    </Col>
    <Col xs={24} sm={12} md={8}>
      <Card title="Nước uống" bordered={true} style={{backgroundColor:color}} onClick={changeToDone}>
      {done}
      </Card>
    </Col>
    <Col xs={24} sm={12} md={8}>
      <Card title="Giấy vệ sinh" bordered={true} style={{backgroundColor:color}} onClick={changeToDone}>
      {done}
      </Card>
    </Col>
    <Col xs={24} sm={12} md={8}>
      <Card title="Đũa" bordered={true} style={{backgroundColor:color}} onClick={changeToDone}>
      {done}
      </Card>
    </Col>
    <Col xs={24} sm={12} md={8}>
      <Card title="Kem đánh răng" bordered={true} style={{backgroundColor:color}} onClick={changeToDone}>
       {done}
      </Card>
    </Col>
    <Col xs={24} sm={12} md={8}>
      <Card title="Túi rác" bordered={true} style={{backgroundColor:color}} onClick={changeToDone}>
       {done}
      </Card>
    </Col>
    <Col xs={24} sm={12} md={8}>
      <Card title="Đóng tiền điện" bordered={true} style={{backgroundColor:color}} onClick={changeToDone}>
       {done}
      </Card>
    </Col>
    <Col xs={24} sm={12} md={8}>
      <Card title="Đóng tiền gas" bordered={true} style={{backgroundColor:color}} onClick={changeToDone}>
       {done}
      </Card>
    </Col>
    <Col xs={24} sm={12} md={8}>
      <Card title="Nước giặt" bordered={true} style={{backgroundColor:color}} onClick={changeToDone}>
       {done}
      </Card>
    </Col>
    <Col xs={24} sm={12} md={8}>
      <Card title="Dầu gội" bordered={true} style={{backgroundColor:color}} onClick={changeToDone}>
       {done}
      </Card>
    </Col>
    <Col xs={24} sm={12} md={8}>
      <Card title=" Dầu rửa bát" bordered={true} style={{backgroundColor:color}} onClick={changeToDone}>
       {done}
      </Card>
    </Col>
    <Col xs={24} sm={12} md={8}>
      <Card title="Đóng tiền học" bordered={true} style={{backgroundColor:color}} onClick={changeToDone}>
       {done}
      </Card>
    </Col>
    <Col xs={24} sm={12} md={8}>
      <Card title="Đóng tiền điện thoại" bordered={true} style={{backgroundColor:color}} onClick={changeToDone}>
       {done}
      </Card>
    </Col>
  </Row>
</Space>
}
export default CardComponent;

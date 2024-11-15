import { Card, Col, Row } from 'antd';
import { useCreateFacade } from '../redux/useFacade';
import { showModal } from '../../modal';

const CardComponent = () => {

  const {list, updateList, updateNotChangeList} = useCreateFacade();

  return  <>
      <Row gutter={[16, 16]}>
        {list && list.map((item) => (
      <Col
        key={item.id}
        xs={24} 
        sm={12} 
        md={8}
        lg={6}
      >  
      <Card
        title={item.title}
        bordered={true}
        style={{ backgroundColor: item.status ? "#389e0d" : "" }}
        onClick={() => showModal(item, updateList , updateNotChangeList)}
      >
        {item.status ? "Đã thực hiện" : "Chưa thực hiện"} {item.time}
      </Card>
    </Col>
  ))}
</Row>

  </>

}
export default CardComponent;

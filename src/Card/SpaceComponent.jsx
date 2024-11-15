// /* eslint-disable react/prop-types */
// import { Card, Col} from "antd"
// export const SpaceComponent = ({item,id}) => {
//     return (
//       <Col
//         key={item.id || id} // Đảm bảo `key` là duy nhất
//         xs={24} // Màn hình nhỏ (1 cột chiếm toàn bộ chiều rộng)
//         sm={12} // Màn hình vừa (2 cột trên 1 hàng)
//         md={8} // Màn hình trung bình (3 cột trên 1 hàng)
//         lg={6} // Màn hình lớn (4 cột trên 1 hàng)
//       >
//         <Card
//           title={item.title}
//           bordered={true}
//           style={{ cursor: "pointer", backgroundColor: item.status ? 'green' : '' }}
//           onClick={() => console.log(`Clicked: ${item.title}`)}
//         >
//           {item.status ? "Đã thực hiện" : "Chưa thực hiện"} {item.time}
//         </Card>
//       </Col>
//     )
// }
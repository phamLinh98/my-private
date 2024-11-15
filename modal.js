import { Modal } from "antd"
export const showModal = (item, callback1, callback2) => {
    if (!item.status) {
        callback1(item.id);
    } else {
        Modal.confirm({
            title: "Bạn xác nhận hủy tiến trình này ?",
            onOk: () => {
                callback2(item.id);
            },
            onCancel: () => {
                console.log("User cancelled");
            },
            okText: "OK",
            cancelText: "Hủy"
        });
    }
}

import React from 'react';
import { Avatar, List, Button, Divider, Row, Col } from 'antd';
import {
    ArrowLeftOutlined,
    CloseOutlined
} from '@ant-design/icons';

const CartListingComponent = (props) => {
    const { cartProduct, setCartProduct, setShowCart } = props;

    const removeFromCart = (index) => {
        setCartProduct(prevState => prevState.filter((x,i) => i !== index));
    }

    return (
        <>
            <Button type="primary" icon={<ArrowLeftOutlined />} size={'large'} onClick={() => setShowCart(false)}>
                Back
            </Button>
            <Divider orientation="left">Cart Listing</Divider>
            <Row>
                <Col span={1}></Col>
                <Col span={22}>

                    <List
                        bordered={true}
                        itemLayout="horizontal"
                        dataSource={cartProduct}
                        renderItem={(item, index) => {
                            const { image, name, currency, final_price } = item;
                            return (
                                <List.Item
                                    actions={[
                                        <CloseOutlined style={{ color: "red", fontSize: "20px" }} onClick={() => removeFromCart(index)} />
                                    ]}
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar src={image} />}
                                        title={name}
                                        description={`${currency} ${final_price}`}
                                    />
                                </List.Item>
                            )
                        }}
                    />
                </Col>
                <Col span={1}></Col>
            </Row>

        </>
    );
}

export default CartListingComponent;
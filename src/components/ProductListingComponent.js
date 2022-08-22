import React from 'react';
import { Card, List, Button, Divider, Row, Col, Input, Typography, Badge } from 'antd';
import data from '../data.json'
const { Title } = Typography;

const ProductListingComponent = (props) => {
    const { onAddToCart } = props;
    const [searchProduct, setSearchProduct] = React.useState('');

    const filteredProduct = React.useMemo(() => {
        if (!searchProduct) return data.data;
        return data.data.filter(item => item.name.toLowerCase().includes(searchProduct.toLocaleLowerCase()));
    }, [searchProduct])

    return (
        <>
            <Input placeholder="Search Product Listing" onChange={({ target }) => setSearchProduct(target.value)} style={{ width: 400 }} />
            <Divider orientation="left">Product Listing</Divider>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={4}>
                </Col>
                <Col className="gutter-row" span={16}>
                    <List
                        grid={{
                            gutter: 16,
                            xs: 1,
                            sm: 2,
                            md: 4,
                            lg: 4,
                            xl: 6,
                            xxl: 3,
                        }}
                        dataSource={filteredProduct ?? []}
                        renderItem={item => {
                            const { image, name, price, currency, final_price } = item;
                            return (
                                <List.Item>
                                    <Card
                                        // style={{ width: 120 }}
                                        cover={
                                            <img
                                                alt="example"
                                                src={image}
                                            />
                                        }
                                        actions={[
                                            <Button type="primary" shape="round" size={'large'} onClick={() => onAddToCart(item)}>
                                                Buy
                                            </Button>
                                        ]}
                                    >
                                        <div>
                                            <Title level={5}>{name}</Title>
                                            <div style={{ textAlign: "center" }}>
                                                <span style={{ color: "green" }}>{`${currency} ${final_price}`}</span> <br />
                                                <span style={{ textDecoration: "line-through" }}>{`${currency} ${price}`}</span>
                                            </div>
                                        </div>

                                    </Card>
                                </List.Item>
                            )
                        }}
                    />
                </Col>
                <Col className="gutter-row" span={4}>
                </Col>
            </Row>

        </>
    );
}

export default ProductListingComponent;
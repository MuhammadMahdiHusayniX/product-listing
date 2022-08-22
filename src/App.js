import React from 'react';
import { Layout, Row, Col, Badge } from 'antd';
import {
    ShoppingCartOutlined
} from '@ant-design/icons';
import CartListingComponent from './components/CartListingComponent';
import ProductListingComponent from './components/ProductListingComponent';

const { Header, Content, Footer } = Layout;

function App() {

    const [cartProduct, setCartProduct] = React.useState([]);
    const [showCart, setShowCart] = React.useState(false);

    const onAddToCart = (item) => {
        setCartProduct(prevState => prevState.concat([item]));
    }

    return (
        <>
            <Layout className="layout">
                <Header>
                    <Row>
                        <Col span={22}></Col>
                        <Col span={2}>
                            <div onClick={() => setShowCart(true)}>

                                <Badge size={'small'} count={cartProduct?.length}>
                                    <ShoppingCartOutlined style={{ fontSize: "30px", color: "white" }} />
                                </Badge>
                            </div>
                        </Col>
                    </Row>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div style={{ paddingTop: '20px' }} className="site-layout-content">
                        {
                            showCart ?
                                <CartListingComponent 
                                    cartProduct={cartProduct} 
                                    setCartProduct={setCartProduct}
                                    setShowCart={setShowCart}
                                />
                                : <ProductListingComponent onAddToCart={onAddToCart} />
                        }
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Created by Mahdi 2022</Footer>
            </Layout>
        </>
    );
}

export default App;

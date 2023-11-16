import { useState } from "react";
import { Pagination } from "react-bootstrap"
import { Card } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { Col, Row } from "react-bootstrap"


export default function Products() {

    const [productsData, setProductsData] = useState([]);

    const fecthProductsData = async () => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        await fetch("http://localhost:3001/product", requestOptions)
            .then(response => response.text())
            .then(result => {
                setProductsData(JSON.parse(result));
                console.log(productsData);
            }).catch(error => console.log('error', error));

    }

    console.log(productsData);

    const testData = [
        {
            "imgSrc": "https://m.media-amazon.com/images/I/41OuvqjhaqL.jpg",
            "productName": "Samsung Galaxy ZFlip 5",
            "productDescription": "Điện thoại gập đỉnh nhất cmn thế giới di động",
        },
        {
            "imgSrc": "https://m.media-amazon.com/images/I/41OuvqjhaqL.jpg",
            "productName": "Samsung Galaxy ZFlip 5",
            "productDescription": "Điện thoại gập đỉnh nhất cmn thế giới di động",
        },
        {
            "imgSrc": "https://m.media-amazon.com/images/I/41OuvqjhaqL.jpg",
            "productName": "Samsung Galaxy ZFlip 5",
            "productDescription": "Điện thoại gập đỉnh nhất cmn thế giới di động",
        },
        {
            "imgSrc": "https://m.media-amazon.com/images/I/41OuvqjhaqL.jpg",
            "productName": "Samsung Galaxy ZFlip 5",
            "productDescription": "Điện thoại gập đỉnh nhất cmn thế giới di động",
        }
    ]
    return (
        <div>
            <h1>This is Products page</h1>
            <Row xs={2} md={3} xl={5} className="g-4">
                {
                    productsData.map((item, index) => (
                        <Col key={index}>
                            <Card style={{ width: '18rem'    }}>
                                <Card.Img variant="top" src={item.images_list[0]} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.breadcrumbs}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>

            <Button variant="primary" onClick={fecthProductsData}>Fetch Data</Button>

            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </div>
    )
}
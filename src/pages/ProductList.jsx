import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Table, Dimmer, Loader, Button, Icon } from 'semantic-ui-react'
import ProductService from '../services/ProductService'

export default function ProductList() {
    const [isLoading, setLoading] = useState(true);
    const [products, setProducts] = useState([])

    useEffect(() => {
        let productService = new ProductService()
        productService.getProducts().then(result => {
            setProducts(result.data.data)
            setLoading(false)
        })
    }, [])
    if (isLoading) {
        return (
            <Dimmer active inverted>
                <Loader />
            </Dimmer>
        )
    }
    return (
        <Table celled inverted>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
                    <Table.HeaderCell>Kategori</Table.HeaderCell>
                    <Table.HeaderCell>Açıklama</Table.HeaderCell>
                    <Table.HeaderCell>Stok Adedi</Table.HeaderCell>
                    <Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {
                    products.map(product => (
                        <Table.Row key={product.id}>
                            <Table.Cell><Link to={`/products/${product.id}`}>{product.productName}</Link></Table.Cell>
                            <Table.Cell>{product.category.categoryName}</Table.Cell>
                            <Table.Cell>{product.quantityPerUnit}</Table.Cell>
                            <Table.Cell>{product.unitsInStock}</Table.Cell>
                            <Table.Cell>{product.unitPrice.toFixed(2)} ₺</Table.Cell>
                            <Table.Cell>
                                <Button floated="left" as={Link} color="green" icon={
                                    <Icon.Group>
                                        <Icon name="cart" />
                                        <Icon inverted corner name="add" />
                                    </Icon.Group>
                                } />
                                <Button as={Link} color="teal" icon="edit" />
                                <Button as={Link} color="red" icon="delete" />
                            </Table.Cell>
                        </Table.Row>
                    ))
                }
            </Table.Body>
        </Table>
    )
}

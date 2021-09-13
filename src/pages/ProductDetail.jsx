import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Dimmer, Loader, Segment } from 'semantic-ui-react'
import ProductService from '../services/ProductService'

export default function ProductDetail() {
    let { id } = useParams()
    const [isLoading, setLoading] = useState(true)
    const [product, setProduct] = useState({})

    useEffect(() => {
        let productService = new ProductService()
        productService.getProductById(id).then(result => {
            setProduct(result.data.data)
            setLoading(false)
        })
    }, [id])
    if (isLoading) {
        return (
            <Dimmer active inverted>
                <Loader />
            </Dimmer>
        )
    }
    return (
        <Segment inverted>
            <Card centered>
                <Card.Content>
                    <Card.Header>{product.productName}</Card.Header>
                    <Card.Meta>{product.category.categoryName}</Card.Meta>
                    <Card.Description>{product.quantityPerUnit}</Card.Description>
                </Card.Content>
                <Card.Content extra>{product.unitPrice} ₺</Card.Content>
            </Card>
        </Segment>
    )
}

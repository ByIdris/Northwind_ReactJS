import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { Button, Dropdown, Icon, Label, Menu } from 'semantic-ui-react'

export default function CartSummary() {
    const { cartItems } = useSelector(state => state.cart)

    return (
        <div>
            <Menu.Item>
                <Dropdown item icon="cart" >
                    <Dropdown.Menu>
                        {
                            cartItems.length !== 0 ?
                                cartItems.map(cartItem => (
                                    <Dropdown.Item>
                                        <Label>
                                            {cartItem.quantity}
                                        </Label>
                                        {cartItem.product.productName}
                                        <Button as={Link} color="red" icon={
                                            <Icon.Group>
                                                <Icon name="cart" />
                                                <Icon inverted corner name="remove" />
                                            </Icon.Group>
                                        } />
                                    </Dropdown.Item>
                                )) : <Dropdown.Item disabled text="Sepetiniz Boş!" />
                        }
                        <Dropdown.Divider />
                        <Dropdown.Item as={NavLink} to="/cart">Sepete Git</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>

        </div>
    )
}

import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({ signIn }) {
    return (
        <Menu.Item>
            <Button.Group>
                <Button onClick={signIn} color="green">Giriş Yap</Button>
                <Button color="red">Kayıt Ol</Button>
            </Button.Group>
        </Menu.Item>
    )
}

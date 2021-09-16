import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn({ signOut }) {
    return (
        <Menu.Item>
            <Image avatar src="https://media-exp1.licdn.com/dms/image/C5603AQHDKcy-y4B2Lw/profile-displayphoto-shrink_200_200/0/1629578553462?e=1635984000&v=beta&t=7Jz7Z_VTWXt_ReyN6KGhjVJnLEovmssEVtRP7c2Dqp8" />
            <Dropdown pointing="top left" text="İdris">
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info" />
                    <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    )
}

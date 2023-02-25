import React from 'react'
import { Button,Menu,Typography,Avatar } from 'antd'
import { Link } from 'react-router-dom'
import icon from '../assets/cryptocurrency.png'
import { HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined } from '@ant-design/icons'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size='large'/>
            <Typography.Title level={2} className='logo'>
                <Link to='/'>
                    CryptoMarket
                </Link>
                {/* <Button className='menu-control-container'>

                </Button> */}
            </Typography.Title>
        </div>
        <Menu theme='dark'>
                <Menu.Item icon={<HomeOutlined/>}>
                    <Link to='/'>
                    Home
                    </Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined/>}>
                    <Link to='/cryptocurrencies'>
                        CryptoCurrencies
                    </Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined/>}>
                    <Link to='/exchanges'>
                        Exchanges
                    </Link>
                </Menu.Item>
              
        </Menu>
    </div>
  )
}

export default Navbar
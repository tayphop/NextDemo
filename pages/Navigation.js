import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
export default function Navigation(props) {
    const router = useRouter()
    const [active, setacitve] = useState('Home')
    useEffect(() => {
        console.log(active)
    }, [active])




    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <title>{props.title}</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"></link>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            </Head>


            <nav id="navbar" className="navbar navbar-expand-md fixed-top navbar-dark"
                style={{ backgroundImage: 'linear-gradient(to right, #003c3c , #248b6f)' }}
            >
                <a className="navbar-brand" href="#" onClick={() => setacitve('Home')} > Zhongji Insurance Co.ltd</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className={active === 'Home' ? 'nav-item active ' : 'nav-item'} >
                            <a className="nav-link" href="/#Home" onClick={() => setacitve('Home')}>Home</a>
                        </li>
                        <li className={active === 'Product' ? 'nav-item active' : 'nav-item'}>
                            <a className="nav-link " href="/#Product" onClick={() => setacitve('Product')}>Product</a>
                        </li>
                        <li className={active === 'About' ? 'nav-item active' : 'nav-item'}>
                            <a className="nav-link" href="/#About" onClick={() => setacitve('About')}>About</a>
                        </li>
                        <li className={active === 'Contacts' ? 'nav-item active' : 'nav-item'}>
                            <a className="nav-link" href="/#Contacts" onClick={() => setacitve('Contacts')}>Contacts</a>
                        </li>
                    </ul>
                </div>
            </nav>


        </>
    )

}
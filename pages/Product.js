import React, { useState, useEffect } from 'react';
import { Drawer } from 'antd';
import HomeIn from './products/HomeIn';
import Persionnal from './products/persionnal';
import HelthandPersionnal from './products/HelthandPersionnal';
import Travalin from './products/Travelin';
import TravelOut from './products/TravelOut';
import SmallBusiness from './products/SmallBusiness';
import Construction from './products/Construction';
import Car from './products/Car';
import Property from './products/Property';
import Borrow from './products/Borrow';



export default function Product() {
    const [showDrawer, setshowDrawer] = useState(false)
    const [widthS, setwidths] = useState(0)
    const [showComponentDrower, setshowComponentDrower] = useState('')
    useEffect(() => {
        setwidths(screen.width)
        window.addEventListener('resize', () => {
            console.log(window.innerWidth)
            setwidths(window.innerWidth)
        })
    })
    const data = [
        { name: 'ປະກັນໄພ ເຮືອນ', img: 'ປະກັນໄພເຮືອນ.png' },
        { name: 'ປະກັນໄພ ອຸປະຕິເຫດສ່ວນບຸກຄົນ', img: 'ປະກັນໄພອຸປະຕິເຫດສ່ວນບຸກຄົນ.jpg' },
        { name: 'ປະກັນໄພ ສຸຂະພາບ ແລະ ອຸປະຕິເຫດ', img: 'ປະກັນໄພສຸຂະພາບ.png' },
        { name: 'ປະກັນໄພ ລົດ', img: 'ປະກັນໄພລົດ2.png' },
        { name: 'ປະກັນໄພ ທຸລະກິດຂະໜາດນ້ອຍ', img: 'ປະກັນໄພທຸະກິດຂະໜາດນ້ອຍ.jpg' },
        { name: 'ປະກັນໄພ ນັກທ່ອງທ່ຽວເຂົ້າມາລາວ', img: 'ປະກັນໄພທ່ອງທ່ຽວ.jpg' },
        { name: 'ປະກັນໄພ ນັກທ່ອງທ່ຽວອອກໄປຕ່າງປະເທດ', img: 'ປະກັນໄພທ່ອງທ່ຽວໄປຕ່າງປະເທດ.jpg' },
        { name: 'ປະກັນໄພ ທຸລະກິດຂະໜາດນ້ອຍ', img: 'ປະກັນໄພທຸະກິດຂະໜາດນ້ອຍ.jpg' },
        { name: 'ປະກັນໄພ ທຸກຄວາມສ່ຽງຂອງການກໍ່ສ້າງ', img: 'ປະກັນໄພທຸກຄວາມສ່ຽງຂອງການກໍ່ສ້າງ.jpg' },
        { name: 'ປະກັນໄພ ປະກັນໄພທຸກຄວາມສ່ຽງຂອງຊັບສິນ', img: 'ປະກັນໄພທຸກຄວາມສ່ຽງຂອງຊັບສິນ.jpg' },
        { name: 'ປະກັນໄພ ຜູູ້ກູ້ຢືມ', img: 'ປະກັນໄພຜູ້ກູ້ຢືມ.jpg' },
    ]
    return (
        <>

            <div className="row justify-content-center text-center"
                style={{ marginTop: 10, boxShadow: "1px 1px  10px  #ccd1d1" }}
            >
                <h3 style={{ paddingTop: 30 }} >ຜະລິດຕະພັນທັງໝົດທີ່ພວກເຮົາມີ</h3>
                <div
                    className="col-10"
                    style={{
                        paddingBottom: 30,
                        paddingLeft: 30,
                        paddingRight: 30
                    }}>
                    <div className='row'>


                        {
                            data.map((v, k) => {

                                return (
                                    < div key={k} className='col-md-3'
                                    // data-aos="fade-up"
                                    // data-aos-once="true"
                                    >
                                        <div className="card" style={{ marginTop: 10, boxShadow: "1px 1px  10px  #ccd1d1" }}
                                        >
                                            {/* <div className="card-header">
                                               
                                            </div> */}
                                            <div style={{
                                                paddingTop: 15,
                                                paddingLeft: 15,
                                                paddingRight: 15
                                            }}>
                                                <img className="card-img-top" src={"images/product/" + v.img} alt="Card image cap" />
                                                <div className="card-body">
                                                    <p className="card-text" style={{ fontSize: 20 }}>
                                                        {v.name}
                                                    </p>

                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <button className='btn btn-info' onClick={() => {
                                                    setshowDrawer(true)
                                                    setshowComponentDrower(v.name)
                                                }} appearance="primary">
                                                    ລາຍລະອຽດ
                                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )

                            })
                        }


                        <Drawer
                            title="Basic Drawer"
                            placement="left"
                            closable={false}
                            onClose={() => setshowDrawer(false)}
                            visible={showDrawer}
                            width={widthS >= 800 ? 720 : "100vw"}
                        >
                            <button
                                style={{ position: 'absolute', bottom: 10, right: 20 }}
                                className='btn btn-link' onClick={() => setshowDrawer(false)} ><i style={{ fontSize: 35, color: '#003c3c' }} className="fas fa-arrow-circle-left"></i></button>
                            {
                                productComponet()
                            }
                        </Drawer>

                    </div>
                </div>
            </div>

        </>
    )


    function productComponet() {
        if (showComponentDrower === 'ປະກັນໄພ ເຮືອນ') {
            return <HomeIn />
        }
        if (showComponentDrower === 'ປະກັນໄພ ອຸປະຕິເຫດສ່ວນບຸກຄົນ') {
            return <Persionnal />
        }
        if (showComponentDrower === 'ປະກັນໄພ ສຸຂະພາບ ແລະ ອຸປະຕິເຫດ') {
            return <HelthandPersionnal />
        }
        if (showComponentDrower === 'ປະກັນໄພ ນັກທ່ອງທ່ຽວເຂົ້າມາລາວ') {
            return <Travalin />
        }
        if (showComponentDrower === 'ປະກັນໄພ ນັກທ່ອງທ່ຽວອອກໄປຕ່າງປະເທດ') {
            return <TravelOut />
        }
        if (showComponentDrower === 'ປະກັນໄພ ທຸລະກິດຂະໜາດນ້ອຍ') {
            return <SmallBusiness />
        }
        if (showComponentDrower === 'ປະກັນໄພ ທຸກຄວາມສ່ຽງຂອງການກໍ່ສ້າງ') {
            return <Construction />
        }
        if (showComponentDrower === 'ປະກັນໄພ ລົດ') {
            return <Car />
        }
        if (showComponentDrower === 'ປະກັນໄພ ປະກັນໄພທຸກຄວາມສ່ຽງຂອງຊັບສິນ') {
            return <Property />
        }
        if (showComponentDrower === 'ປະກັນໄພ ຜູູ້ກູ້ຢືມ') {
            return <Borrow />
        }
    }

}

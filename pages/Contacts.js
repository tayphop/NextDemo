import Iframe from 'react-iframe'

import React, { useEffect, useState } from 'react'

export default function Contacts() {
    const [width, setwidth] = useState(0)
    useEffect(() => {
        setwidth(window.innerWidth)
    })
    return (
        <>

            <div className="row" style={{ padding: 30, boxShadow: "1px 1px  10px  #ccd1d1" }}>
                <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    data-aos-once="true"
                    className="col-md-4"
                    style={{ paddingLeft: 20, color: '#003c3c' }}
                >
                    <h2>ຕິດຕໍ່ພວກເຮົາ</h2>
            ບໍລິສັດ ຈົງຈີ ປະກັນໄພ ຈຳກັດ ຜູ້ດຽວ<br />
              ສຳນັກງານໃຫຍ່: ບ້ານສະພັງເມືກ ເມືອງໄຊທານີ ນະຄອນຫຼວງວຽງຈັນ<br />
             ມື້ທຳການ ຈັນ-ສຸກ
              ເວລາທຳການ 8:00 ນາທີ - 17:000 ນາທີ<br />
             ໂທລະສັບ +856 21 731 116<br />
               ສາຍດ່ວນການຕະຫຼາດ +856 20 77 881 919<br />
             ສາຍດ່ວນອຸປະຕິເຫດ +856 20 57 999 922-33<br />
                </div>




                <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    data-aos-once="true"
                    className="col-md-8">
                    <Iframe
                        url="https://maps.google.com/maps?q=Zhongji%20Insurance%20%E4%B8%AD%E7%A8%B7%E4%BF%9D%E9%99%A9%20%E0%BA%88%E0%BA%BB%E0%BA%87%E0%BA%88%E0%BA%B5%20%E0%BA%9B%E0%BA%B0%E0%BA%81%E0%BA%B1%E0%BA%99%E0%BB%84%E0%BA%9E%20ZJI&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width={'100%'}
                        height={((width / 12) * 8) / 3}

                        className="myClassname"
                        display="initial"
                        position="relative"
                    />
                </div>
            </div>


        </>
    )
}

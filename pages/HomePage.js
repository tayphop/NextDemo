import React, { useState } from 'react'
export default function HomePage() {
    const [url, seturl] = useState('')
    function modalImage(nameImg) {
        seturl(nameImg)
    }
    return (
        <>

            <div className="row" style={{ padding: 30, boxShadow: "1px 1px  10px  #ccd1d1" }}>
                {/* <div className="row justify-content-center"> */}
                <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    data-aos-once="true"
                    className="col-md-5"

                    style={{
                        //  boxShadow: "1px 1px  5px  #ccd1d1",
                    }}>
                    <img className="img-fluid" src="images/logo.png" />
                </div>
                <div className="col-md-7" style={{ padding: 30 }}>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ບໍລິສັດ ຈົງຈີ ປະກັນໄພ ຈໍາກັດຜູ້ດຽວ ໄດ້ຮັບການສ້າງຕັ້ງຂຶ້ນໃນປີ 2018, ບົນພື້ນຖານເປັນບໍລິສັດ ທີ່ໄດ້ຮັບການລົງທຶນຈາກ ກຸ່ມບໍລິສັດ ທຽນຈິງ ຈົງຈີ ຫົງຊິງ ທີ່ມາຈາກ ສປ ຈີນ.</p>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ໃນປີ 2014 ກະຊວງ ອຸດສາຫະກໍາ ແລະ ການຄ້າ ເຫັນດີອະນຸຍາດໃຫ້ສ້າງຕັ້ງ ບໍລິສັດ ຈົງຈີ ປະກັນໄພ ຈໍາກັດຜູ້ດຽວ ສ້າງຂຶ້ນໃນປີ 2017 ໄດ້ຮັບໃບອະນຸຍາດດໍາເນີນທຸລະກິດປະກັນໄພທົ່ວໄປຈາກ ກະຊວງ ການເງິນ.</p>

                    <div className="row">
                        <div
                            data-aos="fade-up"
                            data-aos-once="true"
                            className='col-md-4'>
                            <div className="card" style={{ marginTop: 10, boxShadow: "1px 1px  10px  #ccd1d1" }}>

                                <div style={{ padding: 5 }}>
                                    <img data-toggle="modal" data-target="#image" onClick={() => modalImage('images/ໃບອະນຸຍາດດຳເນີນທຸລະກິດ.png')} className="card-img-top" src="images/ໃບອະນຸຍາດດຳເນີນທຸລະກິດ.png" alt="Card image cap" />
                                    <hr />
                                </div>
                            </div>
                            <div className="card-footer">
                                <h4 className='text-center'> ໃບອະນຸຍາດດຳເນີນທຸລະກິດ</h4>
                            </div>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-once="true"
                            className='col-md-4'>
                            <div className="card" style={{ marginTop: 10, boxShadow: "1px 1px  10px  #ccd1d1" }}>

                                <div style={{ padding: 5 }}>
                                    <img data-toggle="modal" data-target="#image" onClick={() => modalImage('images/ໃບທະບຽນວິສາຫະກິດ.png')} className="card-img-top" src="images/ໃບທະບຽນວິສາຫະກິດ.png" alt="Card image cap" />
                                    <hr />
                                </div>
                            </div>
                            <div className="card-footer">
                                <h4 className='text-center'>  ໃບທະບຽນວິສາຫະກິດ</h4>
                            </div>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-once="true"
                            className='col-md-4'>
                            <div className="card" style={{ marginTop: 10, boxShadow: "1px 1px  10px  #ccd1d1" }}>

                                <div style={{ padding: 5 }}>
                                    <img data-toggle="modal" data-target="#image" onClick={() => modalImage('images/ໃບສະມາຊິກສະມາຄົມປະກັນໄພ.png')} className="card-img-top" src="images/ໃບສະມາຊິກສະມາຄົມປະກັນໄພ.png" alt="Card image cap" />
                                    <hr />
                                </div>
                            </div>
                            <div className="card-footer">
                                <h4 className='text-center'> ໃບສະມາຊິກສະມາຄົມປະກັນໄພ</h4>
                            </div>
                        </div>
                    </div>

                    <p style={{ paddingTop: 30 }}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ບໍລິສັດພວກເຮົາໄດ້ມີການຮ່ວມມືກັບ ບໍລິສັດ ປະກັນໄພ QBE ທີ່ເປັນບໍລິສັດປະກັນໄພທຸລະກິດຊັ້ນນຳຂອງໂລກ, ບໍລິສັດ ປະກັນໄພ AVIVA ທີ່ເປັນບໍລິສັດປະກັນໄພຄົບວົງຈອນ ທີ່ໃຫຍ່ກວ່າໝູ່ໃນປະ ເທດ ອັງກິດ ແລະ ບໍລິສັດ ທີ່ປຶກສາ Wills Towers Watson ເພື່ອພັດທະນາບໍລິສັດພວກເຮົາໃຫ້ເປັນ ບໍລິສັດ ປະກັນໄພ ທຸລະກິດ ທີ່ມີຊື່ສຽງໃນ ສປປ ລາວ, ສະໜອງການບໍລິການທີ່ຊໍານິຊຳນານ ແລະ ມີຄວາມລະອຽດຮອບຄອບ ໃຫ້ແກ່ວິສາຫະກິດຂອງ ລາວ, ຈີນ ກໍຄືຂອງທົ່ວໂລກ.  </p>
                    <div className='row text-center'>
                        <div className="col-sm-4"
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000"
                            data-aos-once="true"
                        >
                            <div className="card" style={{ marginTop: 10, boxShadow: "1px 1px  10px  #ccd1d1" }}>
                                <div className="card-header">
                                    <h4 className='text-center'>  ບໍລິສັດ ປະກັນໄພ QBE</h4>
                                </div>
                                <div style={{ padding: 15 }}>
                                    <img className="card-img-top" src="images/QBE.png" alt="Card image cap" />
                                    <hr />
                                    <div className="card-body">

                                        <p className="card-text">
                                            ບໍລິສັດ QBE ເປັນບໍລິສັດປະກັນໄພ ແລະ ປະກັນໄພຕໍ່ ອັນດັບ ທີ 20 ຂອງໂລກ ສ້າງຕັ້ງໃນປະເທດ ອົດສະຕຣາລີ ມີອາຍຸການສ້າງຕັ້ງມາຫລາຍກວ່າ 130 ປີ.
                                            ບໍລິສັດ QBE(ສິງກະໂປ) ສ້າງຕັ້ງໃນປີ 1891 ສະໜອງຜະລິດຕະພັນ ແລະ ການບໍລິການ ໃຫ້ແກ່ວິສາຫະກິດໃນເຂດອາຊີ-ປາຊີຟິກ.
                                            ບໍລິສັດ QBE(ສິງກະໂປ) ເປັນຄູ່ຮ່ວມສັນຍາໃນການສະ   ໜອງຜະລິດຕະພັນ ປະກັນໄພທຸລະກິດ ແລະ ການບໍລິການປະກັນໄພຕໍ່ໃຫ້ພວກເຮົາ.
                                    </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4"
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000"
                            data-aos-once="true"
                        >
                            <div className="card" style={{ marginTop: 10, boxShadow: "1px 1px  10px  #ccd1d1" }}
                            >
                                <div className="card-header">
                                    <h4 className='text-center'>ບໍລິສັດ ປະກັນໄພ AVIVA</h4>
                                </div>
                                <div style={{ padding: 15 }}>
                                    <img className="card-img-top" src="images/AVIVA.png" alt="Card image cap" />
                                    <hr />
                                    <div className="card-body">

                                        <p className="card-text">
                                            ບໍລິສັດ AVIVA ເປັນບໍລິສັດປະກັນໄພຄົບວົງຈອນທີ່ໃຫຍ່ກວ່າໝູ່ໃນປະເທດອັງກິດ, ມີປະສົບການປະກັນໄພມາຫຼາຍກວ່າ 300ປີ. ສະໜອງບໍລິການປະກັນໄພຊີວິດ, ປະກັນໄພທົ່ວໄປ, ປະກັນໄພອຸປະຕິເຫດ, ປະກັນໄພສຸຂະພາບ ແລະ ການຄຸ້ມຄອງຊັບສິນໃຫ້ລູກຄ້າໃນທົ່ວໂລກ.
                                            ບໍລິສັດ AVIVA(ສິງກະໂປ) ໄດ້ໃຫ້ການສະໜັບສະໜູນປະກັນໄພຮອບດ້ານໃຫ້ແກ່ພວກເຮົາລວມມີການປະກັນໄພບຸກຄົນ ແລະ ການປະກັນໄພທຸລະກິດ.
                                    </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4"
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000"
                            data-aos-once="true"
                        >
                            <div className="card" style={{ marginTop: 10, boxShadow: "1px 1px  10px  #ccd1d1" }}>
                                <div className="card-header">
                                    <h4 className='text-center'>  ບໍລິສັດ ທີ່ປຶກສາ Wills Towers Watson</h4>
                                </div>
                                <div style={{ padding: 15 }}>
                                    <img className="card-img-top" src="images/Wills.png" alt="Card image cap" />
                                    <hr />
                                    <div className="card-body">
                                        <p className="card-text">
                                            ບໍລິສັດ ທີ່ປຶກສາ Wills Towers Watson ມີທຸລະກິດໃນທົ່ວໂລກ ສະໜອງບໍລິການຮອບດ້ານໃຫ້ແກ່ພວກເຮົາ ເພື່ອ ຄຸ້ມຄອງຄວາມສ່ຽງ,
                                            ຮັບປະກັນໃຫ້ບໍລິສັດພວກເຮົາມີການພັດທະນາຢ່າງໝັ້ນຄົ້ງ ແລະ ເປີດກວ້າງເນື້ອໃນການຮ່ວມມືຂອງທຸລະກິດ.
                                    </p>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="image" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <img
                            className="img-fluid"
                            src={url}
                            alt="Chania" />
                    </div>
                </div>
            </div>




        </>
    )
}

import { useEffect, useState } from "react";
import './mainContent.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
import { getDataFromDb } from "../../config/Firebasemethods";
import parse from 'html-react-parser';


function MainContent() {

    const [display, setDisplay] = useState(true)
    const [getid, setId] = useState();
    const [arr,setarr] = useState([]);

    const navigate = useNavigate();

    // let arr = [
    //     {
    //         "id": 1,
    //         "image":"https://hips.hearstapps.com/hmg-prod/images/2023-mitsubishi-outlander-phev-117-1664044956.jpg?crop=0.723xw:0.813xh;0.191xw,0.161xh&resize=640:*",
    //         "car": "Mitsubishi",
    //         "car_model": "Montero",
    //         "car_color": "Yellow",
    //         "car_model_year": 2002,
    //         "car_vin": "SAJWJ0FF3F8321657",
    //         "price": "$2814.46",
    //         "availability": false
    //     },
    //     {
    //         "id": 2,
    //         "image":"https://uploads.vw-mms.de/system/production/images/vwn/075/980/images/bb7baec2ff01596a5bf00793b11a7e41c6c8c368/DB2023AU00177_web_1600.jpg?1678883122",
    //         "car": "Volkswagen",
    //         "car_model": "Passat",
    //         "car_color": "Maroon",
    //         "car_model_year": 2008,
    //         "car_vin": "WBANV9C51AC203320",
    //         "price": "$1731.98",
    //         "availability": false
    //     },
    //     {
    //         "id": 3,
    //         "image":"https://upload.wikimedia.org/wikipedia/commons/0/0b/1995_Saturn_SL1_maroon%2C_front_right.jpg",
    //         "car": "Saturn",
    //         "car_model": "L-Series",
    //         "car_color": "Red",
    //         "car_model_year": 2003,
    //         "car_vin": "1HGCR6F34EA246317",
    //         "price": "$2238.35",
    //         "availability": true
    //     },
    //     {
    //         "id": 4,
    //         "image":"https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/2023/wrangler/capability/desktop/MY23-Wrangler-Capability-Main-Hero-Desktop.jpg",
    //         "car": "Jeep",
    //         "car_model": "Compass",
    //         "car_color": "Violet",
    //         "car_model_year": 2012,
    //         "car_vin": "4USBT33454L511606",
    //         "price": "$2732.99",
    //         "availability": false
    //     },
    //     {
    //         "id": 5,
    //         "image":"https://hips.hearstapps.com/hmg-prod/images/2023-mitsubishi-outlander-phev-117-1664044956.jpg?crop=0.723xw:0.813xh;0.191xw,0.161xh&resize=640:*",
    //         "car": "Mitsubishi",
    //         "car_model": "Lancer Evolution",
    //         "car_color": "Purple",
    //         "car_model_year": 2002,
    //         "car_vin": "WAU2GBFCXDN339713",
    //         "price": "$3849.47",
    //         "availability": false
    //     },
    //     {
    //         "id": 6,
    //         "image":"https://image.cnbcfm.com/api/v1/image/105232079-2018-Chevrolet-Camaro-ZL1-033.jpg?v=1679502991",
    //         "car": "Chevrolet",
    //         "car_model": "Suburban",
    //         "car_color": "Indigo",
    //         "car_model_year": 2009,
    //         "car_vin": "WAUSH98E96A592763",
    //         "price": "$1252.30",
    //         "availability": false
    //     },
    //     {
    //         "id": 7,
    //         "image":"https://www.mallofgeorgiachryslerdodgejeep.com/blogs/1534/wp-content/uploads/2022/04/2022-Dodge-Challenger-02.jpg",
    //         "car": "Dodge",
    //         "car_model": "Ram Van B350",
    //         "car_color": "Yellow",
    //         "car_model_year": 1994,
    //         "car_vin": "KNADH4A37A6919967",
    //         "price": "$1762.42",
    //         "availability": true
    //     },
    //     {
    //         "id": 8,
    //         "image":"https://imgd.aeplcdn.com/0x0/n/cw/ec/48082/d-max-exterior-left-rear-three-quarter-6.jpeg?isig=0",
    //         "car": "Isuzu",
    //         "car_model": "Ascender",
    //         "car_color": "Teal",
    //         "car_model_year": 2004,
    //         "car_vin": "5GTMNGEE8A8713093",
    //         "price": "$1081.40",
    //         "availability": true
    //     },
    //     {
    //         "id": 9,
    //         "image":"https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/all-models/m-performance-automobile/i7-m70-xdrive/bmw-i7-m70-stage-teaser.png.asset.1681387862051.png",
    //         "car": "BMW",
    //         "car_model": "6 Series",
    //         "car_color": "Purple",
    //         "car_model_year": 2008,
    //         "car_vin": "5TDBY5G16DS675822",
    //         "price": "$1258.99",
    //         "availability": true
    //     },
    //     {
    //         "id": 10,
    //         "image":"https://www.goodwood.com/globalassets/.road--racing/road/news/2020/8-august/best-mitsubishis/seven-best-mitsubishis-ever-made-6-mitsubishi-evo-vii-tommi-makinen-goodwood-31072020.jpg?crop=(0,135,2600,1598)&width=1600",
    //         "car": "Mitsubishi",
    //         "car_model": "GTO",
    //         "car_color": "Purple",
    //         "car_model_year": 1994,
    //         "car_vin": "JM1NC2PFXE0140518",
    //         "price": "$3822.92",
    //         "availability": false
    //     },
    //     {
    //         "id": 11,
    //         "image":"https://www.gannett-cdn.com/presto/2021/07/21/PDTF/2a3ada4b-344c-4096-853a-1300e4a5e97a-2021-Mazda6_Carbon-Edition_01.jpg",
    //         "car": "Mazda",
    //         "car_model": "Mazda5",
    //         "car_color": "Red",
    //         "car_model_year": 2010,
    //         "car_vin": "WAUNE78P18A342660",
    //         "price": "$3963.20",
    //         "availability": true
    //     },
    //     {
    //         "id": 12,
    //         "image":"https://www.gannett-cdn.com/presto/2021/07/21/PDTF/2a3ada4b-344c-4096-853a-1300e4a5e97a-2021-Mazda6_Carbon-Edition_01.jpg",
    //         "car": "Audi",
    //         "car_model": "Q7",
    //         "car_color": "Pink",
    //         "car_model_year": 2012,
    //         "car_vin": "WA1WYBFE2AD448505",
    //         "price": "$1144.27",
    //         "availability": true
    //     },
    //     {
    //         "id": 13,
    //         "image":"https://www.gannett-cdn.com/presto/2021/07/21/PDTF/2a3ada4b-344c-4096-853a-1300e4a5e97a-2021-Mazda6_Carbon-Edition_01.jpg",
    //         "car": "Mercedes-Benz",
    //         "car_model": "SL-Class",
    //         "car_color": "Aquamarine",
    //         "car_model_year": 1989,
    //         "car_vin": "4A4AP3AU8FE713946",
    //         "price": "$1386.49",
    //         "availability": true
    //     },
    //     {
    //         "id": 14,
    //         "image":"https://www.gannett-cdn.com/presto/2021/07/21/PDTF/2a3ada4b-344c-4096-853a-1300e4a5e97a-2021-Mazda6_Carbon-Edition_01.jpg",
    //         "car": "Volvo",
    //         "car_model": "C70",
    //         "car_color": "Red",
    //         "car_model_year": 2012,
    //         "car_vin": "WAUHGBFC9DN768366",
    //         "price": "$1366.96",
    //         "availability": true
    //     },
    //     {
    //         "id": 15,
    //         "image":"https://www.gannett-cdn.com/presto/2021/07/21/PDTF/2a3ada4b-344c-4096-853a-1300e4a5e97a-2021-Mazda6_Carbon-Edition_01.jpg",
    //         "car": "GMC",
    //         "car_model": "Envoy XL",
    //         "car_color": "Green",
    //         "car_model_year": 2006,
    //         "car_vin": "WA1AV74L67D649365",
    //         "price": "$1221.46",
    //         "availability": false
    //     },
    //     {
    //         "id": 16,
    //         "image":"https://www.gannett-cdn.com/presto/2021/07/21/PDTF/2a3ada4b-344c-4096-853a-1300e4a5e97a-2021-Mazda6_Carbon-Edition_01.jpg",
    //         "car": "GMC",
    //         "car_model": "Vandura G3500",
    //         "car_color": "Teal",
    //         "car_model_year": 1996,
    //         "car_vin": "1FMJK2A5XAE576485",
    //         "price": "$1877.63",
    //         "availability": true
    //     },
    //     {
    //         "id": 17,
    //         "image":"https://www.gannett-cdn.com/presto/2021/07/21/PDTF/2a3ada4b-344c-4096-853a-1300e4a5e97a-2021-Mazda6_Carbon-Edition_01.jpg",
    //         "car": "Cadillac",
    //         "car_model": "CTS",
    //         "car_color": "Pink",
    //         "car_model_year": 2003,
    //         "car_vin": "WAUVC68E02A369838",
    //         "price": "$2646.55",
    //         "availability": true
    //     },
    //     {
    //         "id": 18,
    //         "image":"https://www.gannett-cdn.com/presto/2021/07/21/PDTF/2a3ada4b-344c-4096-853a-1300e4a5e97a-2021-Mazda6_Carbon-Edition_01.jpg",
    //         "car": "BMW",
    //         "car_model": "X5 M",
    //         "car_color": "Mauv",
    //         "car_model_year": 2012,
    //         "car_vin": "WA1YD54B63N613712",
    //         "price": "$2076.03",
    //         "availability": true
    //     },
    //     {
    //         "id": 19,
    //         "image":"https://www.gannett-cdn.com/presto/2021/07/21/PDTF/2a3ada4b-344c-4096-853a-1300e4a5e97a-2021-Mazda6_Carbon-Edition_01.jpg",
    //         "car": "Dodge",
    //         "car_model": "Viper",
    //         "car_color": "Turquoise",
    //         "car_model_year": 1999,
    //         "car_vin": "WAUMF98P66A420495",
    //         "price": "$1323.48",
    //         "availability": true
    //     },
    //     {
    //         "id": 20,
    //         "image":"https://www.gannett-cdn.com/presto/2021/07/21/PDTF/2a3ada4b-344c-4096-853a-1300e4a5e97a-2021-Mazda6_Carbon-Edition_01.jpg",
    //         "car": "Ford",
    //         "car_model": "Taurus",
    //         "car_color": "Mauv",
    //         "car_model_year": 2002,
    //         "car_vin": "WAUUL58E15A338821",
    //         "price": "$1801.89",
    //         "availability": false
    //     },

    // ]

    let detailCard = (i) => {
        console.log(i);
        setDisplay(false);
        setId(i)

    }

    // const getDataFromApi = () => {
    //     Get('/api/cars/').then((res) => {
    //         console.log(res);
    //     }).catch((x, i) => {

    //     })
    // }


    const getData = () => {
        getDataFromDb('cars').then((res) => {
            // setarr(res)
            setarr(Object.values(res))
            // console.log(res,"llkkk");
        }).catch((x, i) => {

        })
    }

    useEffect(() => {
        getData();
    }, [])

    const bookNow = (e) =>{
            console.log("hello");
            // console.log(e);
            navigate('book-now',{state:e});
    }

    return (
        display ?
            <div style={{ textAlign: "center" }}>
                {arr.map((x, i) => {
                    return (
                        <div className="productsCard" key={i} onClick={() => { detailCard(i) }} >
                            <div>
                                {parse(x.img)}
                                <div className="title">
                                    <b>Car :</b>{x.car} <br />
                                  <b> Model : </b>{x.model} <br />
                                   <b>Color :</b> {x.color} <br />
                                   <b>Condition :</b> {x.type}
                                </div>
                                <br/>
                                <b> <span>Rs: {x.rent}</span></b>
                                <br/><br/>
                                {/* <div className="btn" > <button>Book Now</button></div> */}
                            </div>
                        </div>)
                })}

            </div> :

            <div className="mainDetails">
                <Container fluid="md" >
                    <Row >
                        <Col><br/><br/>{parse(arr[getid].img)}</Col>
                        <Col className="mid" >
                            <div className="closebtn"><button onClick={() => { setDisplay(true) }} >X</button></div>
                            {/* <h2>{arr[getid].id}</h2> */}
                            <h2 style={{textTransform:"uppercase"}}>{arr[getid].car} , {arr[getid].model}</h2>
                            <Row>
                                <Col sm={12} md={6}><h5><b>Color :</b> {arr[getid].color}</h5></Col>
                                <Col sm={12} md={6}><h5><b>Model : </b>{arr[getid].model}</h5></Col>
                                <Col sm={12} md={6}><h5><b>Car Type : </b>{arr[getid].type}</h5></Col>
                                <Col sm={12} md={6}><h5><b>Car Ac :</b> {arr[getid].ac}</h5></Col>
                                <Col sm={12} md={6}><h5><b>Car Blutooth :</b> {arr[getid].bluetooth}</h5></Col>
                                <Col sm={12} md={6}><h5><b>Usb Port :</b> {arr[getid].usbport}</h5></Col>
                                <Col sm={12} md={6}><h5><b>GPS :</b> {arr[getid].gps}</h5></Col>
                                <Col sm={12} md={6}><h5><b>Availability : </b>{arr[getid].availability == false ? "No": "Yes"}</h5></Col>
                            </Row>
                           
                            
                            
                            
                            
                            
                            
                            <h2 className="price"><b>Rs:{arr[getid].rent}</b></h2>
                            <div className="btnMain" onClick={()=>{bookNow(arr[getid])}}> <button>Book Now</button></div>
                       
                        </Col>

                    </Row>
                </Container>
            </div>
    )
}

export default MainContent;
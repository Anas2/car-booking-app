
import weblogo from '../images/carlogo.png'
import ae from '../images/ae.svg'
import './navbar.css'
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Generic_Login from '../../Components/Generic_Login';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getDataFromDb } from '../../config/Firebasemethods'
import HTMLReactParser from 'html-react-parser'
import { CheckUser } from "../../config/Firebasemethods";
import SettingsIconMu from '@mui/icons-material/Settings';
import { Button } from 'react-bootstrap'
import { signOutUser } from '../../config/Firebasemethods'

function NavBar() {

  const navigate = useNavigate();
  const [arr,setarr] = useState([]);
  const LocationData = useLocation().state;
  console.log(LocationData);

  const [searchFromArr, setSearch] = useState([])
  const [userLogin, setUserLogin] = useState(false)

  const inputFromUser = () => {

    setSearch([])
    

  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // 👇 Get input value
      const keyword = event.target.value;
      const filtered = arr.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(keyword)));

      setSearch(filtered);
    }
  };
  const toLogin = ()=>{
    navigate('login');
  }

  const getData = () => {
    getDataFromDb('cars').then((res) => {
        // setarr(res)
        setarr(Object.values(res))
        // console.log(res,"llkkk");
    }).catch((x, i) => {

    })
}

  const checkUserLogin = ()=>{
     CheckUser().then((res)=>{
      console.log(res)
      setUserLogin(true);
      
    }).catch((err)=>{console.log(err)})

  }

  const logOut = ()=>{
    signOutUser();
  }

useEffect(() => {
  checkUserLogin();
    getData();
}, [])

  return (

    <div className="topnav">
      <a href="/"><img src={weblogo} width="80px" /></a>
      <a href="/" style={{ fontSize: '17px',marginTop:"10px" }}><img src={ae} />Deliver To Dubia</a>
      <div className="search-container">
          <input type="text" placeholder="What you are looking for?" name="search" onChange={inputFromUser} onKeyDown={handleKeyDown} />
      </div>
      <div className='lastOfNav'>
        <div>{userLogin == true  ? <div><Button className='btn-danger' onClick={logOut} >Logout</Button></div> :  <div style={{marginTop:"6px"}}><span onClick={toLogin} >Sign in <img src='https://z.nooncdn.com/s/app/com/noon/icons/user_thin.svg' width={'16px'} /></span></div> }</div> &nbsp; |
        {/* <div>As</div> */}
        {/* <span>العربية</span> */}
        {/* <span>|</span> */}
        {/* <CRProfile data={LocationData} profileName={LocationData.fName} optionsArray={optionsArray} /> */}
        {/* {userLogin == true ? <span> Logout </span> : <span onClick={toLogin}>Sign in <img src='https://z.nooncdn.com/s/app/com/noon/icons/user_thin.svg' width={'16px'} /></span>} */}
        {/* <span >|</span> */}
        <span>Cart <img src='https://z.nooncdn.com/s/app/com/noon/icons/cart.svg' width={'20px'} /> </span>
      </div>
      <br />
      <br />
      <br />
      <div>
        {
          searchFromArr == [] ? true : searchFromArr.map((x, i) => {
            return (

              <div key={i}>
                <Container className='searchContainer'>
                  <Row>
                    <Col className='col search left'>
                      {HTMLReactParser(x.img)}
                      {/* <img src={x.img} width="100px" /> */}
                    </Col>
                    <Col  className='col right'>
                      <h6>{x.car}</h6>
                      <h6> Rs : {x.rent}</h6>
                      <div className="navbtn"> <button>Book Now</button></div>
                    </Col>
                  </Row>
                </Container>
              </div>
            )
          })
        }</div>
    </div>


  )

}

export default NavBar;
import './categories.css'

function categories() {
    return (
        <div className="mainCat">
            <div className='allCat' >
                {/* <h5>All Categories</h5> */}
                {/* <select style={{border:"none", backgroundColor:"white"}}>
                    <option value="0">All Categories</option>
                    <option value="1">Audi</option>
                    <option value="2">BMW</option>
                    <option value="3">Citroen</option>
                    <option value="4">Ford</option>
                    <option value="5">Honda</option>
                    <option value="6">Jaguar</option>
                    <option value="7">Land Rover</option>
                    <option value="8">Mercedes</option>
                    <option value="9">Mini</option>
                    <option value="10">Nissan</option>
                    <option value="11">Toyota</option>
                    <option value="12">Volvo</option>
                    
                </select> */}
                <ul>
                    <li>Used Cars</li>
                    <li>New Cars</li>
                    <li>Bikes</li>
                    <li>Blog</li>
                    {/* <li>beauty & fragrance</li>
                    <li>baby & toys</li>
                    <li>sports</li>
                    <li>bestsellers</li>
                    <li>sell on moon</li> */}
                </ul>
            </div>
        </div>
    )
}
export default categories;
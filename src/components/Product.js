import Chart from './Chart';
import { Link } from 'react-router-dom'
import {productData} from '../dummyData';
import { Publish } from '@material-ui/icons';

const Product = () => {
    return (
        <div className="product">
            <div className="productTitleContainer">
            <h1 className="productTitle">product</h1>
            <Link to="/products/new">
                <button className="productAddBtn">Create</button>
            </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Perfomance"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="/airpods.jpeg" alt="product" className="productInfoImg" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfValue">125,000 RWF</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">instock:</span>
                            <span className="productInfValue">no</span>
                        </div>

                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form  className="productForm">
                    <div className="productFormLeft">
                        <label>Produc Name</label>
                        <input type="text" name="" placeholder="Apple Airpods" />
                        <label>In stock</label>
                        <select name="instock" id="instock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="/airpods.jpeg" alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish/>
                            </label>
                            <input type="file"  id="file" style={{display:'none'}} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product

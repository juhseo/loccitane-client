import { API_URL } from "../config/constants";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./detail.scss";
function ProductView(){
    const [ product, setProduct ] = useState(null);
    const param = useParams();
    const navigate = useNavigate();
    const { id } = param;
    useEffect(()=>{
        axios.get(
            `${API_URL}/products/${id}`
            ).then(function(result){
                setProduct(result.data.product);
                console.log(result.data);
            })
            .catch(function(error){
                console.log(error);
            })
        },[]);
        const productDel = ()=>{
            axios.delete(`${API_URL}/products/${id}`)
            .then(function(result){
                console.log("삭제되었습니다.");
                navigate(-1);
            })
            .catch(function(error){
                console.log(error);
            })
        }
        if(product == null){
            return <div>상품정보를 받고있습니다....</div>
        }
        return (
            <div className="innerCon" id="detail">
                <div id="top">
                    <div id="left">
                        <h1>{product.name}</h1>
                        <p>세트 구성</p>
                        <p>어쩌구저쩌구</p>
                    </div>
                    <div id="mid">
                        <img src={product.imageUrl} alt="제품" />
                    </div>
                    <div id="rig">
                        <div id="rig_top">
                            <table>
                                <tr className="tab_price">
                                    <td>{product.price}</td>
                                </tr>
                                <tr className="tab_num">
                                    <td>수량</td>
                                    <td>
                                        <select name="수량">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                        </select>
                                    </td>
                                </tr>
                            </table>
                            <p className="pro_price">₩{product.price}</p>
                            <div className="add">장바구니 담기</div>
                        </div>
                        <div id="rig_btm">
                            <p>무료 배송</p>
                            <p>위시리스트에 추가하기</p>
                            <p>제품 SNS에 공유하기</p>
                        </div>
                    </div>
                </div>
                <div id="bottom">
                    <div>{product.createdAt}</div>
                    <div>{product.description}</div>
                </div>
                <div className="btn">
                    <span>수정하기</span>
                    <span onClick={productDel}>삭제하기</span>
                </div>
        </div>
    );
}
export default ProductView;
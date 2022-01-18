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
                <h1>{product.name}</h1>
                <div id="image-box">
                    <img src={product.imageUrl} alt="제품" />
                </div>
                <div id="profile-box">
                    <img src="/images/icons/avatar.png" alt="아이콘" />
                    <span>{product.seller}</span>
                </div>
                <div id="contents-box">
                    <div>{product.name}</div>
                    <div>{product.price}</div>
                    <div>{product.createdAt}</div>
                    <div>{product.description}</div>
                </div>
                <div className="btn">
                <button onClick={productDel}>삭제하기</button>
                <button>수정하기</button>
                <span onClick={productDel}>삭제하기</span>
            </div>
        </div>
    );
}
export default ProductView;
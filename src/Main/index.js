import { API_URL } from "../config/constants";
import "./main.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel } from 'antd';
function MainPage(){
    const [ products, setProducts ] = useState([]);
    //비주얼 이미지 state로 관리
    const [ banners, setBanners ] = useState([]);
    useEffect(()=>{
        axios.get(`${API_URL}/products`)
        .then(function(result){
            const products = result.data.product;
            console.log(products);
            setProducts(products);  
        }).catch(function(error){
            console.log(error);
        })
        axios.get(`${API_URL}/banners/`)
        .then((result)=>{
            const banner = result.data.banners;
            console.log(banner);
            setBanners(banner);
        })
        .catch((error)=>{
            console.error(error);
        })
    },[])
    
    return(
            <div id="main">
                {/* <Carousel autoplay={true} autoplaySpeed={3000}>
                    {banners.map((banner,index)=>{
                        return(
                            <div id="visual" key={index}>
                                <img src={`${API_URL}${banner.imageUrl}`} alt="최신조명" />
                            </div>
                        );
                    })}
                
                </Carousel> */}
                <div id="sec01">
                    <img src="img/sec01_01.webp" />
                    <div id="sec01_mini_bann">
                        <p>
                            2022 
                            <br/>SHEA FOR GOOD
                        </p>
                        <p>
                            록시땅 X 나난<br/>
                            한국 단독 첫 국내 아티스트<br/>
                            콜라보레이션 에디션
                        </p>
                        <span>자세히보기</span>
                    </div>
                </div>
                
                <div id="sec02">
                    <div id="sec02_left">
                        <img src="img/sec01_icon01.png"/>
                        <div className="sec02_mini_text">
                            <p>전구매 무료배송 & 설 연휴 공지</p>
                            <p>
                                록시땅 공식몰 무료배송 서비스.<br/>
                                설 연휴 공식몰 배송과 매장 휴점 안내는 해당 배너를 클릭후<br/>확인 부탁드립니다.
                            </p>
                        </div>
                    </div>
                    <div id="sec02_right">
                        <img src="img/sec01_icon02.png"/>
                        <div className="sec02_mini_text">
                            <p>록시땅 공식몰 단독 혜택</p>
                            <p>
                                첫구매 시, 미니 필로우 미스트 증정 / 공식몰 상시 5% 할인 <br/>
                                전 구매 고객 베스트 셀러 샘플 3종 증정
                            </p>
                        </div>
                    </div>
                </div>

                <div id="sec03" className="innerCon">
                    <div id="sec03_submenu">
                        <ul>
                            <li>SHEA FOR GOOD GIFT</li>
                            <li>NEW SHEA FOR GOOD</li>
                            <li>NEW 릴랙싱 롤온</li>
                        </ul>
                    </div>
                    <h1>SHEA FOR GOOD GIFT</h1>
                    <div id="underbar"></div>
                    <div id="product-list">
                        {
                        products.map(product => {
                            return (
                                <div className="product-card" key={product.id}>
                                    <Link to={`/products/${product.id}`}>
                                    <div>
                                        <img className="product-img" 
                                        src={product.imageUrl} alt="조명"/>
                                    </div>
                                    <div className="product-contents">
                                        <span>{product.name}</span>
                                        <span>{product.price}원</span>
                                        <div>
                                            <img className="product-avatar" src="images/icons/avatar.png" alt="아이콘" />
                                            <span>{product.seller}</span>
                                        </div>
                                    </div>
                                    </Link>
                                </div>   
                            );
                        })
                        }        
                    </div>
                </div>
            </div>
    );
}
export default MainPage;
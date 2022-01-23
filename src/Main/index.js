import { API_URL } from "../config/constants";
import "./main.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
                    <img src="img/main/sec01_01.webp" />
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
                        <span className="add">자세히 보기</span>
                    </div>
                </div>
                
                <div id="sec02">
                    <div id="sec02_left">
                        <img src="img/main/sec01_icon01.png"/>
                        <div className="sec02_mini_text">
                            <p>전구매 무료배송 & 설 연휴 공지</p>
                            <p>
                                록시땅 공식몰 무료배송 서비스.<br/>
                                설 연휴 공식몰 배송과 매장 휴점 안내는 <br/>해당 배너를 클릭 후 확인 부탁드립니다.
                            </p>
                        </div>
                    </div>
                    <div id="sec02_right">
                        <img src="img/main/sec01_icon02.png"/>
                        <div className="sec02_mini_text">
                            <p>록시땅 공식몰 단독 혜택</p>
                            <p>
                                첫구매 시, 미니 필로우 미스트 증정 / 공식몰 상시 5% 할인 <br/>
                                전 구매 고객 베스트 셀러 샘플 3종 증정
                            </p>
                        </div>
                    </div>
                </div>

                <div id="sec03">
                    <div id="sec03_01"className="sec03_submenu">
                        <ul>
                            <li>SHEA FOR GOOD GIFT</li>
                            <li>NEW SHEA FOR GOOD</li>
                            <li>NEW 릴랙싱 롤온</li>
                        </ul>
                    </div>
                    <h1>SHEA FOR GOOD GIFT</h1>
                    <div id="sec03_02" className="underbar"></div>
                    <div id="sec03_03">
                        <div id="sec03_mini_bann">
                            <p>
                                SHEA FOR GOOD<br/>
                                설날 기프트
                            </p>
                            <p>
                                인테리어 소품이 담긴 감각적인 시어 포 굿 기프트와 함께<br/>
                                록시땅의 베스트셀러로 구성된 설날 기프트 세트를 <br/>
                                선보입니다.
                            </p>
                            <span className="add">자세히 보기</span>
                        </div>
                        <div id="sec03_right_img">
                            <img src="img/main/sec02_banner.webp" alt="sec03_right_banner"/>
                        </div>
                    </div>
                    <div id="sec03_border_box"></div>
                </div>
                
                <div id="sec04">
                    <div id="product-list">
                        {
                            products.map(product => {
                                return (
                                    <div className="product-card" key={product.id}>
                                        <Link to={`/products/${product.id}`}>
                                        <div>
                                            <img className="product-img" 
                                            src={product.imageUrl} alt="상품"/>
                                        </div>
                                        <div className="product-contents">
                                            <span>{product.name}</span>
                                            <span>{product.price}원</span>
                                            <div>
                                                <span className="add">자세히 보기</span>
                                            </div>
                                        </div>
                                        </Link>
                                    </div>   
                                );
                            })
                        }        
                    </div>
                </div>

                <div id="sec05">
                    <h1>NEW SHEA FOR GOOD</h1>
                    <div id="sec05_01" className="underbar"></div>
                    <div id="sec05_02">
                        <div id="sec05_02_flexbox">
                            <div id="sec05_left" className="sec05_content">
                                <img src="img/main/sec04_ban01.webp" alt="sec05_left_img"/>
                                <p className="sec05_con_title">록시땅 시어 버터, 28년만에 새로워지다</p>
                                <p className="sec05_con_text">
                                    더 좋은 원료, 효능, 의미로 28년만에 새로워진 록시땅의 대표 원료<br/>
                                    시어 버터 컬렉션을 선보입니다.
                                </p>
                                <span className="add">자세히 보기</span>
                            </div>
                            <span id="sec05_mid"></span>
                            <div id="sec05_right" className="sec05_content">
                                <img src="img/main/sec04_ban02.webp" alt="sec05_right_img"/>
                                <p className="sec05_con_title">록시땅 시어 버터, 부르키나파소 여성</p>
                                <p className="sec05_con_text">
                                    록시땅 시어 버터는 부르키나파소 공화국 여성들의<br/>
                                    경제적 자립과 지속가능한 발전을 위해 공정무역을 통해 공급받고 있습니다.
                                </p>
                                <span className="add">자세히 보기</span>
                            </div>
                        </div>
                        <div id="sec05_03">
                            <div id="sec05_pro_01" className="sec05_products">
                                <img src="img/main/sec04_product01.webp"/>
                                <p className="sec05_pro_text">
                                    2022 시어 버터 드라이 스킨 핸드 크림<br/>
                                    150ml
                                </p>
                                <p className="sec05_pro_price">38,000원</p>
                                <span className="add">구매하기</span>
                            </div>
                            <div id="sec05_pro_02" className="sec05_products">
                                <img src="img/main/sec04_product02.webp"/>
                                <p className="sec05_pro_text">
                                    2022 시어 버터 울트라 리치 바디 크림<br/>
                                    200ml
                                </p>
                                <p className="sec05_pro_price">59,000원</p>
                                <span className="add">구매하기</span>
                            </div>
                            <div id="sec05_pro_03" className="sec05_products">
                                <img src="img/main/sec04_product03.webp"/>
                                <p className="sec05_pro_text">
                                    2022 시어 버터 울트라 리치 페이스크림<br/>
                                    50ml
                                </p>
                                <p className="sec05_pro_price">45,000원</p>
                                <span className="add">구매하기</span>
                            </div>
                            <div id="sec05_pro_04" className="sec05_products">
                                <img src="img/main/sec04_product04.webp"/>
                                <p className="sec05_pro_text">
                                    2022 시어 버터 울트라 리치 바디 스크럽<br/>
                                    200ml
                                </p>
                                <p className="sec05_pro_price">42,000원</p>
                                <span className="add">구매하기</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id="sec06">
                    <h1>NEW 릴랙싱 롤온</h1>
                    <div id="sec06_01" className="underbar"></div>
                    <div id="sec06_02">
                        <img src="img/main/sec05_ban01.webp" />
                        <div id="sec06_mini_bann">
                            <div id="sec06_mini_top">
                                <p>
                                    코쿤 드 세레니떼 릴랙싱 롤 온
                                </p>
                                <p>
                                    편안한 릴랙싱 순간을 위한 데일리 아로마 롤 온으로 쌓여있는 <br/>
                                    피로와 스트레스를 풀어주고 심신을 안정시켜보세요.
                                </p>
                            </div>
                            <div id="sec06_mini_bottom">
                                <div id="sec06_mini_bottom01">
                                    <p>코쿤 드 세레니떼 릴랙싱 롤 온 10ml</p>
                                    <p>30,000원</p>
                                    <span className="add">구매하기</span>
                                </div>
                                <img src="img/main/sec05_product1.webp" id="sec06_mini_bottom02" alt ="mini_rollon" />
                            </div>
                        </div>
                    </div>
                    <div id="sec06_border_box"></div>
                </div>

                <div id="sec07">
                    <h1>공식몰 프로모션</h1>
                    <div id="sec07_01" className="underbar"></div>
                    <div id="sec07_02">
                        <img src="img/main/sec05_smallban.webp" alt=""/>
                        <span className="add">구매하기</span>
                    </div>
                </div>
                
                <div id="sec08">
                    <h1>친환경포장서비스</h1>
                    <div id="sec08_01" className="underbar"></div>
                    <div id="sec08_02">
                        <img src="img/main/vid_thumbnail.webp"/>
                        <span id="sec08_02_title">
                            록시땅의 친환경 ECO MERCI 박스
                        </span>
                        <p>
                            록시땅 공식몰에서 주문하신 제품은 플라스틱 테이프와 완충제를 사용하지 않아 
                            박스부터 포장지까지 100% 재활용이 가능한 포장박스로 배송됩니다.
                        </p>
                    </div>
                </div>

                <div id="sec09">
                    <h1>록시땅 멤버십 프로그램</h1>
                    <div id="sec09_01" className="underbar"></div>
                    <div id="sec09_02">
                        <p>마이 프로방스 멤버쉽 프로그램</p>
                        <p>록시땅의 마이 프로방스 멤버쉽 프로그램을 지금 만나보세요</p>
                        <p>*공식몰에서 회원 가입을 하신 경우, 오프라인 매장에서는 영업일 기준 하루 후에 확인하실 수 있습니다.</p>
                        <span className="add">자세히 보기</span>
                    </div>
                </div>    

                <div id="sec10">
                    <h1>매장 찾기</h1>
                    <div id="sec10_01" className="underbar"></div>
                    <div id="sec10_02">
                        <div id="sec10_02_left">
                            <img src="img/main/sec06_mall.jpg" alt="mall_img"/>
                        </div>
                        <div id="sec10_02_right">
                            <div id="sec10_02_top">
                                <p>가장 가까운 록시땅 매장을 찾아보세요.</p>
                                <p>가까운 록시땅 매장에서 프로방스의 아름다움을 경험해 보세요!</p>
                                <p>매장명을 입력하세요.</p>
                            </div>
                            <span>ex.압구정</span>
                            <div id="sec10_02_bottom">
                                <input type="text" placeholder="ex.압구정"/>
                                <button className="add">가까운 매장 찾기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default MainPage;
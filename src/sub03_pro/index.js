import "./promo.scss";
function Promotion(){
    return(
        <div id="promoPage">
            <div id="hd">
                <div id="hd_outt"></div>
                <div id="hd_inner">이달의 프로모션</div>
                <div id="hd_outt_inn"></div>
            </div>
            <div id="sec01">
                <div id="sec01_01">
                    <div id="sec01_01_left">
                        <h1>공식몰 단독 두번째 구매 혜택</h1>
                        <p>공식몰 두번째 구매 시 총 10% 할인</p>
                        <p>
                            공식몰에서 첫 구매 이후, 두번째 구매 시 총 10% 할인 혜택을 드립니다.
                            <br/>(공식몰 상시 할인 5% + 추가 5% 할인)
                        </p>
                        <p>
                            *두번째 구매 고객, 장바구니 페이지에서 할인 코드 자동 적용 (ID당 1회 가능)
                            <br/>*록시땅 공식몰 신규 가입 후, 정품 첫 구매 고객에 한함
                            <br/>*해당 이벤트는 록시땅 공식 온라인몰에 한함
                            <br/>*일부 할인 상품 & 악세사리 혜택 제외
                        </p>
                        <span className="add">베스트셀러 보기</span>
                    </div>
                    <div id="sec01_01_right">
                        <img src="img/sub03_promo/02.webp" alt="02" />
                    </div>
                </div>
                <div id="sec01_02">
                    <div id="promo01" className="promo">
                        <img src="img/sub03_promo/pro01.webp" alt="promo01"/>
                        <h1>첫 구매 기프트 증정</h1>
                        <span className="add">자세히 보기</span>
                    </div>
                    <div id="promo02" className="promo">
                        <img src="img/sub03_promo/pro02.webp" alt="promo02"/>
                        <h1>1월 공식몰 특별 사은품</h1>
                        <span className="add">자세히 보기</span>
                    </div>
                    <div id="promo03" className="promo">
                        <img src="img/sub03_promo/pro03.webp" alt="promo03"/>
                        <h1>1월 공식몰 우수 리뷰어 이벤트</h1>
                        <span className="add">자세히 보기</span>
                    </div>
                </div>
                <div id="sec01_03">
                    <img src="img/sub03_promo/03.webp" alt="benefit"/>
                </div>
            </div>
            <div id="sec02">
                <h1>이달의 프로모션 세트</h1>
                <div id="sec02_01" className="underbar"></div>
                <ul id="product">
                    <li id="prod01" className="products">
                        <img src="img/sub03_promo/pro04.webp" alt="prod01" />
                        <p>시어 포 굿 핸드 크림 트리오</p>
                        <p>42,000원</p>
                        <span className="add">구매하기</span>
                    </li>
                    <li id="prod02" className="products">
                        <img src="img/sub03_promo/pro05.webp" alt="prod02" />
                        <p>시어 포 굿 핸드&립 기프트</p>
                        <p>28,000원</p>
                        <span className="add">구매하기</span>
                    </li>
                    <li id="prod03" className="products">
                        <img src="img/sub03_promo/pro06.webp" alt="prod03" />
                        <p>시어 포 굿 시어 버베나 리퀴드 솝 핸드 기프트</p>
                        <p>67,000원</p>
                        <span className="add">구매하기</span>
                    </li>
                    <li id="prod04" className="products">
                        <img src="img/sub03_promo/pro07.webp" alt="prod04" />
                        <p>시어 포 굿 시어 리퀴드 솝 핸드 기프트</p>
                        <p>67,000원</p>
                        <span className="add">구매하기</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Promotion;
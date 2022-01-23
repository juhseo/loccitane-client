import { Link } from "react-router-dom";
function Header(){
    return(
        <header>
            <div id="header_top">공식 온라인몰 회원 가입 시, 상시 5%할인 혜택</div>
            <div className="innerCon">
                <div id="hd_left">
                    <input type="text" placeholder="검색" />
                    <div id="right_border"></div>
                    <p>매장안내</p>
                </div>
                <h1><Link to="/"><img src="img/main/logo.png"/></Link></h1>
                <ul>
                    <li>로그인/회원정보</li>
                    <li>상품보기</li>
                    <li><Link to="/upload">상품등록하기</Link></li>
                </ul>
            </div>
            <div id="sub_menu">
                <ul>
                    <li>2022 NEW SHEA FOR GOOD</li>
                    <li><Link to="/bestseller">베스트셀러</Link></li>
                    <li><Link to="/promotion">이달의 프로모션</Link></li>
                    <li>선물 추천</li>
                    <li>라인별 컬렉션</li>
                    <li><Link to="/introduce">록시땅 소개</Link></li>
                </ul>
            </div>
        </header>
    );
}
export default Header;
import { Link } from "react-router-dom";
function Header(){
    return(
        <header>
            <div id="header_top">공식 온라인몰 회원 가입 시, 상시 5%할인 혜택</div>
            <div className="innerCon">
                <h1><Link to="/"><img src="img/logo.png"/></Link></h1>
                <ul>
                    <li>로그인/회원정보</li>
                    <li><Link to="/upload">상품등록하기</Link></li>
                    <li>상품보기</li>
                </ul>
            </div>
            <div id="sub_menu">
                <ul>
                    <li>2022 NEW SHEA FOR GOOD</li>
                    <li>베스트셀러</li>
                    <li>이달의 프로모션</li>
                    <li>선물 추천</li>
                    <li>라인별 컬렉션</li>
                    <li>록시땅 소개</li>
                </ul>
            </div>
        </header>
    );
}
export default Header;
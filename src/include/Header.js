import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { GrUserSettings,GrDocumentText } from "react-icons/gr";
import { AiOutlineLogin } from "react-icons/ai";
function Header(){
    return(
        <header>
            <div id="header_top">공식 온라인몰 회원 가입 시, 상시 5%할인 혜택</div>
            <div className="innerCon">
                <div id="hd_left">
                    <input type="text" placeholder="검색"/>
                    <button><FiSearch className="icons"/></button>
                    <div id="right_border"></div>
                    <p>매장안내 <GrLocation className="icons"/></p>
                </div>
                <h1><Link to="/"><img src="img/main/logo.png"/></Link></h1>
                <ul>
                    <li>로그인/회원가입 <AiOutlineLogin className="icons"/></li>
                    <li><Link to="/notice">공지사항 <GrDocumentText/></Link></li>
                    <li><Link to="/manager">관리자모드 <GrUserSettings className="icons"/></Link></li>
                </ul>
            </div>
            <div id="sub_menu">
                <ul>
                    <li>2022 NEW SHEA FOR GOOD</li>
                    <li><Link to="/bestseller">베스트셀러</Link></li>
                    <li><Link to="/promotion">이달의 프로모션</Link></li>
                    <li><Link to ="/recommend">선물 추천</Link></li>
                    <li>라인별 컬렉션</li>
                    <li><Link to="/introduce">록시땅 소개</Link></li>
                </ul>
            </div>
        </header>
    );
}
export default Header;
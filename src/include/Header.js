import { Link } from "react-router-dom";
function Header(){
    return(
        <header>
            <div className="innerCon">
                <h1><Link to="/"><img src="img/logo.png"/></Link></h1>
                <ul>
                    <li><Link to="/upload">상품등록하기</Link></li>
                    <li>상품보기</li>
                </ul>
            </div>
        </header>
    );
}
export default Header;
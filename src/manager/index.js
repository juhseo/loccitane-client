import "./manager.scss";
import { GrUserSettings } from "react-icons/gr";
import { Link } from "react-router-dom";

function Managermode(){
    return(
        <div id="manager">
            <div>
                <img src="img/managermode/02.webp" id="point02" alt="point02" />
                <img src="img/managermode/bann02.webp" id="point04" alt="point04"/>
                <img src="img/managermode/bgimg.jpg" id="bgimg" alt="bg" />

            </div>
            <div id="border-box"></div>
            <div id="text-box">
                <div id="text_hd">
                    <GrUserSettings/> 관리자 모드
                </div>
                <div id="text_con">
                    <ul>
                        <li>
                            <img src="img/managermode/adm_img03.webp" alt="noticeimg"/>
                            <p>공지사항</p>
                            <span className="add">바로가기</span>
                        </li>
                        <li>
                            <img src="img/managermode/adm_img01.webp" alt ="uploadimg"/>
                            <p>상품업로드</p>
                            <span className="add"><Link to="/upload">바로가기</Link></span>
                        </li>
                        <li>
                            <img src="img/managermode/adm_img02.webp" alt="prodimg"/>
                            <p>상품리스트</p>
                            <span className="add">바로가기</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Managermode;
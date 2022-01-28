import "./notice.scss";
import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core';

function Notice(){
    return(
        <div id="notice">
            <h1>공지사항</h1>
            <Table>
                <TableHead id="head">
                    <TableRow>
                        <TableCell>NO</TableCell>
                        <TableCell>SUBJECT</TableCell>
                        <TableCell>WRITER</TableCell>
                        <TableCell>DATE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>적립금 사용법에 관한 사항</TableCell>
                        <TableCell>L'OCCITANE</TableCell>
                        <TableCell>2021-01-04</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>2</TableCell>
                        <TableCell>(필독) 교환/반품/기타에 관한 안내</TableCell>
                        <TableCell>L'OCCITANE</TableCell>
                        <TableCell>2021-01-08</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>4</TableCell>
                        <TableCell>금액별 무료배송 안내</TableCell>
                        <TableCell>L'OCCITANE</TableCell>
                        <TableCell>2021-01-14</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>5</TableCell>
                        <TableCell>	(필독) 배송 전 취소 안내</TableCell>
                        <TableCell>L'OCCITANE</TableCell>
                        <TableCell>2021-01-17</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <button type="submit"><Link to="/write">글쓰기</Link></button>
        </div>
    );
}
export default Notice;
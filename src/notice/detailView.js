import React from "react";
import "./write.scss";
import { Link } from 'react-router-dom';
import { Table, TableBody, TableRow, TableCell } from '@material-ui/core';


function DetailView(){
    return(
        <div id="detail">
            <h1></h1>
            <form>
                <Table className='createTable'>
                    <TableBody>
                        <TableRow>
                            <TableCell>SUBJECT</TableCell>
                            <TableCell>
                                    1234
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>WRITER</TableCell>
                            <TableCell>
                                L'OCCITANE
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>DATE</TableCell>
                            <TableCell>2016-05-30</TableCell>
                        </TableRow>
                        <TableRow id="detail_desc">
                            <TableCell placeholder="내용으 입력해주세요.">내용</TableCell>
                            <TableCell>
                                1234
                            </TableCell>
                        </TableRow>
                    </TableBody>
                    <button><Link to="/notice">목록보기</Link></button>
                </Table>
            </form>
        </div>
    );
}
export default DetailView;
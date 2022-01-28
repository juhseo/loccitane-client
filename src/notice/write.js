import "./write.scss";
import React from 'react';
import { Table, TableBody, TableRow, TableCell } from '@material-ui/core';


function Write(){
    return(
        <div id="wirte">
            <h1>글쓰기</h1>
            <form>
                <Table className='createTable'>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                제목
                            </TableCell>
                            <TableCell>
                                <input name = "c_title" type="text"/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                글쓴이
                            </TableCell>
                            <TableCell>
                                <input name = "c_writer" type="text"/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                내용
                            </TableCell>
                            <TableCell>
                                <input name = "c_desc" type="textarea" />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                    <button type="submit">등록</button>
                    <button type="reset">취소</button>
                </Table>
            </form>
        </div>
    );
}
export default Write;
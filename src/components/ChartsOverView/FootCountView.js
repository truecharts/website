import React, { useState, useEffect } from "react";

const FootCountView = ({train}) => (
    <>
    <tfoot style={{width: "100%"}}>
            <tr>
                <td colSpan="3">Charts in this train: <strong>{train.count != train.charts.length ? `${train.charts.length} (${train.count})`: train.count}</strong></td>
            </tr>
        </tfoot>
    <br/>
    </>
);

export default FootCountView;
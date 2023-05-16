import { useNavigate } from "react-router-dom";
import parse from 'html-react-parser';

function CRGrid(props) {

    const { datasource, title, cols , route,Status } = props;
    const navigate = useNavigate();
    return (
        <>
            <div>
                <div>
                    <h2>{title}</h2>
                </div>
                {datasource && Array.isArray(datasource) && (
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                {cols && Array.isArray(cols) && cols.length > 0
                                    ? cols.map((x, i) => <th key={i}>{x.displayName}</th>)
                                    : null}
                                <th>{Status ? Status : "Status"}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datasource.map((x, i) => (
                                <tr key={i} onClick={()=>{navigate(route,{state:x})}} >
                                    {cols.map((e, ind) => (
                                        <td key={ind} style={{width:"100px"}}>
                                            {!(x[e.key]) ? x[e.key] : parse(x[e.key])}
                                        </td>
                                    ))}
                                    {x && x.confirmation ?  <td>
                                      {x.confirmation=="Confirmed" ? <h6 style={{color:"green",width:"101px",fontWeight:"bold",fontSize:"15px"}} >Approved</h6> : <h6 style={{color:"red" ,width:"101px",fontWeight:"bold",fontSize:"15px"}} >Not Approved</h6>}</td> 
                                        : x.status == "active" ?<td style={{color:"green",width:"101px",fontWeight:"bold",fontSize:"15px"}}>{x.status}</td> : <td style={{color:"red" ,width:"101px",fontWeight:"bold",fontSize:"15px"}}>{x.status}</td>}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
}
export default CRGrid;
import React, {useState, useEffect} from "react";
import { Grid, Card, CardContent } from "@mui/material";
import Select from "react-select";
import { statusData, studentsData } from "../data";
import { Notification } from "./Notification";
import { ResultList } from "./ResultList";

export const Home =()=>{
    const [data, setData] = useState([]);
    const [passData, setPassData] =useState([]);
    const [failData, setFailData]=useState([]);
    const [status, setStatus] = useState("");
    const [name, setName]=useState(studentsData[0]);

    const handleNameChange=(selOpt)=>{
        setName(selOpt)
    }
    const handleStatusChange=(selOpt)=>{
        setStatus(selOpt.label);
    }

    useEffect(()=>{
        if(status!==""){
        if(status==="Pass"){
            setPassData([...passData, name])
        }else{
            setFailData([...failData, name])
        }
        const filtered = data.filter((item)=> item.value!==name.value);
        setData(filtered);
    }
    }, [name])
    useEffect(()=>{
        setData(studentsData)
    },[])
    return(
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Select onChange={handleNameChange} className="dropdown" options={data} />
            </Grid>
            <Grid item xs={6}>
                <Select onChange={handleStatusChange} options={statusData} />
            </Grid>
            <Grid item xs={6}>
                <Notification mytime={3000} msg={`Hey ${name.label},
                Congradulations!!! for your great achievemnet.`} />
            </Grid>
            <Grid item xs={6}>
                <Notification mytime={5000} msg={`Dear Parent, Your ward ${name} has completed the Certification with PickupBiz Learning. We would like to congratulate you are your falimy....`} />
            </Grid>
            <Grid item xs={6}>
                <ResultList studentData={passData} />
            </Grid>
            <Grid item xs={6}>
              <ResultList studentData={failData} />
            </Grid>
        </Grid>
    )
}
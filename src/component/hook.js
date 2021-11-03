import React, { useState, useEffect } from "react";
import { Grid, Dropdown } from "semantic-ui-react"
import DataTable from "react-data-table-component"

export function Hook() {
    const [timeline, setTimeline] = useState("1week");

    return (
        <Grid padded>
            <Grid.Row>Implemented using hooks</Grid.Row>
            <Grid.Row><Timeline callback={setTimeline} timeline={timeline}/></Grid.Row>
            <Grid.Row><Devices timeline={timeline} /></Grid.Row>
        </Grid>
    )
};



function Timeline ({callback,timeline}){
    
    const changeDropDown = (e, data) => {
        let timeline = data.value;
        callback(timeline);
    };

    let options = [
        { key: "last_1_hour", text: "Last 1 hour", value: "1hr" },
        { key: "last_1_day", text: "Last 1 day", value: "1day" },
        { key: "last_1_week", text: "Last 1 week", value: "1week" },
        { key: "last_1_month", text: "Last 1 month", value: "1month" }
    ];
    return (
        <Dropdown onChange={changeDropDown} value={timeline} placeholder='last 1 hour' search selection options={options} />
    )
}

function Devices(props) {

    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        setLoading(true);

        const response = await fetch("https://api.github.com/users/john/subscriptions")
        const data = await response.json();

        setData(data.map((data) => {
            return {
                id: data.id,
                title: data.full_name,
                homepage: data.homepage
            }
        }));

        setLoading(false);
    }, [props.timeline])

    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'homepage',
            selector: row => row.homepage,
        },
    ];

    console.log("called");

    return (
        <Grid padded>
            <Grid.Row>Devices</Grid.Row>
            <Grid.Row>
                <DataTable
                    columns={columns}
                    data={data}
                    progressPending={loading}
                />
            </Grid.Row>
        </Grid>

    )
};
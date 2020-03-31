import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

const List = ({ todos, deleteTodo }) => {
    useEffect(() => {
        getList();
    }, []);
    const [data, setData] = useState([]);
    const getList = () => {
        axios
            .get("/api/test")
            .then(res => {
                if (res.data) {
                    setData(res.data);
                }
            })
            .catch(err => console.log(err));
    };
    return (
        <ul>
            {data && data.length > 0 ? (
                data.map(item => {
                    return <li key={item._id}>{item.title}</li>;
                })
            ) : (
                <li>No data(s)</li>
            )}
        </ul>
    );
};

export default List;

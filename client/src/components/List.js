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
    const day_list = [
        { day: ["日", "SUN"] },
        { day: ["一", "SUN"] },
        { day: ["二", "SUN"] },
        { day: ["三", "SUN"] },
        { day: ["四", "SUN"] },
        { day: ["五", "SUN"] },
        { day: ["六", "SUN"] }
    ];

    const date = new Date();
    const day = date.getDay(); // or "new Date().getDay()";

    return (
        <ul className="list">
            {data && data.length > 0 ? (
                data.map(item => {
                    return (
                        <li key={item._id}>
                            <div
                                style={{
                                    marginBottom: "10px",
                                    fontSize: "20px"
                                }}
                            >
                                {item.title}
                            </div>
                            <div>
                                今日星期{day_list[day].day[0]} 營業時間:
                                {item[day_list[day].day[1]]}
                            </div>
                        </li>
                    );
                })
            ) : (
                <li>No data(s)</li>
            )}
        </ul>
    );
};

export default List;

import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

const List = ({ todos, deleteTodo }) => {
    useEffect(() => {
        getList();
    }, []);

    const [data, setData] = useState([]);
    const [search, setSearch] = useState([]);
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
    const updateSearch = value => {
        setSearch(value);
    };
    const filterData = () => {
        return data.filter(item => {
            return item.title.indexOf(search) !== -1;
        });
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
        <div>
            <input
                type="text"
                placeholder="查詢店家名稱"
                onChange={e => updateSearch(e.target.value)}
            />
            <ul className="list">
                {filterData() && filterData().length > 0 ? (
                    filterData().map(item => {
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
        </div>
    );
};

export default List;

import React from "react";

function WidthAndHeight() {
    const [width, setWidth] = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(window.innerHeight);

    React.useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    });

    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    return (
        <div>
            <div>{`Window width = ${width}`}</div>
            <div>{`Window height = ${height}`}</div>
        </div>
    );
}

export default WidthAndHeight;
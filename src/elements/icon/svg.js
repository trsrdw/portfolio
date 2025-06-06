import { useEffect, useState } from "react";

export default function SvgIcon({ url }) {
    const [svg, setSvg] = useState("");

    useEffect(() => {
        const fetchSvg = async () => {
            try {
                const res = await fetch(url);
                const text = await res.text();
                setSvg(text);
            } catch (error) {
                console.error("Error fetching SVG:", error);
            }
        };

        fetchSvg();
    }, [url]);

    return <div style={{ height: 'fit-content', display: "grid", placeContent: "center" }} dangerouslySetInnerHTML={{ __html: svg }} />;
}
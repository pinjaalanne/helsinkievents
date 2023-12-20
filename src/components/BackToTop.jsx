import { useState, useEffect } from "react";

function BackToTop() {
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTop(true);
            } else {
                setBackToTop(false);
            }
        });
    },
        []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            {backToTop && (
                <button onClick={scrollUp} className="topBtn">
                    ⬆
                </button>
            )
            }
        </div >
    );
}

export default BackToTop;
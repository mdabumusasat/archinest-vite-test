import { useEffect, useState } from "react";
import Footer from "../components/Footers/Footer";
import Footer2 from "../components/Footers/Footer2";
import Header from "../components/Headers/Header";
import Header2 from "../components/Headers/Header2";
import Header3 from "../components/Headers/Header3";

const Layout = ({ children, HeaderStyle, FooterStyle, styleMode }) => {
    const [searchToggle, setSearchToggled] = useState(false);
    const [scroll, setScroll] = useState(0);
    const handleToggle = () => setSearchToggled(!searchToggle);
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    }, [scroll]);

    const handleOpen = () => {
        document.body.classList.add("mobile-menu-visible");
    };
    const handleRemove = () => {
        document.body.classList.remove("mobile-menu-visible");
    };

    useEffect(() => {
        if (styleMode === "Dark") {
            document.body.classList.add("dark-mode");
        }else {
            document.body.classList.remove("dark-mode");
        }
    }, [styleMode]);


    // **Header Selection**
    const renderHeader = () => {
        switch (HeaderStyle) {
            default: return <Header handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
            case "two": return <Header2 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
            case "three": return <Header3 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
        }
    };

    // **Footer Selection**
    const renderFooter = () => {
        switch (FooterStyle) {
            default: return <Footer />;
            case "two": return <Footer2 />;
        }
    };

    return (
        <>
            {renderHeader()}
            {children}
            {renderFooter()}
        </>
    );
};

export default Layout;

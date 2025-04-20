'use client';
import Cookies from "js-cookie";
export default function HomePage() {
    const token = Cookies.get("token");
    const userLogout = () => {
        Cookies.remove("token");
    };
    const userLogin = () => {
        Cookies.set('token', 'dark', { expires: 7 });
    };

    return (
        <div style={{ backgroundColor: "#FFF", color: "#000", padding: "20px" }}>
            <h1><u>Server Login Page : {token || "Guest"}</u></h1>
            {
                token 
                    ? <button onClick={userLogout} className="btnA">Logout</button>
                    : <button onClick={userLogin} className="btnA">Login</button>
            }
    </div>
    );
}

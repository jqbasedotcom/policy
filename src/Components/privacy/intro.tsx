import { data } from "./data";
const Intro = ()=>{
    return <div className="mt-[30px]">
        <p>1. <span><b>Introduction</b></span></p>
        <div className="pt-1 pb-1"></div>
        <p>Welcome to <b>{data.name}</b>.</p>
        <div className="pt-1 pb-1"></div>
        <p><b>{data.name}</b> (“us”, “we”, or “our”) operates <b>{data.website}</b> (hereinafter referred to as “Service”).</p>
        <div className="pt-1 pb-1"></div>
        <p>Our Privacy Policy governs your visit to <b>{data.website}</b> , and explains how we collect, safeguard and disclose information that results from your use of our Service.</p>
        <div className="pt-1 pb-1"></div>
        <p>We use your data to provide and improve Service. By using Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.</p>
        <div className="pt-1 pb-1"></div>
        <p>Our Terms and Conditions (“<b>Terms</b>”) govern all use of our Service and together with the Privacy Policy constitutes your agreement with us (“<b>agreement</b>”).</p>
        <div className="pt-1 pb-1"></div>
    </div>
}

export default Intro;
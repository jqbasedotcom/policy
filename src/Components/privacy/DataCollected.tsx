import { data } from "./data";
const DataCollected = ()=>{
    return <div className="mt-[30px]">
        <p>3. <b>Information Collection and Use</b></p>
        <div className="pt-1 pb-1"></div>
        <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
        <div className="pt-1 pb-1"></div>
        <p>4. <b>Types of Data Collected</b></p>
        <div className="pt-1 pb-1"></div>
        <p><b>Personal Data</b></p>
        <div className="pt-1 pb-1"></div>
        <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (“<b>Personal Data</b>”). Personally identifiable information may include, but is not limited to:</p>
        <div className="pt-1 pb-1"></div>
        {
            data.dataCollected.map((data:string)=>{
                return <>
                    <p>{data}</p>
                    <div className="pt-1 pb-1"></div>
                </>
            })
        }
        <div className="pt-1 pb-1"></div>
        <p>We may use your Personal Data to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link. </p>
        <div className="pt-1 pb-1"></div>
        <p><b>Usage Data</b></p>
        <div className="pt-1 pb-1"></div>
        <p>We may also collect information that your browser sends whenever you visit our Service or when you access Service by or through any device (“<b>Usage Data</b>”).</p>
        <div className="pt-1 pb-1"></div>
        <p>This Usage Data may include information such as your computer’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
        <div className="pt-1 pb-1"></div>
        <p>When you access Service with a device, this Usage Data may include information such as the type of device you use, your device unique ID, the IP address of your device, your device operating system, the type of Internet browser you use, unique device identifiers and other diagnostic data.</p>
        <div className="pt-1 pb-1"></div>
    </div>
}

export default DataCollected;
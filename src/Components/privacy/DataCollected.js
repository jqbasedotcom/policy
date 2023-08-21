import { data } from "./data";
const DataCollected = ()=>{
    return <div className="mt-[30px]">
        <div>3. <div>Information Collection and Use</div></div>
        <div className="pt-1 pb-1"></div>
        <div>We collect several different types of information for various purposes to provide and improve our Service to you.</div>
        <div className="pt-1 pb-1"></div>
        <div>4. <div>Types of Data Collected</div></div>
        <div className="pt-1 pb-1"></div>
        <div><div>Personal Data</div></div>
        <div className="pt-1 pb-1"></div>
        <div>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (“<div>Personal Data</div>”). Personally identifiable information may include, but is not limited to:</div>
        <div className="pt-1 pb-1"></div>
        {
            data.dataCollected.map((data)=>{
                return <>
                    <div>{data}</div>
                    <div className="pt-1 pb-1"></div>
                </>
            })
        }
        <div className="pt-1 pb-1"></div>
        <div>We may use your Personal Data to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link. </div>
        <div className="pt-1 pb-1"></div>
        <div><div>Usage Data</div></div>
        <div className="pt-1 pb-1"></div>
        <div>We may also collect information that your browser sends whenever you visit our Service or when you access Service by or through any device (“<div>Usage Data</div>”).</div>
        <div className="pt-1 pb-1"></div>
        <div>This Usage Data may include information such as your computer’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</div>
        <div className="pt-1 pb-1"></div>
        <div>When you access Service with a device, this Usage Data may include information such as the type of device you use, your device unique ID, the IP address of your device, your device operating system, the type of Internet browser you use, unique device identifiers and other diagnostic data.</div>
        <div className="pt-1 pb-1"></div>
    </div>
}

export default DataCollected;
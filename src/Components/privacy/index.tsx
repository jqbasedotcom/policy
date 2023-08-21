import DataCollected from "./DataCollected";
import Definition from "./Definition";
import { data } from "./data";
import Intro from "./intro";
const Pravacy = ()=>{
    return <div className="container mx-auto">
        {/* Title */}
        <div className="text-center text-[20px] font-bold my-[20px]">PRIVACY POLICY</div>
        <p>Effective date: <span className="font-semibold">{data.effectiveDate}</span></p>

        {/* Introduction */}
        <Intro/>

        {/* Defination */}
        <Definition/>

        {/* DataCollected */}
        <DataCollected/>

        {/* Security */}
        <div className="mt-[30px]">
            <p>4. <b>Security of Data</b></p>
            <div className="pt-1 pb-1"></div>
            <p>The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
            <div className="pt-1 pb-1"></div>
        </div>
        {/* Data Protection Regulation (GDPR) */}
        <div className="mt-[30px]">
            <p>5. <b>Your Data Protection Rights Under General Data Protection Regulation (GDPR)</b></p>
            <div className="pt-1 pb-1"></div>
            <p>If you are a resident of the European Union (EU) and European Economic Area (EEA), you have certain data protection rights, covered by GDPR.</p>
            <div className="pt-1 pb-1"></div>
            <p>We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.</p>
            <div className="pt-1 pb-1"></div>
            <p>If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please email us at <b>{data.email}</b>.</p>
            <div className="pt-1 pb-1"></div>
        </div>

        {/* Children's Privacy */}
        <div className="mt-[30px]">
            <p>6. <b>Children’s Privacy</b></p>
            <div className="pt-1 pb-1"></div>
            <p>Our Services are not intended for use by children under the age of 13 (“<b>Child</b>” or “<b>Children</b>”).</p>
            <div className="pt-1 pb-1"></div>
            <p>We do not knowingly collect personally identifiable information from Children under 13. If you become aware that a Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from Children without verification of parental consent, we take steps to remove that information from our servers.</p>
            <div className="pt-1 pb-1"></div>
        </div>
        
        {/* Refund Policy */}
        <div className="mt-[30px]">
            <p>7. <b>Refund Policy</b></p>
            <div className="pt-1 pb-1"></div>
            <p>We regret to inform you that <b>"we do not offer refunds for purchased products."</b> Once a product has been purchased, it is considered <b>final and non-refundable.</b></p>
            <div className="pt-1 pb-1"></div>
            <p>This policy is in place to ensure fairness and consistency for all customers. <b>"Please carefully review your order and product details before completing your purchase."</b></p>
            <div className="pt-1 pb-1"></div>
        </div>
        
        {/* Refund Policy */}
        <div className="mt-[30px]">
            <p>8. <b>Purchase Terms and Unlock Code</b></p>
            <div className="pt-1 pb-1"></div>
            <p>Our product features an unlock code system that ensures its proper usage and security. Each unlock code is uniquely generated for the purchaser and is intended solely for their use. Please note the following terms regarding the unlock code</p>
            <div className="pt-1 pb-1 ml-[20px]">
                <p>8.1 <b>Non-Transferable:</b> The unlock code provided with your purchase is non-transferable. It is exclusively intended for your use and cannot be shared, sold, or transferred to another person.</p>
            </div>
            <div className="pt-1 pb-1 ml-[20px]">
                <p>8.2 <b>User Responsibility:</b> As the purchaser, you are responsible for keeping your unlock code confidential and ensuring its secure usage. Sharing or transferring the unlock code to others violates our terms of use.</p>
            </div>
            <div className="pt-1 pb-1 ml-[20px]">
                <p>8.3 <b>Unauthorized Usage:</b> Any unauthorized sharing or transferring of the unlock code will result in a breach of our terms and may lead to access restrictions or other actions as deemed necessary.</p>
            </div>
            <div className="pt-1 pb-1"></div>
            <p>We appreciate your understanding of these terms and your cooperation in maintaining the integrity of our product's unlock code system.</p>
            <div className="pt-1 pb-1"></div>
        </div>

        {/* Contact Us */}
        <div className="mt-[30px]">
            <p>9. <b>Contact Us</b></p>
            <div className="pt-1 pb-1"></div>
            <p>If you have any questions about this Privacy Policy, please contact us by email: <b>{data.email}</b> phone: <b>{data.phone}</b>.</p>
        </div>

        {/* Tail */}
        <div className="mt-[30px]">
            <p>Last updated: <b>{data.lastUpdated}</b></p>
            <div className="pt-1 pb-1"></div>
            <p>Integrated Solution Myanmar</p>
            <div className="pt-1 pb-1"></div>
            <p>{data.email}</p>
        </div>
        
        <div className="my-[100px]"></div>
    </div>
}

export default Pravacy;
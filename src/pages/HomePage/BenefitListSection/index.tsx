import videoBenefit from '@assets/video/chat_2.mp4';
import './style.less';
import { listBenefit } from './type';
import BenefitItem from './BenefitItem';
const BenefitListSection = () => {
   return (
      <div className="benefit-list-container">
         <video preload="none" autoPlay loop muted src={videoBenefit} />
         <div className="benefit-list">
            {listBenefit.map((item) => {
               return <BenefitItem {...item} />;
            })}
         </div>
      </div>
   );
};

export default BenefitListSection;

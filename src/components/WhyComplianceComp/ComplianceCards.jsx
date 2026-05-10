import ComplianceCard from './ComplianceCard';

import icon2 from '../../assets/Hassle-Free Filings Clarity.png';
import icon1 from '../../assets/Regulatory Clarity.png';
import icon3 from '../../assets/Risk Protection.png';

const ComplianceCards = () => {
  const cards = [
    {
      icon: icon1,
      title: 'Regulatory Clarity',
      desc: 'We decode complex compliance rules into simple, actionable steps.',
    },
    {
      icon: icon2,
      title: 'Hassle-Free Filings',
      desc: 'From registration to ongoing reporting — we manage it end-to-end.',
    },
    {
      icon: icon3,
      title: 'Risk Protection',
      desc: 'Stay ahead of audits, inspections, and compliance gaps with proactive support.',
    },
  ];

  return (
    <div
      className="
        w-full
        lg:w-[594px]
        flex
        flex-col
        gap-[22px]
        lg:gap-[34px]
        lg:pt-[50px]
      "
    >
      {cards.map((card) => (
        <ComplianceCard
          key={card.title}
          icon={card.icon}
          title={card.title}
          desc={card.desc}
        />
      ))}
    </div>
  );
};

export default ComplianceCards;

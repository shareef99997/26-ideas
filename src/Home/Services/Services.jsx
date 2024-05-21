import './Services.css';

function Services() {
  return (
    <div className="Services" id="Services">
      <h1 className='Services-Title'>خدماتنا</h1>
      <p className="Services-Description">
      الخدمات التي نقدمها مصممة خصيصًا لتلبية احتياجاتك
      </p>
      <div className="Services-Grid">
        <div className="Service-Box">
          <img src={require(('../../Assets/Images/web.png'))} alt="Web Development" className="Service-Image" />
          <h2>	حلول الذكاء الاصطناعي  </h2>
          <p> نقدم تطبيقات مخصصة تستفيد من تقنيات الذكاء الاصطناعي مثل التعلم العميق وتحليل البيانات و تصميم وتطوير روبوتات ذكية للقطاعات المختلفة </p>
        </div>
        <div className="Service-Box">
          <img src={require(('../../Assets/Images/web.png'))} alt="Cloud Services" className="Service-Image" />
          <h2> تطوير المواقع الإلكترونية  </h2>
          <p> نقدم تصميمًا مبتكرًا وتطويرًا للمواقع الإلكترونية  و تطوير تطبيقات الهاتف المحمول </p>
        </div>
        <div className="Service-Box">
          <img src={require(('../../Assets/Images/web.png'))} alt="Cloud Services" className="Service-Image" />
          <h2> تطوير تطبيقات الجوال </h2>
          <p> نقدم تصميمًا مبتكرًا لتطوير تطبيقات الهاتف المحمول </p>
        </div>
        <div className="Service-Box">
          <img src={require(('../../Assets/Images/web.png'))} alt="Mobile Development" className="Service-Image" />
          <h2> 	التسويق اللإلكتروني </h2>
          <p> ترويج لمنتجاتك أو خدماتك عبر وسائل التواصل الاجتماعي, الإعلانات عبر الإنترنت والتسويق عبر البريد الإلكتروني </p>
        </div>
        <div className="Service-Box">
          <img src={require(('../../Assets/Images/web.png'))} alt="Cyber Security" className="Service-Image" />
          <h2>منتجات التقنية مبتكرة </h2>
          <p> نقدم أجهزة ذكية تتوافق مع برمجيات الذكاء الاصطناعي لخدمة العمل و المهام اليومية . </p>
        </div>
        <div className="Service-Box">
          <img src={require(('../../Assets/Images/web.png'))} alt="Cyber Security" className="Service-Image" />
          <h2>	الاستشارات </h2>
          <p> نساعد الشركات والأفراد على تحقيق أهدافهم التقنية ببرمجات و أدوات حديثة </p>
        </div>
      </div>
      <div className="Button-Container">
        <button className="Learn-More-Button"> تعرف على خدماتنا </button>
      </div>
    </div>
  );
}

export default Services;

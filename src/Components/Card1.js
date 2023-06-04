import "./Card1.css";
import edu from '../Assets/edu.jpg'
import gender from '../Assets/Gender responsive.jpg'
import safe from '../Assets/Safe.jpg'
import training from '../Assets/Training.jpg'
import ment from '../Assets/mentorship.jpg'
import scholarship from '../Assets/scholarship.jpg'

const Card1 = () => {
  return (
    <>
      <h1>OUR SERVICES</h1>
      <div className="container">
        {/* card 1  */}
        <div className="card">
          <div className="imgBx">
            <img
              src={edu}
              alt=""
              srcset=""
            />
          </div>
          <div className="content">
            <h2>Education access to girls</h2>
            <br />           

            <p>
              Women & Girls should have the same access to education as men &
              boys. Governments and educational institutions should work to
              remove financial, cultural, and logistical barriers that prevent
              women from accessing education.
            </p>
          </div>
        </div>
        {/* <!-- card 2 --> */}
        <div className="card">
          <div className="imgBx">
            <img src={gender} alt="" />
          </div>
          <div className="content">
            <h2>Gender Responsive Curriculum</h2>
            <br />          

            <p>
              The curriculum should be designed to challenge gender stereotypes
              and promote gender equality. It should include subjects that
              empower women, such as women's history, gender studies, and
              women's contributions to various fields.
            </p>
          </div>
        </div>
        {/* <!-- card 3 --> */}
        <div className="card">
          <div className="imgBx">
            <img src={safe} alt="" />
          </div>
          <div className="content">
            <h2>Safe and Inclusive Learning</h2>
            <br />         

            <p>
              Educational institutions must ensure that learning environments
              are safe and supportive for women and girls. This includes
              addressing issues such as sexual harassment, gender-based
              violence, and bullying.
            </p>
          </div>
        </div>
        <br />
        {/* <!-- card 4 --> */}
        <div className="card">
          <div className="imgBx">
            <img src={scholarship} alt="" />
          </div>
          <div className="content">
            <h2>Scholarship and Financials</h2>
            <br />
            <p>
              Women & Girls should have the same access to education as men &
              boys. Governments and educational institutions should work to
              remove financial, cultural, and logistical barriers that prevent
              women from accessing education.
            </p>
          </div>
        </div>
        {/* card 5 */}
        <div className="card">
          <div className="imgBx">
            <img src={training} alt="" />
          </div>
          <div className="content">
            <h2>Training & Capacity Building</h2>
            <br />        

            <p>
              Providing training and capacity- building programs specifically
              for women and girls can equip them with the necessary skills,
              knowledge, and confidence to succeed in their educational
              pursuits.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="imgBx">
            <img src={ment} alt="" />
          </div>
          <div className="content">
            <h2>Mentorship & Role Models</h2>
            <br />      

            <p>
              Encouraging mentorship programs and promoting positive role models
              can inspire and empower women in education. Mentors can provide
              guidance and advice, while role models can inspire women and girls
              to pursue their career goals.
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
};
export default Card1;

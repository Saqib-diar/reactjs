import data from "../../data/index.json"

function MySkills () {
    return(
        <section id="myskills" className="myskills-section"> 
            <div className="portfolio-container">
                <p className="section-title">My Skill</p>
                <h2 className="skill-section-heading">My Expertise</h2>
            </div>
            <div className="skill-section-container">
                {data?.skills?.map((item, index) => {
                    return <div id={index} className="skill-section">
                        <div className="skill-section-img">
                        <img src={item.src} alt="" />
                        </div>
                        <div className="skill-section-card-content">
                        <h3 className="skill-section-title">{item.title}</h3>
                        <p className="skill-section-desc">{item.description}</p>
                        </div>

                    </div>
                })}
            </div>
        </section>
    )
}

export default MySkills;
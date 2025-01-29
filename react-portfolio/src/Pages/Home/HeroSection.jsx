import heroImage from '../../assets/hero-image.png'

function HeroSection() {
    return (
        <section id="heroSection" className="herosection">
            <div className="herosection-content-box">
                <div className="herosection-content">
                    <p className='section-title'>Hey, I am Saqib Diar</p>
                    <h1 className='hero-section-title'>
                        <span className='hero-section-title-color'>Full Stack</span>
                        <br />
                        Developer
                    </h1>
                    <p className='herosection-desc'>
                    Hi there! I'm a passionate full-stack developer with 3 years of experience, specializing in both web development and custom HTML email template creation. My expertise spans across modern technologies and tools, allowing me to build solutions that are both scalable and visually appealing. 
                    </p>
                </div>
                <button className='btn btn-primary'>Get In Touch</button>
            </div>


            <div className="herosection-img">
                <img src={heroImage} alt="" className='hero-img' />
            </div>
        </section>
    )
}

export default HeroSection;
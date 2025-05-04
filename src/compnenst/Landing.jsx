import "./Landing.css"
export default function Landing() {
  return (
    <header>
        <div className="landingfather">
        <div><img src="./images/Britlex.svg" alt=""/></div>
        <div className="div_txt">
        <div>Home</div>
            <div>Skills</div>
            <div>About Us </div>
            <div>Pricing</div>
            <div>Contacts</div>
        </div>
            <button className="header_btn">Let’s Talk</button>
        </div>



        <section className="section_p">
            <div className="section_div_txt">
                <div>
                    <h1 className="section_h1">Learn Any Foreign Language</h1>
                    <p className="section_text">With our teachers who write a program for each student, you will be able to make your first sketch after the first lesson.</p>
                    <button className="section_btn">Get started</button>
                </div>
                <div>
                    <img src="./images/hero-bg.svg" alt=""  width={800}/>
                </div>
            </div>
        </section>
    </header>
  )
}




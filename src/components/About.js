import Users from "./Users";
const About = () => {
    return (
        <div className="p-2 m-2 w-10/12 mx-auto">
            <h1 className="text-3xl font-[500] text-center" >About Us</h1>
            {/* <Users Location={"Chennai"} />  */}
            <section className="p-4 m-2 bg-lime-100">
                <h2 >Bringing Delicious Meals to Your Doorstep</h2>
                <p>
                    Welcome to FoodieFusion, your go-to app for discovering and ordering the best food from your favorite restaurants. We are committed to delivering not just food, but a delightful dining experience.
                </p>
            </section>
            <section className="p-4 m-2 bg-lime-100">
                <h2 className="text-2xl font-[500]">Our Story</h2>
                <p>
                    FoodieFusion was born out of a love for great food and a desire to make it accessible to everyone, everywhere. What started as a small project has now grown into a full-fledged platform connecting food lovers with the best restaurants in town.
                </p>
            </section>
            <section className="p-4 m-2 bg-lime-100">
                <h2 className="text-2xl font-[500]">Our Mission</h2>
                <p>
                    Our mission is simple: to make every meal a celebration of taste and convenience. We envision a world where good food is always just a click away.
                </p>
            </section>
            <section className="p-4 m-2 bg-lime-100">
                <h2 className="text-2xl font-[500]">Why Choose Us?</h2>
                <p>
                    With [App Name], you get access to a curated selection of top restaurants, lightning-fast delivery, and an easy-to-use app that makes ordering food a breeze.
                </p>
            </section>
            <section className="p-4 m-2 bg-lime-100">
                <h2 className="text-2xl font-[500]">Meet the Team</h2>
                <div className="team-grid">
                    <div className="team-member">
                        <img src="path_to_image" alt="Team Member Name" />
                        <h3>Team Member Name</h3>
                        <p>Role/Position</p>
                    </div>
                    {/* Repeat for other team members */}
                </div>
            </section>


        </div>
    )
}
export default About;
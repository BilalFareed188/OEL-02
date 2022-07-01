import "../global.css";

const Body = () => {
    return(
        <section class="container py-5" id="home">
            <h1>HOME</h1>
            <div class="row align-items-center" id="home">
                <div class="col-md-6">
                    <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/9CB1/production/_118231104_evija-in-london_2.jpg" class="w-100"/>
                </div>
                <div class="col-md-6">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                </div>
            </div>
        </section>
    );
}

export default Body;
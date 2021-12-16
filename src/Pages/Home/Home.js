import "./Home.css"

const Home = () => {
    return (
        <div className="content">
            <div className="settings">
                <span style={{ fontSize: 30 }} >Quiz settings</span>
            </div>

            <img src='/quiz.svg' className="banner" alt="quiz img" />
        </div>
    )
}

export default Home

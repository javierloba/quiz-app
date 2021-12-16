import { TextField } from "@material-ui/core"
import "./Home.css"

const Home = () => {
    return (
        <div className="content">
            <div className="settings">
                <span style={{ fontSize: 30 }} >Quiz settings</span>
                
                <div className="settings_select">
                    <TextField 
                    style={{marginBottom: 25}}
                    label='Enter your name' 
                    variant='outlined' 
                    />

                    <TextField
                    style={{ marginBottom: 30 }}
                    select
                    label='Select category'
                    variant='outlined' 
                    />

                </div>
            </div>


            <img src='/quiz.svg' className="banner" alt="quiz img" />
        </div>
    )
}

export default Home

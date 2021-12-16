import { MenuItem, TextField } from "@material-ui/core"
import "./Home.css"
import Categories, { } from '../../Data/Categories'

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
                    >
                        {
                            Categories.map((cat) => (
                                <MenuItem key={cat.category} value={cat.value}>
                                    {cat.category}
                                </MenuItem>
                            ))
                        }
                    </TextField>

                    <TextField
                    select
                    label='Select Difficulty'
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    variant='outlined'
                    style={{ marginBottom: 30 }}
                    >
                        <MenuItem key='Easy' value='easy'>
                            Easy
                        </MenuItem>
                        <MenuItem key='Medium' value='medium'>
                            Medium
                        </MenuItem>
                        <MenuItem key='Hard' value='hard'>
                            Hard
                        </MenuItem>
                    </TextField>

                </div>
            </div>


            <img src='/quiz.svg' className="banner" alt="quiz img" />
        </div>
    )
}

export default Home

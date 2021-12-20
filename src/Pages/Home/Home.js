import "./Home.css"
import { Button, MenuItem, TextField } from "@material-ui/core"
import Categories from '../../Data/Categories'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"

const Home = ({ name, setName, fetchQuestions }) => {

    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate()

    const handleSubmit = () => {
        if(!category||!difficulty||!name) {
            setError(true);
            return;
        } else {
            setError(false)
            fetchQuestions(category, difficulty);
            navigate("/quiz");
        }
    }

    return (
        <div className="content">
            <div className="settings">
                <span style={{ fontSize: 30 }} >Quiz settings</span>
                
                <div className="settings_select">
                    {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}

                    <TextField 
                    style={{marginBottom: 25}}
                    label='Enter your name' 
                    variant='outlined' 
                    onChange={(e) => setName(e.target.value)}
                    />

                    <TextField
                    style={{ marginBottom: 30 }}
                    select
                    label='Select category'
                    variant='outlined' 
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
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
                    onChange={(e) => setDifficulty(e.target.value)}
                    value={difficulty}
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

                    <Button 
                    variant='contained' 
                    color='primary' 
                    size='large'
                    onClick={handleSubmit}
                    >
                        Start Quiz
                    </Button>

                </div>
            </div>


            <img src='/quiz.png' className="banner" alt="quiz img" />
        </div>
    )
}

export default Home

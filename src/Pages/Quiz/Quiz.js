import { useEffect, useState } from 'react'

const Quiz = ({ name, score, questions, setQuestions, setScore }) => {

    const [options, setOptions] = useState()
    const [currQues, setCurrQues] = useState(0)

    useEffect(() => {
        setOptions(
            questions && 
            handleShuffle([
                questions[currQues]?.correct_answer,
                ...questions[currQues]?.incorrect_answers,
            ])
        );

    }, [questions])

    console.log(options)

    const handleShuffle = (optionss) => {
        return optionss.sort(()=> Math.random()-0.5)
    }

    return (
        <div>
            {name}
        </div>
    )
}

export default Quiz

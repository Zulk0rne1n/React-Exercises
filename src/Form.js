import { useState } from "react";


export function UltForm() {
    const [values, setValues] = useState({
        name: '',
        surname: '',
        job: '',
        age: 0
    });
    const [juniors, setJuniors] = useState([])
    const [seniors, setSeniors] = useState([])

    const handleInputChange = (event) => {

        const { name, value } = event.target
        setValues(oldValues => {
            return { ...oldValues, [name]: value }
        })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if (values.age > 18) {
            setSeniors(oldSeniors => {
                const newSeniors = [...oldSeniors, values];
                return newSeniors;
            })
        } else {
            setJuniors(oldJuniors => {
                const newJuniors = [...oldJuniors, values];
                return newJuniors;
            })
        }
    }
    const isButtonActive = values.name && values.surname && values.job && values.age;
    return (
        <div>
            <form onSubmit={onSubmit}>
                <InputField value={values.name} onChange={handleInputChange} type='text' name='name' />
                <InputField value={values.surname} onChange={handleInputChange} type='text' name='surname' />
                <InputField value={values.job} onChange={handleInputChange} type='text' name='job' />
                <InputField value={values.age} onChange={handleInputChange} type='number' name='age' />
                <button disabled={!isButtonActive} type='submit'>Add</button>
            </form>
            {juniors.length ? <List title='Juniors' values={juniors} /> : null}
            {seniors.length ? <List title='Seniors' values={seniors} /> : null}
        </div>
    )
}

const List = ({ values, title }) => {
    return (
        <div>
            {title}
            {values.map(({ name, surname, age, job }) => {
                console.log({ name, surname, age, job });
                return (
                    <div>
                        <span>{name}</span>
                        <span>{surname}</span>
                        <span>{job}</span>
                        <span>{age}</span>
                    </div>
                )
            })}
        </div>
    )
}



const InputField = ({ value, type, name, onChange }) => {
    return (
        <label htmlFor={name}>
            <input value={value} type={type} name={name} onChange={onChange}></input>
        </label>
    )
}
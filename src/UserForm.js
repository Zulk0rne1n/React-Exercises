import { useState } from "react";

export function UserForm() {
    const [values, setValues] = useState({
        name: '',
        surname: '',
        job: '',
        age: null
    })

    const [juniors, setJuniors] = useState([])
    const [seniors, setSeniors] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault()

        if (values.age < 18) {
            setJuniors(prev => {
                return [...prev, `${values.name} ${values.surname}`]
            })
        } else {
            setSeniors(prev => {
                return [...prev, `${values.name} ${values.surname}`]
            })
        }

        setValues({
            name: '',
            surname: '',
            job: '',
            age: null
        })
    }
    const [selectedItem, setSelectedItem] = useState(null);
    const handleEdit = (index) => {
        setSelectedItem(index);
        setValues({ ...values, ...seniors[index] });
    };
    const handleCancel = () => {
        setSelectedItem(null);
        setValues({
            name: '',
            surname: '',
            job: '',
            age: null
        });
    };
    const handleSave = () => {
        setSeniors((prev) => {
            const updatedList = [...prev];
            updatedList[selectedItem] = { name: values.name, surname: values.surname, job: values.job, age: values.age };
            return updatedList;
        });

        setSelectedItem(null);
        setValues({
            name: '',
            surname: '',
            job: '',
            age: null
        });
    };
    const handleChange = (event) => {
        const { name, value } = event.target

        setValues(prev => {
            return { ...prev, [name]: value }
        })
    }

    const isDisabled = values.name && values.surname && values.job && values.age;

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={values.name} onChange={handleChange} />
                <input type="text" name="surname" value={values.surname} onChange={handleChange} />
                <input type="text" name="job" value={values.job} onChange={handleChange} />
                <input type="number" name="age" value={values.age} onChange={handleChange} />
                {selectedItem === null ? (
                    <button disabled={isDisabled} type="submit">Add</button>
                ) : (
                    <div>
                        <button onClick={handleSave}>Save</button>
                        <button onClick={handleCancel}>Cancel</button>
                    </div>
                )}
            </form>

            <div>
                <h2>Juniors</h2>
                <ul>
                    {juniors.map((person, index) => {
                        return (
                            <li key={index}>
                                {person.name} {person.surname} ({person.age}) - {person.job}
                                <button onClick={() => handleEdit(index)}>Edit</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div>
                <h2>Seniors</h2>
                <ul>
                    {seniors.map((person, index) => {
                        return (
                            <li key={index}>
                                {person.name} {person.surname} ({person.age}) - {person.job}
                                <button onClick={() => handleEdit(index)}>Edit</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}

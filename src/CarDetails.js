import { useState, useEffect, useRef } from "react";

function CarDetails({ initialData }) {
    const [formData, setFormData] = useState([]);
    const initialRef = useRef()

    useEffect(() => {
        initialRef.current.model.value = initialData.model
        initialRef.current.year.value = initialData.year
        initialRef.current.color.value = initialData.color
    }, [initialData])

    const handleChange = (event) => {
        initialRef.current.reset()
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with formData
        console.log(formData);
    };


    return (
        <form ref={initialRef} onSubmit={handleSubmit}>
            <label htmlFor="model">
                Model:
                <input
                    type="text"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="year">
                Year:
                <input
                    type="text"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="color">
                Color:
                <input
                    type="text"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default CarDetails;

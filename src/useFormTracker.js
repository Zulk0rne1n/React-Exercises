import { useState } from "react";


export function useFormTracker() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value, });
    };

    return [formData, handleInputChange];
};
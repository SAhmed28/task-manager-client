import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    const imgHostKey = process.env.REACT_APP_imgbb_key;

    const handleAddTask = (data) => {
        console.log(data);

        const form = document.getElementById('addTask');
        console.log(form)

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const taskEntry = {
                        task: data.task,
                        image: imgData.data.url,
                        status: "incomplete"

                    }

                    fetch('http://localhost:5000/task', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(taskEntry)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.task} is added successfully!`);
                            form.reset()
                            // navigate('/mytask')
                        })
                }
            })

    }

    useEffect(() => {
        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                console.log("Enter key was pressed. Run your function.");
                event.preventDefault();
                // callMyFunction();
                handleAddTask()
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, []);

    return (
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto mt-8">
            <h2 className='text-xl font-bold pt-2 pb-6 text-blue-600'>Add a Task</h2>
            <form onSubmit={handleSubmit(handleAddTask)} id='addTask'>
                <div className="form-group mb-6">
                    <textarea
                        className="form-control block w-full px-3 py-1.5 text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                        id="exampleFormControlTextarea13"
                        rows="3"
                        placeholder="Write Down Your Task"
                        {...register("task", { required: "Task Name is required" })}
                    ></textarea>
                </div>

                <div className="mb-3 w-96">
                    <label htmlFor="formFileSm" className="form-label font-bold inline-block mb-2 text-gray-700">Upload Image</label>
                    <input className="form-control
                                block
                                w-full
                                px-2
                                py-1
                                text-sm
                                font-normal
                                text-gray-700  
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="formFileSm"
                        type="file"
                        {...register("image", { required: "Image is required" })} />
                </div>



                <button type="submit" className="w-full px-6 py-2.5 mt-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md
                                    hover:bg-blue-700 hover:shadow-lg
                                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                    active:bg-blue-800 active:shadow-lg
                                    transition
                                    duration-150
                                    ease-in-out">
                    ADD TO My Task
                </button>
            </form>
        </div>
    );
};

export default AddTask;
import React from 'react';

const AddTask = () => {
    return (
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto mt-8">
            <h2 className='text-xl font-bold pt-2 pb-6 text-blue-600'>Add a Task</h2>
            <form>
                <div class="form-group mb-6">
                    <textarea
                        class="form-control block w-full px-3 py-1.5 text-base
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
                    ></textarea>
                </div>

                <div class="mb-3 w-96">
                    <label for="formFileSm" class="form-label inline-block mb-2 text-gray-700">Upload Image</label>
                    <input class="form-control
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
                        id="formFileSm" type="file" />
                </div>



                <button type="submit" class="w-full px-6 py-2.5 mt-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md
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
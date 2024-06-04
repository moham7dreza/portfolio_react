import {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {createUser} from "../../features/users/user.slice.js";
import {nanoid} from "@reduxjs/toolkit";

export const CreateAuthor = () => {

    const [title, setTitle] = useState('')

    const [requestStatus, setRequestStatus] = useState('idle')

    const dispatch = useDispatch();

    const nav = useNavigate();

    // simple validation
    const canSave = [title].every(Boolean) && requestStatus === 'idle'

    const handleSubmit = async () => {
        // console.log(title, content)
        if (canSave) {
            try {
                setRequestStatus('pending')
                // dispatch action with payload
                const payload = {
                    id: nanoid(),
                    name: title,
                }
                await dispatch(createUser(payload));
                setTitle('')
                nav('/blogs/authors')
            } catch (e) {
                console.error('failed to add new user', e)
            } finally {
                // finally run in all cases
                setRequestStatus('idle')
            }
        }
    }
    return (<>
            {/*<!-- Card Section -->*/}
            <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 mx-auto">{/*<!-- Card -->*/}
                <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-gray-900">
                    <div className="mb-8">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-neutral-200">
                            user
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-neutral-400">
                            Manage your user settings.
                        </p>
                    </div>

                    <form>
                        {/*<!-- Grid -->*/}
                        <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">

                            <div className="sm:col-span-3">
                                <label htmlFor="user-title"
                                       className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                    user name
                                </label>
                            </div>
                            {/*<!-- End Col -->*/}

                            <div className="sm:col-span-9">
                                <input id="user-title" type="text" name="title" value={title}
                                       onChange={(e) => setTitle(e.target.value)}
                                       className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
                            </div>
                            {/*<!-- End Col -->*/}


                        </div>
                        {/*<!-- End Grid -->*/}

                        <div className="mt-5 flex justify-end gap-x-2">
                            <button type="button"
                                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                                Cancel
                            </button>
                            <button type="button" onClick={handleSubmit} disabled={!canSave}
                                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                Save changes
                            </button>
                        </div>
                    </form>
                </div>
                {/*<!-- End Card -->*/}
            </div>
            {/*<!-- End Card Section -->*/}
        </>
    )
}
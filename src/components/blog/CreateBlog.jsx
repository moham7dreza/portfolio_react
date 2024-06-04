import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addNewBlog} from "../../features/blogs/blog.slice.js";
import {useNavigate} from "react-router-dom";
import {selectUsers} from "../../features/users/user.slice.js";
import {nanoid} from "@reduxjs/toolkit";

export const CreateBlog = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    const [requestStatus, setRequestStatus] = useState('idle')

    const users = useSelector(selectUsers)

    const dispatch = useDispatch();

    const nav = useNavigate();

    // simple validation
    const canSave = [title, content, userId].every(Boolean) && requestStatus === 'idle'

    const handleSubmit = async () => {
        // console.log(title, content)
        if (canSave) {
            try {
                setRequestStatus('pending')
                // dispatch action with payload
                const payload = {
                    id: nanoid(),
                    date: new Date().toISOString(),
                    title: title,
                    content: content,
                    user_id: userId,
                    reactions: {
                        thumbUp: 0,
                        hooray: 0,
                        heart: 0,
                        rocket: 0,
                        eyes: 0
                    }
                }
                await dispatch(addNewBlog(payload));
                setTitle('')
                setContent('')
                setUserId('')
                nav('/')
            } catch (e) {
                console.error('failed to add new blog', e)
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
                            post
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-neutral-400">
                            Manage your post settings.
                        </p>
                    </div>

                    <form>
                        {/*<!-- Grid -->*/}
                        <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">

                            <div className="sm:col-span-3">
                                <label htmlFor="post-title"
                                       className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                    post title
                                </label>
                            </div>
                            {/*<!-- End Col -->*/}

                            <div className="sm:col-span-9">
                                <input id="post-title" type="text" name="title" value={title}
                                       onChange={(e) => setTitle(e.target.value)}
                                       className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
                            </div>
                            {/*<!-- End Col -->*/}

                            <div className="sm:col-span-3">
                                <label htmlFor="post-author"
                                       className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                    post author
                                </label>
                            </div>
                            {/*<!-- End Col -->*/}

                            <div className="sm:col-span-9">
                                <select id="post-author" name="user_id" value={userId}
                                        onChange={(e) => setUserId(e.target.value)}
                                        className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                                    <option selected>Select a author</option>
                                    {
                                        users.map((user) => {
                                            return <option key={user.id} value={user.id}>{user.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                            {/*<!-- End Col -->*/}

                            <div className="sm:col-span-3">
                                <label htmlFor="post-content"
                                       className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                                    post content
                                </label>
                            </div>
                            {/*<!-- End Col -->*/}

                            <div className="sm:col-span-9">
                                <textarea id="post-content" name="content" value={content}
                                          onChange={(e) => setContent(e.target.value)}
                                          className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                          rows="6" placeholder="Type your message..."/>
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
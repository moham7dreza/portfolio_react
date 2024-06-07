import {useSelector} from "react-redux";
import {Link, useNavigate, useParams} from "react-router-dom";
import {ShowTime} from "../ShowTime.jsx";
import {AuthorName} from "./AuthorName.jsx";
import {ReactionButtons} from "../blog/ReactionButtons.jsx";
import {useMemo} from "react";
import {Spinner} from "../Spinner.jsx";
import {selectById, useDeleteUserMutation} from "../../features/users/user.slice.js";
import {createSelector} from "@reduxjs/toolkit";
import {useGetBlogsQuery} from "../../api/api.slice.js";

const Blogs = ({blogs}) => {
    return (
        <>
            {
                blogs.map(blog => (
                    <div key={blog.id}>
                        {/*<!-- Card -->*/}
                        <Link to={`/blogs/${blog.id}`} className="group block rounded-xl">
                            <div className="aspect-w-16 aspect-h-9">
                                <img className="w-full object-cover rounded-xl"
                                     src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
                                     alt="Image Description"/>
                            </div>
                            <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
                                {blog.title}
                            </h3>
                            <AuthorName userId={blog.user_id}/>
                            <ShowTime timestamp={blog.date}/>
                            <ReactionButtons blog={blog}/>
                        </Link>
                        {/*<!-- End Card -->*/}
                    </div>
                ))
            }
        </>
    )
}

const AuthorListBlog = () => {

    const {authorId} = useParams();
    const author = useSelector(state => selectById(state, authorId))

    // return author blogs which memoized(render limited) with selector
    const selectUserBlogs = useMemo(() => {
        return createSelector(
            [response => response.data, (response, userId) => userId],
            (data, userId) => data?.filter(blog => blog.user_id === userId) ?? []
        )
    }, []);

    let {
        blogs,
        isLoading,
        isSuccess,
        isError,
        // isFetching,
        error,
    } = useGetBlogsQuery(undefined, {
        selectFromResult: result => ({
            // we can not change result because it stays in redux store
            ...result,
            blogs: selectUserBlogs(result, authorId)
        })
    })

    const [deleteAuthor] = useDeleteUserMutation()

    // let blogs = useSelector(state => selectAuthorBlogs(state, authorId))

    // sort blogs order by date ascending
    blogs = blogs.slice().sort((a, b) => b.date.localeCompare(a.date));

    const nav = useNavigate();

    let content;

    if (isLoading) {
        content = <Spinner/>
    } else if (isSuccess) {
        if (blogs.length > 0) {
            content = <Blogs blogs={blogs}/>
        } else {
            content = (
                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                    this author has no blogs yet.
                </h2>
            )
        }
    } else if (isError) {
        content = error
    }

    const handleDelete = async (id) => {
        await deleteAuthor(id)
        nav('/blogs/authors')
    }

    return (
        <>
            {/*<!-- Card Blog -->*/}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/*<!-- Title -->*/}
                <div className="max-w-2xl mb-10">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Customer
                        stories</h2>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">See how game-changing companies are making
                        the most of every engagement with Preline.</p>
                    <div className="flex justify-center items-center gap-4">
                        <button
                            className="w-full sm:w-auto mt-3 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-white text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
                            onClick={() => nav('/blogs/create')}>
                            create new blog
                        </button>
                        <button onClick={() => handleDelete(authorId)}
                                className="w-full sm:w-auto mt-3 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-white text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none">
                            delete author
                        </button>
                    </div>
                </div>
                {/*<!-- End Title -->*/}

                {/*<!-- Grid -->*/}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {content}
                </div>
                {/*<!-- End Grid -->*/}
            </div>
            {/*<!-- End Card Blog -->*/}
        </>
    )
}

export default AuthorListBlog;
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

const ListBlog = () => {

    const blogs = useSelector(state => state.blogs)

    const nav = useNavigate();

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
                    <button
                        className="w-full sm:w-auto mt-3 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-white text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
                        onClick={() => nav('blogs/create')}>
                        create new blog
                    </button>
                </div>
                {/*<!-- End Title -->*/}

                {/*<!-- Grid -->*/}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                                    <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                                        {blog.date}
                                    </p>
                                </Link>
                                {/*<!-- End Card -->*/}
                            </div>
                        ))
                    }
                </div>
                {/*<!-- End Grid -->*/}
            </div>
            {/*<!-- End Card Blog -->*/}
        </>
    )
}

export default ListBlog;
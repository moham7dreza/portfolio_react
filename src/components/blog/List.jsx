import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const List = () => {

    const blogs = useSelector(state => state.blogs)
    console.log(blogs)
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
                </div>
                {/*<!-- End Title -->*/}

                {/*<!-- Grid -->*/}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        blogs.map(blog => (
                            <>
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
                            </>
                        ))
                    }
                </div>
                {/*<!-- End Grid -->*/}
            </div>
            {/*<!-- End Card Blog -->*/}
        </>
    )
}

export default List;
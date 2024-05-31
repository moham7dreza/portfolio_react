import {useSelector} from "react-redux";
import {selectById} from "../../features/users/user.slice.js";
import {E_404} from "../error/E_404.jsx";

export const ShowAuthor = ({userId}) => {

    const author = useSelector(state => selectById(state, userId))

    if (!author) {
        return <E_404/>
    }

    return (
        <>
            <h5 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
                {author.name}
            </h5>
        </>
    )
}
import {useSelector} from "react-redux";
import {selectById} from "../../features/users/user.slice.js";

export const AuthorName = ({userId}) => {

    const author = useSelector(state => selectById(state, userId))

    if (!author) {
        // return <E_404/>
        return 'undefined user not found';
    }

    return (
        <>
            <h5 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
                {author.name}
            </h5>
        </>
    )
}
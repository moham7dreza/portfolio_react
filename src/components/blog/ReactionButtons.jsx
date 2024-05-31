import {useDispatch} from "react-redux";
import {reactionAdded} from "../../features/blogs/blog.slice.js";

export const ReactionButtons = ({blog}) => {
    const reactionEmoji = {
        thumbUp: "👍",
        hooray: "🤣",
        heart: "❤️",
        rocket: "🚀",
        eyes: "👁️",
    }

    const dispatch = useDispatch();

    return (
        <>
            {
                Object.entries(reactionEmoji).map(([key, value]) => {
                    const payload = {
                        id: blog.id,
                        reaction: key,
                    }

                    return (
                        <button key={name} type="button" onClick={() => dispatch(reactionAdded(payload))}>
                            {value} <span className="text-white">{blog.reactions[key]}</span>
                        </button>
                    )
                })
            }
        </>
    )
}
import {formatDistanceToNow, parseISO} from "date-fns-jalali";

export const ShowTime = ({timestamp}) => {
    let timeAgo = ''
    if (timestamp) {
        const date = parseISO(timestamp)
        const time = formatDistanceToNow(date)
        timeAgo = `${time} پیش`
    }
    return (
        <>
            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                {timeAgo}
            </p>
        </>
    )
}
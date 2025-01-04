// extracting time
export const extractCurrentTime = () => {
    const options = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };

    const formatter = new Intl.DateTimeFormat('en-US', options);
    const currentTimeInPakistan = formatter.format(new Date());

    return currentTimeInPakistan;
}


export const extractCurrentDate = () => {
    const options = {
        timeZone: 'Asia/Karachi',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    };

    const formatter = new Intl.DateTimeFormat('en-US', options);
    const currentDateInPakistan = formatter.format(new Date());

    return currentDateInPakistan
}

export const formatTimeDifference = (createdDate, createdTime) => {
    const now = new Date();
    const postDateTime = new Date(`${createdDate} ${createdTime}`);
    const differenceInMilliseconds = now - postDateTime;

    const differenceInHours = Math.floor(differenceInMilliseconds / (1000 * 60 * 60));
    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    const differenceInMonths = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 30));

    if (differenceInMonths > 0) {
        return `${differenceInMonths} month${differenceInMonths > 1 ? 's' : ''} ago`;
    } else if (differenceInDays > 0) {
        return `${differenceInDays}d`;
    } else if (differenceInHours > 0) {
        return `${differenceInHours}h`;
    } else {
        return `Just now`; // For very recent posts
    }
};
export const sortHelper = <T>(sort: keyof T, eq: boolean, arr: T[]): T[] => {
    if (!arr.length || !sort) {
        return arr;
    }
    const firstElement = arr?.[0]?.[sort];
    const newArr = [...arr];

    if (typeof firstElement === 'number') {
        return newArr.sort((a, b) => eq ? +a[sort] - +b[sort] : +b[sort] - +a[sort]);
    } else if (typeof firstElement === 'string') {
        const temp = newArr.sort(function (a, b) {
            if (a[sort] < b[sort]) { return -1; }
            if (a[sort] > b[sort]) { return 1; }
            return 0;
        });
        return eq ? temp : temp.reverse();
    } else {
        return arr;
    }
};
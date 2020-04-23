export const ADDLISTIDSR = 'add list ids';
export const addShowList = (id) => {
    return {
        type: ADDLISTIDSR,
        id,
    };
};

export const FETCHDETAIL = 'fetch detail';
export const fetchDetail = (id) => {
    return {
        type: FETCHDETAIL,
        data: { id, age: 23, name: 'Zedhugh Chen' }
    };
};

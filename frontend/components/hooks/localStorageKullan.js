export default function localStorageKullan () {
    const setlocalS = (item,yeni) => {
        localStorage.setItem(item,yeni);
    }
    const getlocalS = (item) => {
        return localStorage.getItem(item);
    }
    return [setlocalS,getlocalS];
}
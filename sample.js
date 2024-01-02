const get = ({ ...obj } = {}, path, def = undefined) => {
    let arr = path.split(".");
    arr.map((a) => (obj = obj && obj[a] ? obj[a] : def));
    return obj;
};

let payload = {
    name: "chetan",
    place: {
        dist: "bengaluru",
        taluk: {
            name: "rural",
            area: {
                name: "hongasandra"
            }
        }
    }
}

let res = get(payload, "place.taluk.area.name");

console.log(Math.random(1));